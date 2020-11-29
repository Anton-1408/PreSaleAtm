import React, { useState, useContext, useEffect } from 'react';
import { CheckBox } from 'react-native-elements';
import { FlatList } from 'react-native';

import { ExtraParam } from 'types/elementType';
import { iconSize } from 'styles/constants';
import { colors } from 'styles';
import { ActionContext, ContextParams } from 'lib/actionHelper';
import { styles } from './styles';

const RadioBoxGroup: React.FC<RadioBoxGroupProps> = ({ initialState, setResult }) => {
  const context = useContext<ContextParams>(ActionContext);
  const [radioBoxes, setRadioBoxes] = useState<ExtraParam[]>([]);

  useEffect(() => {
    const listBoxes = context.extraParams.map((radioBox) => {
      return radioBox.title === initialState ? {...radioBox, value: true} : radioBox;
    });
    setRadioBoxes(listBoxes);
  }, [context, initialState]);

  useEffect(() => {
    let result = '';
    radioBoxes.forEach((radioBox) => {
      if(radioBox.value)
        result = radioBox.title;
    });
    setResult(result);
  }, [radioBoxes]);

  return(
    <FlatList
      data={radioBoxes}
      keyExtractor={(item) => (item.id).toString()}
      renderItem={({ item }) => (
        <CheckBox
          checked={item.value}
          title={item.title}
          checkedIcon='dot-circle-o'
          uncheckedIcon='circle-o'
          onPress={() => {
            setRadioBoxes((prev) => {
              return prev.map((radioBox) => {
                return radioBox.id === item.id
                  ? {...radioBox, value: !radioBox.value}
                  : {...radioBox, value: false};
              })
            });
          }}
          size={iconSize}
          checkedColor={colors.color5}
          uncheckedColor={colors.color5}
          containerStyle={styles.containerBox}
          textStyle={styles.textBox}
        />
      )}
    />
  )
};

interface RadioBoxGroupProps{
  setResult: Function,
  initialState: string,
};

export default RadioBoxGroup;
import React, { useState, useEffect, useContext } from 'react';
import { CheckBox } from 'react-native-elements';
import { FlatList } from 'react-native';

import { ExtraParam } from 'types/elementType';
import { iconSize } from 'styles/constants';
import { colors } from 'styles';
import { styles } from './styles';
import { ActionContext, ContextParams } from 'lib/actionHelper';

const CheckBoxGroup: React.FC<CheckBoxGroupProps> = ({ setResult, initialState }) => {
  const [chechBoxes, setCheckBoxes] = useState<ExtraParam[]>([]);
  const context = useContext<ContextParams>(ActionContext);

  useEffect(() => {
    const arrChecked: ExtraParam[] = [...context.extraParams];
    initialState.forEach((el: string) => {
      arrChecked.forEach((checkBox) => {
        if(el === checkBox.title)
          checkBox.value = true
      });
    });
    setCheckBoxes(arrChecked);
  }, [initialState, context]);

  useEffect(() => {
    const result: Array<string> = [];
    chechBoxes.forEach((checkBox) => {
      if(checkBox.value){
        result.push(checkBox.title)
      }
    });
    setResult(JSON.stringify(result));
  }, [chechBoxes]);

  return(
    <FlatList
      data={chechBoxes}
      keyExtractor={(item) => (item.id).toString()}
      renderItem={({ item }) => (
        <CheckBox
          checked={item.value}
          title={item.title}
          onPress={() => {
            setCheckBoxes((prev) => {
              return prev.map((checkBox) => {
                return checkBox.id === item.id
                  ? {...checkBox, value: !checkBox.value}
                  : checkBox;
              })
            });
          }}
          size={iconSize}
          checkedColor={colors.color5}
          uncheckedColor={colors.color5}
          containerStyle = {styles.containerBox}
          textStyle={styles.textBox}
        />
      )}
    />
  )
};

interface CheckBoxGroupProps{
  setResult: Function,
  initialState: Array<string>,
}

export default CheckBoxGroup;

import React, { useState, useCallback, useEffect } from 'react';
import { CheckBox } from 'react-native-elements';
import { colorIsWork } from '../../styles/constantStyle';
import { styles } from './styles';

interface iProps{
  readonly setResult: Function,
  readonly initialState: boolean,
}

const CheckBoxType: React.FC<iProps> = ({setResult, initialState}) => {
    const [checked, setSchecked] = useState<boolean>(false);

    useEffect(() => {
      setSchecked(initialState);
      setResult(Number(initialState));
    }, [initialState]);

    const clickBox = useCallback(() => {
      setResult(Number(!checked));
      setSchecked((prev) => {
        return !prev;
      });
    }, [checked])


    return(
        <CheckBox
          checked={checked}
          onPress={clickBox}
          size={150}
          checkedColor={colorIsWork}
          uncheckedColor={colorIsWork}
          containerStyle={styles.constainerBox}
        />
    );
};

export default CheckBoxType;
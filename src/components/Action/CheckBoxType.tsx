import React, {useState} from 'react';
import { CheckBox } from 'react-native-elements';
import { colorIsWork } from '../../styles/constantStyle';
import { componentsStyle } from '../../styles/componentsStyle';

export const CheckBoxType = () => {
    const [checked, setSchecked] = useState(false);
    return(
        <CheckBox
          checked={checked}
          onPress={() => {
            setSchecked((prev) => {
              return !prev
            });
          }}
          size={150}
          checkedColor={colorIsWork}
          uncheckedColor={colorIsWork}
          containerStyle={componentsStyle.checkBoxStyle}
        />
    );
};
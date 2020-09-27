import React, { useState } from 'react';
import { TextInput } from 'react-native';
import { componentsStyle } from '../../styles/componentsStyle';

interface iProps{
    typeKeyBoard: any
}

export const InputType: React.FC<iProps> = ({typeKeyBoard}) => {
    const [text, setText] = useState('');
    return(
        <TextInput
            value={text}
            multiline={true}
            autoFocus={true}
            blurOnSubmit={true}
            style={componentsStyle.inputTypeStyle}
            onChangeText={(text) => {
                setText(text);
            }}
            keyboardType={typeKeyBoard}
        />
    );
};
import React, { useState, useCallback, useEffect } from 'react';
import { TextInput } from 'react-native';
import { componentsStyle } from '../../styles/componentsStyle';

interface iProps{
    readonly typeKeyBoard: any,
    readonly setResult: Function,
    readonly initialState: string
}

export const InputType: React.FC<iProps> = ({typeKeyBoard, setResult, initialState}) => {
    const [text, setText] = useState('');

    useEffect(() => {
        setText(initialState)
        setResult(initialState)
    }, [initialState]);

    const chahgeText = useCallback((text) => {
        setText(text);
        setResult(text)
    }, [])

    return(
        <TextInput
            value={text}
            multiline={true}
            autoFocus={true}
            blurOnSubmit={true}
            style={componentsStyle.inputTypeStyle}
            onChangeText={chahgeText}
            keyboardType={typeKeyBoard}
        />
    );
};
import React, { useState, useCallback, useEffect } from 'react';
import { TextInput } from 'react-native';
import { styles } from './styles';

interface iProps{
  readonly typeKeyBoard: 'numeric' | 'default',
  readonly setResult: Function,
  readonly initialState: string
}

const Input: React.FC<iProps> = ({typeKeyBoard, setResult, initialState}) => {
  const [text, setText] = useState<string>('');

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
      style={styles.inputStyle}
      onChangeText={chahgeText}
      keyboardType={typeKeyBoard}
    />
  );
};

export default Input;
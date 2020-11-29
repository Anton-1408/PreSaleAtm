import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

const NoAction: React.FC<NoActionProps> = ({ initialState, setResult }) => {
  useEffect(() => {
    setResult(initialState)
  }, [initialState]);

  return(
    <View style={styles.container}>
      <Text style={styles.text}>Прочтите комментарий!</Text>
    </View>
  )
};

interface NoActionProps{
  initialState: number,
  setResult: Function
};

export default NoAction;
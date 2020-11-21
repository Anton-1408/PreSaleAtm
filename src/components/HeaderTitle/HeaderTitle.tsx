import React from 'react';
import { Text, View } from "react-native"
import { styles } from './styles';

interface iProps{
  readonly title: string
}

const HeaderTitle: React.FC<iProps> = ({ title }) => {
  return(
    <View>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  )
};

export default HeaderTitle;
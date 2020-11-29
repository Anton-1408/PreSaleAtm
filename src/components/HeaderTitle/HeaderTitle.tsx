import React from 'react';
import { Text, View } from "react-native"
import { styles } from './styles';

const HeaderTitle: React.FC<HeaderTitleProps> = ({ title }) => {
  return(
    <View>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  )
};

interface HeaderTitleProps{
  title: string
}

export default HeaderTitle;
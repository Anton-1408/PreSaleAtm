import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { NavigationProp } from 'types/navigationTypes';
import { iconSizeBar } from 'styles/constants';
import { colors, base } from 'styles';

const ButtonHome: React.FC<ButtonHomeProps> = ({}) => {
  const navigation = useNavigation<NavigationProp>();

  return(
    <Pressable
      style={base.buttonBarContainer}
      onPress={() => {
        navigation.popToTop();
      }}
    >
      <Icon name="home" color={colors.color0} size={iconSizeBar}/>
    </Pressable>
  )
};

interface ButtonHomeProps{ };

export default ButtonHome;
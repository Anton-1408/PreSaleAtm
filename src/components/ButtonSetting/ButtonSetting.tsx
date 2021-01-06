import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { Pressable } from 'react-native';

import { NavigationProp } from 'types/navigationTypes';
import { iconSizeBar } from 'styles/constants';
import { colors, base } from 'styles';
import { routes } from 'navigation/routes';

const ButtonSetting: React.FC<ButtonSettingProps> = ({}) => {
  const navigation = useNavigation<NavigationProp>();

  return(
    <Pressable
      style={base.buttonBarContainer}
      onPress={() => {
        navigation.navigate(routes.Setting);
      }}
    >
      <Icon name="md-settings-sharp" color={colors.color0} size={iconSizeBar}/>
    </Pressable>
  )
};

interface ButtonSettingProps{ };

export default ButtonSetting;
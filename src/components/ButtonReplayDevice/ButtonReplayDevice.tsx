import React from 'react';
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { sizeButtonAction } from 'styles/constants';
import { setReplayDevice } from 'lib/actionHelper';
import { NavigationProp } from 'types/navigationTypes';
import { colors, base } from 'styles';

const ButtonReplayDevice: React.FC<ButtonReplayDeviceProps> = ({ deviceKey }) => {
  const navigation = useNavigation<NavigationProp>();
  return(
    <Pressable
      style={base.buttonBarContainer}
      onPress={() => {
        setReplayDevice(deviceKey);
        navigation.goBack();
      }}
    >
      <Icon name='play' size={sizeButtonAction} color={colors.color2}/>
    </Pressable>
  )
}

interface ButtonReplayDeviceProps{
  deviceKey: number
};

export default ButtonReplayDevice;
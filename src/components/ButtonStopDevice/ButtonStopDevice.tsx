import React from 'react';
import { Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { sizeButtonAction } from '../../styles/constants';
import { NavigationProp } from '../../types/navigationTypes';
import { setStopDevice } from '../../lib/actionHelper';
import { useNavigation } from '@react-navigation/native';
import { colors, base } from '../../styles';

const ButtonStopDevice: React.FC<ButtonStopDeviceProps> = ({deviceKey, actionKey}) => {
  const navigation = useNavigation<NavigationProp>();

  return(
    <Pressable
      style={base.buttonBarContainer}
      onPress={() => {
        setStopDevice(actionKey, deviceKey);
        navigation.goBack();
      }}
    >
      <Icon name='stop' size={sizeButtonAction} color={colors.color3}/>
    </Pressable>
  )
}

interface ButtonStopDeviceProps{
  deviceKey: number
  actionKey: number,
};

export default ButtonStopDevice;
import React from 'react';
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { sizeButtonAction } from '../../styles/constants';
import { setReplayDevice } from '../../lib/actionHelper';
import { tNavigationProp } from '../../types/navigationTypes';
import { colors, base } from '../../styles';

interface iProps{
  readonly deviceKey: number
};

const ButtonReplayDevice: React.FC<iProps> = ({ deviceKey }) => {
  const navigation: tNavigationProp = useNavigation();
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

export default ButtonReplayDevice;
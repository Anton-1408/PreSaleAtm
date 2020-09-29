import React from 'react';
import { Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colorIsStop, sizeButtonAction, colorPress } from '../../styles/constantStyle';
import { componentsStyle } from '../../styles/componentsStyle';
import { setStopedDevice } from '../../lib/actionHelper';
import { useNavigation } from '@react-navigation/native';

interface iProps{
    deviceKey: number
};

export const ButtonStopDevice: React.FC<iProps> = ({deviceKey}) => {
    const navigation = useNavigation();
    return(
        <Pressable
            style={({ pressed }) => [
                componentsStyle.buttonBarContainer
            ]}
            onPress={() => {
                setStopedDevice(deviceKey, 1);
                navigation.goBack();
            }}
        >
            <Icon name='stop' size={sizeButtonAction} color={colorIsStop}/>
        </Pressable>
    )
}
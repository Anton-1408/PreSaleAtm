import React from 'react';
import { Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colorIsDone, sizeButtonAction, colorPress } from '../../styles/constantStyle';
import { componentsStyle } from '../../styles/componentsStyle';
import { setStopedDevice } from '../../lib/actionHelper';
import { useNavigation } from '@react-navigation/native';


interface iProps{
    deviceKey: number
};

export const ButtonReplayDevice: React.FC<iProps> = ({deviceKey}) => {
    const navigation = useNavigation();
    return(
        <Pressable
            style={({ pressed }) => [
                componentsStyle.buttonBarContainer
            ]}
            onPress={() => {
                setStopedDevice(deviceKey, 0);
                navigation.goBack();
            }}
        >
            <Icon name='play' size={sizeButtonAction} color={colorIsDone}/>
        </Pressable>
    )
}
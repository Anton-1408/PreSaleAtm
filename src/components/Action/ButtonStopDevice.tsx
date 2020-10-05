import React from 'react';
import { Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colorIsStop, sizeButtonAction, colorPress } from '../../styles/constantStyle';
import { componentsStyle } from '../../styles/componentsStyle';
import { setStopDevice } from '../../lib/actionHelper';
import { useNavigation } from '@react-navigation/native';

interface iProps{
    readonly deviceKey: number
    readonly actionKey: number,
};

export const ButtonStopDevice: React.FC<iProps> = ({deviceKey, actionKey}) => {
    const navigation = useNavigation();
    return(
        <Pressable
            style={({ pressed }) => [
                componentsStyle.buttonBarContainer
            ]}
            onPress={() => {
                setStopDevice(actionKey, deviceKey);
                navigation.goBack();
            }}
        >
            <Icon name='stop' size={sizeButtonAction} color={colorIsStop}/>
        </Pressable>
    )
}
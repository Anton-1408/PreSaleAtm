import React from 'react';
import { Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colorIsStop, sizeButtonAction, colorPress } from '../../styles/constantStyle';
import { componentsStyle } from '../../styles/componentsStyle';

export const ButtonStopDevice: React.FC = () => {
    return(
        <Pressable
            style={({ pressed }) => [
                componentsStyle.buttonBarContainer
            ]}
        >
            <Icon name='stop' size={sizeButtonAction} color={colorIsStop}/>
        </Pressable>
    )
}
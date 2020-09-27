import React from 'react';
import { Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colorIsDone, sizeButtonAction, colorPress } from '../../styles/constantStyle';
import { componentsStyle } from '../../styles/componentsStyle';


export const ButtonReplayDevice: React.FC = () => {
    return(
        <Pressable
            style={({ pressed }) => [
                componentsStyle.buttonBarContainer
            ]}
        >
            <Icon name='play' size={sizeButtonAction} color={colorIsDone}/>
        </Pressable>
    )
}
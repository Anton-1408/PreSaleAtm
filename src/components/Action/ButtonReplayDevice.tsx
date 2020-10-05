import React from 'react';
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colorIsDone, sizeButtonAction, colorPress } from '../../styles/constantStyle';
import { componentsStyle } from '../../styles/componentsStyle';
import { setReplayDevice } from '../../lib/actionHelper';

interface iProps{
    readonly deviceKey: number
};

export const ButtonReplayDevice: React.FC<iProps> = ({deviceKey}) => {
    const navigation = useNavigation();
    return(
        <Pressable
            style={({ pressed }) => [
                componentsStyle.buttonBarContainer
            ]}
            onPress={() => {
                setReplayDevice(deviceKey);
                navigation.goBack();
            }}
        >
            <Icon name='play' size={sizeButtonAction} color={colorIsDone}/>
        </Pressable>
    )
}
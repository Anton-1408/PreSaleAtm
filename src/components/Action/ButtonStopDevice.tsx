import React from 'react';
import { Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colorIsStop, sizeButtonAction } from '../../styles/constantStyle';
import { tNavigationProp } from '../../types/navigationTypes';
import { componentsStyle } from '../../styles/componentsStyle';
import { setStopDevice } from '../../lib/actionHelper';
import { useNavigation } from '@react-navigation/native';

interface iProps{
    readonly deviceKey: number
    readonly actionKey: number,
};

export const ButtonStopDevice: React.FC<iProps> = ({deviceKey, actionKey}) => {
    const navigation: tNavigationProp = useNavigation();
    return(
        <Pressable
            style={componentsStyle.buttonBarContainer}
            onPress={() => {
                setStopDevice(actionKey, deviceKey);
                navigation.goBack();
            }}
        >
            <Icon name='stop' size={sizeButtonAction} color={colorIsStop}/>
        </Pressable>
    )
}
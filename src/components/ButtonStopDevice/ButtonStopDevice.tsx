import React from 'react';
import { Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colorIsStop, sizeButtonAction } from '../../styles/constants';
import { tNavigationProp } from '../../types/navigationTypes';
import { setStopDevice } from '../../lib/actionHelper';
import { useNavigation } from '@react-navigation/native';
import { base } from '../../styles/base';

interface iProps{
    readonly deviceKey: number
    readonly actionKey: number,
};

const ButtonStopDevice: React.FC<iProps> = ({deviceKey, actionKey}) => {
    const navigation: tNavigationProp = useNavigation();

    return(
        <Pressable
            style={base.buttonBarContainer}
            onPress={() => {
                setStopDevice(actionKey, deviceKey);
                navigation.goBack();
            }}
        >
            <Icon name='stop' size={sizeButtonAction} color={colorIsStop}/>
        </Pressable>
    )
}

export default ButtonStopDevice;
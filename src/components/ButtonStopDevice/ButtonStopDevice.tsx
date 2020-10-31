import React from 'react';
import { Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colorIsStop, sizeButtonAction } from '../../styles/constantStyle';
import { tNavigationProp } from '../../types/navigationTypes';
import { setStopDevice } from '../../lib/actionHelper';
import { useNavigation } from '@react-navigation/native';
import { style } from '../../styles/style';

interface iProps{
    readonly deviceKey: number
    readonly actionKey: number,
};

const ButtonStopDevice: React.FC<iProps> = ({deviceKey, actionKey}) => {
    const navigation: tNavigationProp = useNavigation();

    return(
        <Pressable
            style={style.buttonBarContainer}
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
import React from 'react';
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colorIsDone, sizeButtonAction } from '../../styles/constantStyle';
import { setReplayDevice } from '../../lib/actionHelper';
import { tNavigationProp } from '../../types/navigationTypes';
import { style } from '../../styles/style';

interface iProps{
    readonly deviceKey: number
};

const ButtonReplayDevice: React.FC<iProps> = ({ deviceKey }) => {
    const navigation: tNavigationProp = useNavigation();
    return(
        <Pressable
            style={style.buttonBarContainer}
            onPress={() => {
                setReplayDevice(deviceKey);
                navigation.goBack();
            }}
        >
            <Icon name='play' size={sizeButtonAction} color={colorIsDone}/>
        </Pressable>
    )
}

export default ButtonReplayDevice;
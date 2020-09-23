import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { Pressable } from 'react-native';
import { profileScreenNavigationPropStack } from '../types/navigationTypes';
import { componentsStyle } from '../styles/componentsStyle';
import { iconSizeBar } from '../styles/constantStyle';

interface iProps{
    navigation: profileScreenNavigationPropStack
};

export const ButtonHome: React.FC<iProps> = ({navigation}) => {
    return(
        <Pressable
            onPress={() => {
                navigation.popToTop();
            }}
        >
            <Icon name="home" style={componentsStyle.buttonSetting} size={iconSizeBar}/>
        </Pressable>
    )
};
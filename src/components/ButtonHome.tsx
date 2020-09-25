import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { profileScreenNavigationPropStack } from '../types/navigationTypes';
import { componentsStyle } from '../styles/componentsStyle';
import { iconSizeBar } from '../styles/constantStyle';

interface iProps{

};

export const ButtonHome: React.FC<iProps> = ({}) => {
    const navigation: profileScreenNavigationPropStack = useNavigation();
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
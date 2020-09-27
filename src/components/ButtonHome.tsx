import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { profileScreenNavigationPropStack } from '../types/navigationTypes';
import { componentsStyle } from '../styles/componentsStyle';
import { iconSizeBar, colorWhite } from '../styles/constantStyle';

interface iProps{

};

export const ButtonHome: React.FC<iProps> = ({}) => {
    const navigation: profileScreenNavigationPropStack = useNavigation();
    return(
        <Pressable
            style={componentsStyle.buttonBarContainer}
            onPress={() => {
                navigation.popToTop();
            }}
        >
            <Icon name="home" color={colorWhite} size={iconSizeBar}/>
        </Pressable>
    )
};
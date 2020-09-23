import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { Pressable } from 'react-native';
import { profileScreenNavigationPropStack } from '../types/navigationTypes';
import { componentsStyle } from '../styles/componentsStyle';
import { iconSizeBar } from '../styles/constantStyle';

interface iProps{
    navigation: profileScreenNavigationPropStack
};

export const ButtonSetting: React.FC<iProps> = ({navigation}) => {
    return(
        <Pressable
            onPress={() => {
                navigation.navigate("Setting");
            }}
        >
            <Icon name="md-settings-sharp" style={componentsStyle.buttonSetting} size={iconSizeBar}/>
        </Pressable>
    )
};
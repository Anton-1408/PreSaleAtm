import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { Pressable } from 'react-native';
import { profileScreenNavigationPropStack } from '../types/navigationTypes';
import { componentsStyle } from '../styles/componentsStyle';
import { iconSizeBar } from '../styles/constantStyle';
import { useNavigation } from '@react-navigation/native';

interface iProps{

};

export const ButtonSetting: React.FC<iProps> = ({}) => {
    const navigation: profileScreenNavigationPropStack = useNavigation();
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
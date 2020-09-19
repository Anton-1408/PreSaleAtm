import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { Pressable } from 'react-native';
import { profileScreenNavigationPropOrder } from '../types/navigationTypes';
import { componentsStyle } from '../styles/componentsStyle';

interface iProps{
    navigation: profileScreenNavigationPropOrder
};

export const ButtonSetting: React.FC<iProps> = ({navigation}) => {
    return(
        <Pressable
            onPress={() => {
                navigation.navigate("Setting");
            }}
        >
            <Icon name="md-settings-sharp" style={componentsStyle.buttonSetting} size={30}/>
        </Pressable>
    )
};
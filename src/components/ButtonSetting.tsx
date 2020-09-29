import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { Pressable } from 'react-native';
import { profileScreenNavigationPropStack } from '../types/navigationTypes';
import { componentsStyle } from '../styles/componentsStyle';
import { iconSizeBar, colorWhite } from '../styles/constantStyle';

export const ButtonSetting: React.FC = ({}) => {
    const navigation: profileScreenNavigationPropStack = useNavigation();
    return(
        <Pressable
            style={componentsStyle.buttonBarContainer}
            onPress={() => {
                navigation.navigate("Setting");
            }}
        >
            <Icon name="md-settings-sharp" color={colorWhite} size={iconSizeBar}/>
        </Pressable>
    )
};
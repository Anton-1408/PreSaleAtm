import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { tNavigationProp } from '../../types/navigationTypes';
import { iconSizeBar, colorWhite } from '../../styles/constants';
import { base } from '../../styles/base';

interface iProps{

};

const ButtonHome: React.FC<iProps> = ({}) => {
    const navigation: tNavigationProp = useNavigation();
    return(
        <Pressable
            style={base.buttonBarContainer}
            onPress={() => {
                navigation.popToTop();
            }}
        >
            <Icon name="home" color={colorWhite} size={iconSizeBar}/>
        </Pressable>
    )
};

export default ButtonHome;
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { Pressable } from 'react-native';
import { tNavigationProp } from '../../types/navigationTypes';
import { iconSizeBar, colorWhite } from '../../styles/constantStyle';
import { style } from '../../styles/style';

const ButtonSetting: React.FC = ({}) => {
    const navigation: tNavigationProp = useNavigation();

    return(
        <Pressable
            style={style.buttonBarContainer}
            onPress={() => {
                navigation.navigate("Setting");
            }}
        >
            <Icon name="md-settings-sharp" color={colorWhite} size={iconSizeBar}/>
        </Pressable>
    )
};

export default ButtonSetting;
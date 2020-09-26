import React from 'react';
import { View, TextInput, Pressable } from 'react-native';
import IconF from 'react-native-vector-icons/FontAwesome5';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import { componentsStyle } from '../styles/componentsStyle';
import { profileScreenNavigationPropStack } from '../types/navigationTypes';
import { useNavigation } from '@react-navigation/native';
import { colorPress } from '../styles/constantStyle';

interface iProps{
    placeholder: string,
    setText: any,
    value: string | undefined
};

export const SearchInput: React.FC<iProps> = ({placeholder, setText, value}) => {
    const navigation: profileScreenNavigationPropStack = useNavigation();
    return(
        <View style={componentsStyle.searchContainer}>
            <IconF name='search' color='#616161' size={20}/>
            <TextInput
                value={value}
                placeholder={placeholder}
                keyboardType={'numeric'}
                onChangeText={(text) => {
                    setText(text)
                }}
                style={componentsStyle.searchInput}
            />
            <Pressable
                style={({ pressed }) => [colorPress(pressed)]}
                onPress={() => {
                    navigation.navigate('ScanBarCode');
                }}
            >
                <IconM name='barcode-scan' color='#616161' size={22}/>
            </Pressable>
        </View>
    );
}
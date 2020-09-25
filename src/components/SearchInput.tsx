import React from 'react';
import { View, TextInput, Pressable } from 'react-native';
import IconF from 'react-native-vector-icons/FontAwesome5';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import { componentsStyle } from '../styles/componentsStyle';
import { profileScreenNavigationPropStack } from '../types/navigationTypes';

interface iProps{

};

export const SearchInput: React.FC<iProps> = ({}) => {
    return(
        <View style={componentsStyle.searchContainer}>
            <IconF name='search' color='#616161' size={20}/>
            <TextInput
                style={componentsStyle.searchInput}
                placeholder="Серийный номер"
                keyboardType={"numeric"}
                onChangeText={(text) => {
                    console.warn(text);

                }}
            />
            <Pressable>
                <IconM name='barcode-scan' color='#616161' size={22}/>
            </Pressable>
        </View>
    );
}
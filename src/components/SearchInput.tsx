import React from 'react';
import { View, TextInput, Pressable } from 'react-native';
import IconF from 'react-native-vector-icons/FontAwesome5';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import { Dispatch } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { iRootReducers } from '../types/reduxTypes';
import { colorIconSearch } from '../styles/constantStyle';
import { componentsStyle } from '../styles/componentsStyle';
import { tNavigationProp } from '../types/navigationTypes';
import { colorPress } from '../styles/constantStyle';
import { setSerialNumberDevice } from '../redux/actions/actions';
import { selectorSerialNumbDevice } from '../redux/selectors/appStateSelectors';

interface iProps{

};

export const SearchInput: React.FC<iProps> = ({}) => {
    const navigation: tNavigationProp = useNavigation();
    const dispatch: Dispatch = useDispatch();
    const serialNumber: string = useSelector(
        (state: iRootReducers) => selectorSerialNumbDevice(state)
    );
    return(
        <View style={componentsStyle.searchContainer}>
            <IconF name='search' color={colorIconSearch} size={20}/>
            <TextInput
                value={serialNumber}
                placeholder='Серийный номер'
                keyboardType={'numeric'}
                onChangeText={(text) => {
                    dispatch(setSerialNumberDevice(text))
                }}
                style={componentsStyle.searchInput}
            />
            <Pressable
                style={({ pressed }) => [colorPress(pressed)]}
                onPress={() => {
                    navigation.navigate('ScanBarCode');
                }}
            >
                <IconM name='barcode-scan' color={colorIconSearch} size={22}/>
            </Pressable>
        </View>
    );
}
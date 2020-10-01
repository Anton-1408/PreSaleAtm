import React from 'react';
import { View, TextInput, Pressable } from 'react-native';
import IconF from 'react-native-vector-icons/FontAwesome5';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import { useNavigation } from '@react-navigation/native';
import { iRootReducers } from '../types/reduxTypes';
import { colorIconSearch } from '../styles/constantStyle';
import { componentsStyle } from '../styles/componentsStyle';
import { profileScreenNavigationPropStack } from '../types/navigationTypes';
import { colorPress } from '../styles/constantStyle';
import { setSerialNumberDevice } from '../redux/actions/actions';

interface iProps{
    serealNumber?: string,
    setSerialNumber?: any
};

const mapStateToProps = (state: iRootReducers) => {
    return{
        serealNumber: state.appStateReducer.serialNumber,
    }
};

const mapDispatchToProps = (dispatch: ThunkDispatch<iRootReducers, unknown, Action<Object>>) => {
    return {
        setSerialNumber: (serialNumber: string) => dispatch(setSerialNumberDevice(serialNumber))
    };
};

const SearchInput: React.FC<iProps> = ({serealNumber, setSerialNumber}) => {
    const navigation: profileScreenNavigationPropStack = useNavigation();
    return(
        <View style={componentsStyle.searchContainer}>
            <IconF name='search' color={colorIconSearch} size={20}/>
            <TextInput
                value={serealNumber}
                placeholder='Серийный номер'
                keyboardType={'numeric'}
                onChangeText={(text) => {
                    setSerialNumber(text)
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);
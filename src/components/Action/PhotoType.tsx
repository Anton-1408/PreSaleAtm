import React, { useState, useEffect, useContext } from 'react';
import { View, Pressable } from 'react-native';
import { style } from '../../styles/style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colorWhite, iconSize } from '../../styles/constantStyle';
import { useNavigation } from '@react-navigation/native';
import { ActionContext } from '../../lib/actionHelper';
import { iRootReducers } from '../../types/reduxTypes';
import { connect } from 'react-redux';

interface iProps{
    initialState: Array<string>,
    setResult: Function,
    readonly photoAction: Array<Object>
};

const mapStateToProps = (state: iRootReducers) => {
    return{
        photoAction: state.appStateReducer,
    }
};

const PhotoType: React.FC<iProps> = ({initialState, setResult, photoAction}) => {
    const navigation = useNavigation();
    const context = useContext(ActionContext)
    const [images, setImages] = useState([]);

    useEffect(() => {
        setImages((prev) => {
            const newState: any = [...prev, ...photoAction];
            return newState;
        })
    }, [photoAction])


    return(
        <View style={{height: '100%', width: '100%'}}>
            <Pressable
                style={[style.button, { bottom: 200}]}
                onPress={() => {
                    navigation.navigate('Camera')
                }}
            >
                <Icon name='camera-enhance' size={iconSize} color={colorWhite}/>
            </Pressable>
            <Pressable
                style={[style.button, { bottom: 300}]}
                onPress={() => {
                    navigation.navigate('Gallery')
                }}
            >
                <Icon name='folder-image' size={iconSize} color={colorWhite}/>
            </Pressable>
        </View>
    );
}

export default connect(mapStateToProps, null)(PhotoType);
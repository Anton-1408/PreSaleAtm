import React, { useState, useEffect } from 'react';
import { View, Pressable } from 'react-native';
import { style } from '../../styles/style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colorWhite, iconSize } from '../../styles/constantStyle';
import { useNavigation } from '@react-navigation/native';
import { iRootReducers } from '../../types/reduxTypes';
import { connect } from 'react-redux';
import { componentsStyle } from '../../styles/componentsStyle';

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
    const [images, setImages] = useState([]);

    useEffect(() => {
        // setImages((prev) => {
        //     if(prev.length > 0){
        //         const newState: any = [...prev, ...photoAction];
        //         return newState;
        //     }
        // })
        console.warn(images);
    }, [photoAction])


    return(
        <View style={componentsStyle.photoTypeContainer}>
            <Pressable
                style={[style.button, componentsStyle.buttonCamera]}
                onPress={() => {
                    navigation.navigate('Camera')
                }}
            >
                <Icon name='camera-enhance' size={iconSize} color={colorWhite}/>
            </Pressable>
            <Pressable
                style={[style.button, componentsStyle.buttonGallery]}
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
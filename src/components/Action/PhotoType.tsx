import React, { useState, useEffect } from 'react';
import { View, Pressable } from 'react-native';
import { style } from '../../styles/style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colorWhite, iconSize } from '../../styles/constantStyle';
import { useNavigation } from '@react-navigation/native';

interface iProps{
    initialState: Array<string>,
    setResult: Function
};

export const PhotoType: React.FC<iProps> = ({initialState, setResult}) => {
    const navigation = useNavigation();

    useEffect(() => {
        //console.warn('cw');
    }, [])

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
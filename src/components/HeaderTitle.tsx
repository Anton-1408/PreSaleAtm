import React from 'react';
import { Text, View } from "react-native"
import { style } from '../styles/style';

interface iProps{
    title: string
}

export const HeaderTitle: React.FC<iProps> = ({title}) => {
    return(
        <View>
            <Text style={style.headerTitle}>{title}</Text>
        </View>
    )
};
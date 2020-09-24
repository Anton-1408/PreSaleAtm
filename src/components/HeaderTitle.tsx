import React from 'react';
import { style } from '../styles/style';
import { Text, View } from "react-native"

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
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { componentsStyle } from '../../styles/componentsStyle';

interface iProps{
    readonly initialState: number,
    readonly setResult: Function
};

export const NoActionType: React.FC<iProps> = ({initialState, setResult}) => {
    useEffect(() => {
        setResult(initialState)
    }, [initialState]);

    return(
        <View style={componentsStyle.noActionContainer}>
            <Text style={componentsStyle.noActionText}>Прочтите комментарий!</Text>
        </View>
    )
};
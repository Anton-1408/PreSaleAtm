import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

interface iProps{
    readonly initialState: number,
    readonly setResult: Function
};

const NoAction: React.FC<iProps> = ({ initialState, setResult }) => {
    useEffect(() => {
        setResult(initialState)
    }, [initialState]);

    return(
        <View style={styles.container}>
            <Text style={styles.text}>Прочтите комментарий!</Text>
        </View>
    )
};

export default NoAction;
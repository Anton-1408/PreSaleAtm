import React, { useState, useContext, useEffect } from 'react';
import { CheckBox } from 'react-native-elements';
import { FlatList } from 'react-native';
import { colorIsWork, iconSize } from '../../styles/constants';
import { ActionContext, iContext } from '../../lib/actionHelper';
import { styles } from './styles';

interface iProps{
    readonly setResult: Function,
    readonly initialState: string,
}

const RadioBoxGroup: React.FC<iProps> = ({ initialState, setResult }) => {
    const context: iContext = useContext(ActionContext);
    const [radioBoxes, setRadioBoxes] = useState([]);

    useEffect(() => {
        const listBoxes = context.extraParams.map((item: any) => {
            return item.title === initialState ? {...item, value: true} : item;
        });
        setRadioBoxes(listBoxes);
    }, [context, initialState]);

    useEffect(() => {
        let result = '';
        radioBoxes.forEach((item: any) => {
            if(item.value)
                result = item.title;
        });
        setResult(result);
    }, [radioBoxes]);

    return(
        <FlatList
            data={radioBoxes}
            keyExtractor={(item: any) => (item.id).toString()}
            renderItem={({ item }) => (
                <CheckBox
                    checked={item.value}
                    title={item.title}
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    onPress={() => {
                        setRadioBoxes((prev: any) => {
                            return prev.map((next: any) => {
                                return next.id === item.id ?
                                    {...next, value: !next.value} :
                                    {...next, value: false};
                            })
                        });
                    }}
                    size={iconSize}
                    checkedColor={colorIsWork}
                    uncheckedColor={colorIsWork}
                    containerStyle={styles.containerBox}
                    textStyle={styles.textBox}
                />
            )}
        />
    )
};

export default RadioBoxGroup;
import React, { useState, useEffect, useContext } from 'react';
import { CheckBox } from 'react-native-elements';
import { FlatList } from 'react-native';
import { colorIsWork, iconSize } from '../../styles/constantStyle';
import { styles } from './styles';
import { ActionContext, iContext } from '../../lib/actionHelper';

interface iProps{
    readonly setResult: Function,
    readonly initialState: Array<string>,
}

const CheckBoxGroup: React.FC<iProps> = ({ setResult, initialState }) => {
    const [chechBoxes, setCheckBoxes] = useState<Array<Object>>([]);
    const context: iContext = useContext(ActionContext);

    useEffect(() => {
        const arrChecked: any = [...context.extraParams];
        initialState.forEach((el: string) => {
            arrChecked.forEach((item: any) => {
                if(el === item.title)
                    item.value = true
            });
        });
        setCheckBoxes(arrChecked);
    }, [initialState, context]);

    useEffect(() => {
        const result: Array<string> = [];
        chechBoxes.forEach((item: any) => {
            if(item.value){
                result.push(item.title)
            }
        });
        setResult(JSON.stringify(result));
    }, [chechBoxes]);

    return(
        <FlatList
            data={chechBoxes}
            keyExtractor={(item: any) => (item.id).toString()}
            renderItem={({item}: any) => (
                <CheckBox
                    checked={item.value}
                    title={item.title}
                    onPress={() => {
                        setCheckBoxes((prev: any) => {
                            return prev.map((next: any) => {
                                return next.id === item.id ? {
                                    ...next,
                                    value: !next.value
                                } : next;
                            })
                        });
                    }}
                    size={iconSize}
                    checkedColor={colorIsWork}
                    uncheckedColor={colorIsWork}
                    containerStyle = {styles.containerBox}
                    textStyle={styles.textBox}
                />
            )}
        />
    )
};

export default CheckBoxGroup;

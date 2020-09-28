import React, { useState, useContext, useEffect } from 'react';
import { CheckBox } from 'react-native-elements';
import { colorIsWork, iconSize } from '../../styles/constantStyle';
import { FlatList } from 'react-native';
import { ActionContext } from '../../lib/actionHelper';
import { componentsStyle } from '../../styles/componentsStyle';

interface iProps{
    setResult: Function,
    initialState: string,
}

export const RadioBoxGroup: React.FC<iProps> = ({initialState, setResult}) => {
    const context = useContext(ActionContext);
    const [radioBoxes, setRadioBoxes] = useState([]);
    const [initialFlag, setInitialFlag] = useState(true);

    useEffect(() => {
        if(initialFlag){
            const listBoxes = context.extraParams.map((item: any) => {
                return item.title === initialState ? {...item, value: true} : item;
            })
            setRadioBoxes(listBoxes);
            listBoxes.length > 0 ? setInitialFlag(false) : setInitialFlag(true)
        }
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
                    containerStyle={componentsStyle.containerStyleCheckBox}
                    textStyle={componentsStyle.textBoxStyle}
                />
            )}
        />
    )
};
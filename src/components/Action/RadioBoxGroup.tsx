import React, {useState, useContext, useEffect} from 'react';
import { CheckBox } from 'react-native-elements';
import { colorIsWork, iconSize } from '../../styles/constantStyle';
import { FlatList } from 'react-native';
import { ActionContext } from '../../lib/actionHelper';
import { componentsStyle } from '../../styles/componentsStyle';

interface iProps{

}

export const RadioBoxGroup: React.FC<iProps> = () => {
    const context = useContext(ActionContext);
    const [radioBoxes, setRadioBoxes] = useState([]);

    useEffect(() => {
        setRadioBoxes(context.extraParams);
    }, [context]);

    return(
        <FlatList
            data={radioBoxes}
            keyExtractor={(item: any) => (item.id).toString()}
            renderItem={({item}: any) => (
                <CheckBox
                    checked={item.value}
                    title={item.title}
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    onPress={() => {
                        setRadioBoxes((prev: any) => {
                            return prev.map((next: any) => {
                                return next.id === item.id ? {...next, value: !next.value} : {...next, value: false};
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
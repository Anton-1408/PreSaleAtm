import React, {useState, useContext, useEffect} from 'react';
import { CheckBox } from 'react-native-elements';
import { colorIsWork, iconSize } from '../../styles/constantStyle';
import { FlatList } from 'react-native';
import { ActionContext } from '../../lib/actionHelper';
import { componentsStyle } from '../../styles/componentsStyle';

interface iProps{

}

export const CheckBoxGroup: React.FC<iProps> = () => {
    const context = useContext(ActionContext);
    const [chechBoxes, setCheckBoxes] = useState([]);

    useEffect(() => {
        setCheckBoxes(context.extraParams);
    }, [context]);

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
                                return next.id === item.id ? {...next, value: !next.value} : next;
                            })
                        });
                    }}
                    size={iconSize}
                    checkedColor={colorIsWork}
                    uncheckedColor={colorIsWork}
                    containerStyle = {componentsStyle.containerStyleCheckBox}
                    textStyle={componentsStyle.textBoxStyle}
                />
            )}
        />
    )
};
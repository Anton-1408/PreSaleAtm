import React, {useState, useContext, useEffect} from 'react';
import { CheckBox } from 'react-native-elements';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import { colorIsWork, iconSize } from '../../styles/constantStyle';
import { FlatList } from 'react-native';
import { ActionContext } from '../../lib/actionHelper';
import { componentsStyle } from '../../styles/componentsStyle';
import { iRootReducers } from '../../types/reduxTypes';
import { setResultAction } from '../../redux/actions/actions';

interface iProps{
    setResult?: any
}

const mapDispatchToProps = (dispatch: ThunkDispatch<iRootReducers, unknown, Action<Object>>) => {
    return{
        setResult: (value: any) => dispatch(setResultAction(value)),
    }
};

const RadioBoxGroup: React.FC<iProps> = ({setResult}) => {
//    const context = useContext(ActionContext);
    const [radioBoxes, setRadioBoxes] = useState([]);

    // useEffect(() => {
    //     const listBoxes = context.resultAction ? context.extraParams.map((item: any) => {
    //         return context.resultAction === item.title ? {...item, value: true} : item;
    //     }) : context.extraParams;
    //     setRadioBoxes(listBoxes);
    // }, [context]);

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

export default connect(null, mapDispatchToProps)(RadioBoxGroup)
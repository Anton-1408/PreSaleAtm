import React, { useState, useContext, useEffect } from 'react';
import { CheckBox } from 'react-native-elements';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import { colorIsWork, iconSize } from '../../styles/constantStyle';
import { FlatList } from 'react-native';
import { componentsStyle } from '../../styles/componentsStyle';
import { iRootReducers } from '../../types/reduxTypes';
import { setResultAction } from '../../redux/actions/actions';
import { getExtraParams, getResult, ActionContext } from '../../lib/actionHelper';

interface iProps{
    setResult?: any,
    deviceKey?: any,
    actionKey?: any,
    type: string,
}

const mapDispatchToProps = (dispatch: ThunkDispatch<iRootReducers, unknown, Action<Object>>) => {
    return{
        setResult: (value: any) => dispatch(setResultAction(value)),
    }
};

const mapStateToProps = (state: iRootReducers) => {
    return{
        deviceKey: state.holderKeysReducer.deviceKey,
        actionKey: state.holderKeysReducer.actionKey,
    }
};

const CheckBoxGroup: React.FC<iProps> = ({setResult, deviceKey, actionKey, type}) => {
    const [chechBoxes, setCheckBoxes] = useState([]);
    const [resultAction, setReultCheck] = useState([]);
    const context = useContext(ActionContext);

    useEffect(() => {
        const listCheckBoxes = context.extraParams;
        setCheckBoxes(listCheckBoxes);
        console.warn('context');
    }, [context]);

    // useEffect(() => {
    //     getResult(actionKey, deviceKey, type, setReultCheck)
    // }, [])

    // useEffect(() => {
    //     const listChecked = chechBoxes;
    //     resultAction.forEach((el: string) => {
    //         listChecked.forEach((item: any) => {
    //             if(el === item.title)
    //                 item.value = true
    //         });
    //     });
    //    // setCheckBoxes(listChecked);
    // }, [resultAction])

    //useEffect(() => {
        // const result: Array<string> = [];
        // chechBoxes.forEach((item: any) => {
        //     if(item.value){
        //         result.push(item.title);
        //     }
        // });
        // console.warn(result);
        // setResult(JSON.stringify(result))
    //}, [chechBoxes]);

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

export default connect(mapStateToProps, mapDispatchToProps)(CheckBoxGroup)
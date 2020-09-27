import React, { useState, useContext, useEffect } from 'react';
import { TextInput } from 'react-native';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import { componentsStyle } from '../../styles/componentsStyle';
import { iRootReducers } from '../../types/reduxTypes';
import { setResultAction } from '../../redux/actions/actions';
import { getResult } from '../../lib/actionHelper';

interface iProps{
    typeKeyBoard: any,
    setResult?: any,
    type: string,
    deviceKey?: any,
    actionKey?: any,
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

const InputType: React.FC<iProps> = ({typeKeyBoard, setResult, type, deviceKey, actionKey}) => {
    const [text, setText] = useState('');

    useEffect(() => {
        getResult(actionKey, deviceKey, type, setText)
    }, []);

    useEffect(() => {
        setResult(text)
    }, [text]);

    return(
        <TextInput
            value={text}
            multiline={true}
            autoFocus={true}
            blurOnSubmit={true}
            style={componentsStyle.inputTypeStyle}
            onChangeText={(text) => {
                setText(text);
            }}
            keyboardType={typeKeyBoard}
        />
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(InputType)
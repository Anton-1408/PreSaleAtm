import React, { Fragment, useState, useEffect } from 'react';
import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import { connect } from 'react-redux';
import { useRoute } from '@react-navigation/native';
import { CheckBoxType } from './CheckBoxType';
import { InputType } from './InputType';
import { CheckBoxGroup } from './CheckBoxGroup';
import { RadioBoxGroup } from './RadioBoxGroup';
import { PhotoType } from './PhotoType';
import { typeAction } from '../../types/typeAction';
import { getResult, initialState } from '../../lib/actionHelper';
import { iRootReducers } from '../../types/reduxTypes';
import { setResultAction } from '../../redux/actions/actions';

interface iProps{
    actionKey: number,
    deviceKey: number,
    setResult?: any,
};

const mapDispatchToProps = (dispatch: ThunkDispatch<iRootReducers, unknown, Action<Object>>) => {
    return{
        setResult: (value: number) => dispatch(setResultAction(value)),
    }
};

const ActionType: React.FC<iProps> = ({actionKey, deviceKey, setResult}) => {
    const route: any = useRoute();
    const type = route.params.type;
    const [state, setInitialState] = useState(initialState(type));

    useEffect(() => {
        getResult(actionKey, deviceKey, type, setInitialState);
    }, []);

    switch(type){
        case typeAction.checkbox:
            return(
                <CheckBoxType
                    initialState={state}
                    setResult={setResult}
                />
            );
        case typeAction.photo:
            return(
                <PhotoType
                    initialState={[]}
                    setResult={setResult}
                />
            );
        case typeAction.textInput:
            return(
                <InputType
                    initialState={state}
                    setResult={setResult}
                    typeKeyBoard='default'
                />
            );
        case typeAction.numberInput:
            return(
                <InputType
                    initialState={state}
                    setResult={setResult}
                    typeKeyBoard='numeric'
                />
            );
        case typeAction.radioGroup:
            return(
                <RadioBoxGroup
                    initialState={state}
                    setResult={setResult}
                />
            );
        case typeAction.checkboxGroup:
            return(
                <CheckBoxGroup
                    initialState={state}
                    setResult={setResult}
                />
            );
        default:
            return(
                <Fragment>
                </Fragment>
            )
    };
};

export default connect(null, mapDispatchToProps)(ActionType)
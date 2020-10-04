import React, { Fragment, useState, useEffect } from 'react';
import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import { connect } from 'react-redux';
import { useRoute } from '@react-navigation/native';
import { typeAction } from '../../types/typeAction';
import { getResult, initialState, getPhoto } from '../../lib/actionHelper';
import { iRootReducers } from '../../types/reduxTypes';
import { setResultAction } from '../../redux/actions/actions';
import { setPhotosAction } from '../../redux/actions/actions';
import { CheckBoxType } from './CheckBoxType';
import { InputType } from './InputType';
import { CheckBoxGroup } from './CheckBoxGroup';
import { RadioBoxGroup } from './RadioBoxGroup';
import  PhotoType from './PhotoType';
import { NoActionType } from './NoActionType';

interface iProps{
    actionKey: number,
    deviceKey: number,
    setResult?: any,
    setPhotos?: any,
};

const mapDispatchToProps = (dispatch: ThunkDispatch<iRootReducers, unknown, Action<Object>>) => {
    return{
        setResult: (value: number) => dispatch(setResultAction(value)),
        setPhotos: (paths: Array<Object>) => dispatch(setPhotosAction(paths))
    }
};

const ActionType: React.FC<iProps> = ({actionKey, deviceKey, setResult, setPhotos}) => {
    const route: any = useRoute();
    const type = route.params.type;
    const [state, setInitialState] = useState(initialState(type));

    const removePhotosFromStore = () => {
        setPhotos([]);
    };

    useEffect(() => {
        if(route.params.type === typeAction.photo){
            getPhoto(actionKey, deviceKey,  setInitialState)
            return removePhotosFromStore;
        }
        else{
            getResult(actionKey, deviceKey, type, setInitialState);
        }
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
                    initialState={state}
                    setResult={setResult}
                    photoAction={[]}
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
        case typeAction.noAction:
            return(
                <NoActionType
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
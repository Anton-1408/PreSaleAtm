import React, { Fragment, useState, useEffect } from 'react';
import { Dispatch } from 'redux';
import { useDispatch } from 'react-redux';
import { useRoute } from '@react-navigation/native';
import { typeAction } from '../../types/typeAction';
import { getResult, initialState, getPhoto } from '../../lib/actionHelper';
import { setResultAction } from '../../redux/actions/actions';
import { tRoutePropAction } from '../../types/navigationTypes';
import {
  CheckBoxGroup,
  CheckBox,
  Input,
  RadioBoxGroup,
  Photo,
  NoAction
} from '..';

interface iProps{
  readonly actionKey: number,
  readonly deviceKey: number,
};

const ActionType: React.FC<iProps> = ({ actionKey, deviceKey }) => {
  const route: tRoutePropAction = useRoute();
  const type: string = route.params.type;
  const [state, setInitialState] = useState(initialState(type));
  const dispatch: Dispatch = useDispatch();

  useEffect(() => {
    if(type === typeAction.photo){
      getPhoto(actionKey, deviceKey,  setInitialState)
    }
    else{
      getResult(actionKey, deviceKey, type, setInitialState);
    }
  }, []);

  const setResult = (value: any) => {
    return dispatch(setResultAction(value))
  };

  switch(type){
    case typeAction.checkbox:
    return(
      <CheckBox
        initialState={state}
        setResult={setResult}
      />
    );
    case typeAction.photo:
      return(
        <Photo
          initialState={state}
          setResult={setResult}
        />
      );
    case typeAction.textInput:
      return(
        <Input
          initialState={state}
          setResult={setResult}
          typeKeyBoard='default'
        />
      );
    case typeAction.numberInput:
      return(
        <Input
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
        <NoAction
          initialState={state}
          setResult={setResult}
        />
      );
    default:
      return(
        <Fragment>
        </Fragment>
      );
  };
};

export default ActionType;
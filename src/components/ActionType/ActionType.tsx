import React, { Fragment, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useRoute } from '@react-navigation/native';

import { ActionResult, ElementGalleryPhoto } from '../../types/elementType';
import { typeAction } from '../../types/typeAction';
import { getResult, initialState, getPhoto } from '../../lib/actionHelper';
import { setResultAction } from '../../redux/actions/actions';
import { RoutePropAction } from '../../types/navigationTypes';
import {
  CheckBoxGroup,
  CheckBox,
  Input,
  RadioBoxGroup,
  Photo,
  NoAction
} from '..';

const ActionType: React.FC<ActionTypeProps> = ({ actionKey, deviceKey }) => {
  const route = useRoute<RoutePropAction>();
  const type: string = route.params.type;
  const dispatch = useDispatch();
  const [state, setInitialState] = useState<ActionResult>(initialState(type));

  useEffect(() => {
    if(type === typeAction.photo){
      getPhoto(actionKey, deviceKey,  setInitialState)
    }
    else{
      getResult(actionKey, deviceKey, type, setInitialState);
    }
  }, []);

  const setResult = (value: ActionResult) => {
    return dispatch(setResultAction(value))
  };

  switch(type){
    case typeAction.checkbox:
    return(
      <CheckBox
        initialState={state as boolean}
        setResult={setResult}
      />
    );
    case typeAction.photo:
      return(
        <Photo
          initialState={state as ElementGalleryPhoto[]}
          setResult={setResult}
        />
      );
    case typeAction.textInput:
      return(
        <Input
          initialState={state as string}
          setResult={setResult}
          typeKeyBoard='default'
        />
      );
    case typeAction.numberInput:
      return(
        <Input
          initialState={state as string}
          setResult={setResult}
          typeKeyBoard='numeric'
        />
      );
    case typeAction.radioGroup:
      return(
        <RadioBoxGroup
          initialState={state as string}
          setResult={setResult}
        />
      );
    case typeAction.checkboxGroup:
      return(
        <CheckBoxGroup
          initialState={state as string[]}
          setResult={setResult}
        />
      );
    case typeAction.noAction:
      return(
        <NoAction
          initialState={state as number}
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

interface ActionTypeProps{
  actionKey: number,
  deviceKey: number,
};

export default ActionType;
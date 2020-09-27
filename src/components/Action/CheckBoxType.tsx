import React, { useState, useContext, useEffect } from 'react';
import { CheckBox } from 'react-native-elements';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import { colorIsWork } from '../../styles/constantStyle';
import { componentsStyle } from '../../styles/componentsStyle';
import { getResult } from '../../lib/actionHelper';
import { iRootReducers } from '../../types/reduxTypes';
import { setResultAction } from '../../redux/actions/actions';

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

const CheckBoxType: React.FC<iProps> = ({setResult, actionKey, type, deviceKey}) => {
    const [checked, setSchecked] = useState(false);

    useEffect(() => {
      getResult(actionKey, deviceKey, type, setSchecked)
    }, []);

    useEffect(() => {
      const result = checked ? 1 : 0;
      setResult(result);
    }, [checked]);

    return(
        <CheckBox
          checked={checked}
          onPress={() => {
            setSchecked((prev) => {
              return !prev
            });
          }}
          size={150}
          checkedColor={colorIsWork}
          uncheckedColor={colorIsWork}
          containerStyle={componentsStyle.checkBoxStyle}
        />
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckBoxType)
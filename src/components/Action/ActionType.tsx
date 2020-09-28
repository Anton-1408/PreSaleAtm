import React, { Fragment } from 'react';
import CheckBoxType from './CheckBoxType';
import InputType from './InputType';
import CheckBoxGroup from './CheckBoxGroup';
import RadioBoxGroup from './RadioBoxGroup';
import { typeAction } from '../../types/typeAction';

interface iProps{
    type: string,
};

export const ActionType: React.FC<iProps> = ({type}) => {
    switch(type){
        case typeAction.checkbox:
            return(
                <CheckBoxType
                    type={type}
                />
            );
        case typeAction.photo:
            return(
                <Fragment>
                </Fragment>
            );
        case typeAction.textInput:
            return(
                <InputType
                    typeKeyBoard='default'
                    type={type}
                />
            );
        case typeAction.numberInput:
            return(
                <InputType
                    typeKeyBoard='numeric'
                    type={type}
                />
            );
        case typeAction.radioGroup:
            return(
                <RadioBoxGroup
                    //type='radioGroup'
                />
            );
        case typeAction.checkboxGroup:
            return(
                <CheckBoxGroup
                    type='checkboxGroup'
                />
            );
        default:
            return(
                <Fragment>
                </Fragment>
            )
    };
};
import React, { Fragment } from 'react';
import { CheckBoxType } from './CheckBoxType';
import { InputType } from './InputType';
import { CheckBoxGroup } from './CheckBoxGroup';
import { RadioBoxGroup } from './RadioBoxGroup';

interface iProps{
    type: string,
};

export const ActionType: React.FC<iProps> = ({type}) => {
    switch(type){
        case 'checkbox':
            return(
                <CheckBoxType/>
            );
        case 'photo':
            return(
                <Fragment>
                </Fragment>
            );
        case 'textInput':
            return(
                <InputType
                    typeKeyBoard='default'
                />
            );
        case 'numberInput':
            return(
                <InputType
                    typeKeyBoard='numeric'
                />
            );
        case 'radioGroup':
            return(
                <RadioBoxGroup/>
            );
        case 'checkboxGroup':
            return(
                <CheckBoxGroup/>
            );
        default:
            return(
                <Fragment>
                </Fragment>
            )
    };
};
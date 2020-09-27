import React, { Fragment } from 'react';
import CheckBoxType from './CheckBoxType';
import InputType from './InputType';
import CheckBoxGroup from './CheckBoxGroup';
import RadioBoxGroup from './RadioBoxGroup';

interface iProps{
    type: string,
};

export const ActionType: React.FC<iProps> = ({type}) => {
    switch(type){
        case 'checkbox':
            return(
                <CheckBoxType
                    type={type}
                />
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
                    type={type}
                />
            );
        case 'numberInput':
            return(
                <InputType
                    typeKeyBoard='numeric'
                    type={type}
                />
            );
        case 'radioGroup':
            return(
                <RadioBoxGroup
                    //type='radioGroup'
                />
            );
        case 'checkboxGroup':
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
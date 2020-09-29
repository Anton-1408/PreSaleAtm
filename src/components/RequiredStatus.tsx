import React, { Fragment } from 'react';
import { Text } from 'react-native';
import { componentsStyle } from '../styles/componentsStyle';

interface iProps{
    isRequired: number
};

export const RequiredStatus: React.FC<iProps> = ({isRequired}) => {
    if(isRequired){
        return(
            <Text style={[componentsStyle.stepStatusTitle,componentsStyle.stepStatusRequired]}>
                Обязательно
            </Text>
        );
    }
    else{
        return(
            <Fragment>
            </Fragment>
        );
    }
};
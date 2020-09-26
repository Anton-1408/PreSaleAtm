import React, { Fragment } from 'react';
import { Text } from 'react-native';
import { componentsStyle } from '../styles/componentsStyle';

interface iProps{
    isImportant: number,
}

export const ImportantStatus: React.FC<iProps> = ({isImportant}) => {
    if(isImportant){
        return(
            <Text
                style={[
                    componentsStyle.stepStatusTitle,
                    componentsStyle.stepStatusImportant
                ]}
            >
                Важно
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
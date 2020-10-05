import React, { Fragment } from 'react';
import { Text, View } from 'react-native';
import { RequiredStatus } from './RequiredStatus';
import { ImportantStatus } from './ImportantStatus';
import { componentsStyle } from '../styles/componentsStyle';

interface iProps{
    readonly isImportant: number,
    readonly isRequired: number
}

export const StepStatus: React.FC<iProps> = ({isImportant, isRequired}) => {
    if(isImportant || isRequired){
        return(
            <View style={componentsStyle.stepStatusContainer}>
                <Text style={componentsStyle.stepStatusText}>Статус: </Text>
                <ImportantStatus
                    isImportant={isImportant}
                />
                <RequiredStatus
                    isRequired={isRequired}
                />
            </View>
        )
    }
    else{
        return(
            <Fragment>
            </Fragment>
        );
    }
};
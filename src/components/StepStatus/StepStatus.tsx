import React, { Fragment } from 'react';
import { Text, View } from 'react-native';
import { RequiredStatus, ImportantStatus } from '..';
import { styles } from './styles';

interface iProps{
    readonly isImportant: number,
    readonly isRequired: number
}

const StepStatus: React.FC<iProps> = ({isImportant, isRequired}) => {
    if(isImportant || isRequired){
        return(
            <View style={styles.container}>
                <Text style={styles.textStatus}>Статус: </Text>
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

export default StepStatus;
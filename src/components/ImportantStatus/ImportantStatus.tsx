import React, { Fragment } from 'react';
import { styles } from './styles';
import { Text } from 'react-native';

interface iProps{
    readonly isImportant: number,
}

const ImportantStatus: React.FC<iProps> = ({ isImportant }) => {
    if(isImportant){
        return(
            <Text style={styles.title}>Важно</Text>
        );
    }
    else{
        return(
            <Fragment>
            </Fragment>
        );
    }
};

export default ImportantStatus;
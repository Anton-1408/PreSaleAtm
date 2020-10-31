import React, { Fragment } from 'react';
import { Text } from 'react-native';
import { styles } from './styles';

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
import React, { Fragment } from 'react';
import { styles } from './styles';
import { Text } from 'react-native';

const ImportantStatus: React.FC<ImportantStatusProps> = ({ isImportant }) => {
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

interface ImportantStatusProps{
  isImportant: number,
}

export default ImportantStatus;
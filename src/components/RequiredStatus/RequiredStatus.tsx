import React, { Fragment } from 'react';
import { Text } from 'react-native';
import { styles } from './styles';

interface iProps{
  readonly isRequired: number
};

const RequiredStatus: React.FC<iProps> = ({ isRequired }) => {
  if(isRequired){
    return(
      <Text style={styles.title}>Обязательно</Text>
    );
  }
  else{
    return(
      <Fragment>
      </Fragment>
    );
  }
};

export default RequiredStatus;
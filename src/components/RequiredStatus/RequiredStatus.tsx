import React, { Fragment } from 'react';
import { Text } from 'react-native';
import { styles } from './styles';

const RequiredStatus: React.FC<RequiredStatusProps> = ({ isRequired }) => {
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

interface RequiredStatusProps{
  isRequired: number
};

export default RequiredStatus;
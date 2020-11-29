import React, { Fragment } from 'react';
import { Text, View } from 'react-native';
import { RequiredStatus, ImportantStatus } from 'components';
import { styles } from './styles';

const StepStatus: React.FC<StepStatusProps> = ({ isImportant, isRequired }) => {
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
    );
  }
  else{
    return(
      <Fragment>
      </Fragment>
    );
  }
};

interface StepStatusProps{
  isImportant: number,
  isRequired: number
};

export default StepStatus;
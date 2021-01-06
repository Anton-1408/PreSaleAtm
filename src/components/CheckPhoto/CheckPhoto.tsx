import React, { Fragment } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { iconSize } from 'styles/constants';
import { colors } from 'styles';

const CheckPhoto: React.FC<CheckPhotoProps> = ({ check }) => {
  if(check){
    return(
      <Icon name='check' size={iconSize} color={colors.color0}/>
    )
  }
  else{
    return(
      <Fragment>
      </Fragment>
    )
  }
};

interface CheckPhotoProps{
  check?: boolean,
}

export default CheckPhoto;
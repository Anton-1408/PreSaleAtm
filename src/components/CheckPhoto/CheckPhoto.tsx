import React, { Fragment } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { iconSize } from '../../styles/constants';
import { colors } from '../../styles';

interface iProps{
  readonly check: boolean
}

const CheckPhoto: React.FC<iProps> = ({ check }) => {
  if(check){
    return(
      <Icon name='check' size={iconSize} color={colors.color3}/>
    )
  }
  else{
    return(
      <Fragment>
      </Fragment>
    )
  }
};

export default CheckPhoto;
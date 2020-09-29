import React, { Fragment } from 'react';
import { iconSize, colorWhite } from '../styles/constantStyle';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface iProps{
    check: boolean
}

export const CheckPhoto: React.FC<iProps> = ({check}) => {
    if(check){
        return(
            <Icon name='check' size={iconSize} color={colorWhite}/>
        )
    }
    else{
        return(
            <Fragment>
            </Fragment>
        )
    }
};
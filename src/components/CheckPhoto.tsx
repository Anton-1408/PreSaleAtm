import React, { Fragment } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { iconSize, colorWhite, colorIsDone } from '../styles/constantStyle';

interface iProps{
    check: boolean
}

export const CheckPhoto: React.FC<iProps> = ({check}) => {
    if(check){
        return(
            <Icon name='check' size={iconSize} color={colorIsDone}/>
        )
    }
    else{
        return(
            <Fragment>
            </Fragment>
        )
    }
};
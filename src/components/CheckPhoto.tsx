import React, { Fragment } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { iconSize, colorIsDone } from '../styles/constantStyle';

interface iProps{
    readonly check: boolean
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
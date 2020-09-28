import React from 'react';
import { ButtonStopDevice } from './ButtonStopDevice';
import { ButtonReplayDevice } from './ButtonReplayDevice';

interface iProps{
    stoped: number
}

export const ButtonAction: React.FC<iProps> = ({stoped}) => {
    if(!stoped){
        return(
            <ButtonStopDevice/>
        )
    }
    else{
        return(
            <ButtonReplayDevice/>
        )
    }
};
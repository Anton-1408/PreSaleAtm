import React from 'react';
import { useSelector } from 'react-redux'
import { ButtonStopDevice } from './ButtonStopDevice';
import { ButtonReplayDevice } from './ButtonReplayDevice';
import { iRootReducers } from '../../types/reduxTypes';
import { selectorDeviceKey, selectorActionKey } from '../../redux/selectors/holderKeysSelectors';

interface iProps{
    readonly stoped: number,
}

export const ButtonAction: React.FC<iProps> = ({stoped}) => {
    const deviceKey: number = useSelector((state: iRootReducers) => selectorDeviceKey(state));
    const actionKey: number = useSelector((state: iRootReducers) => selectorActionKey(state));

    if(!stoped){
        return(
            <ButtonStopDevice
                deviceKey={deviceKey}
                actionKey={actionKey}
            />
        )
    }
    else{
        return(
            <ButtonReplayDevice
                deviceKey={deviceKey}
            />
        )
    }
};
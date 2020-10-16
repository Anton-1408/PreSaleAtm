import React from 'react';
import { connect } from 'react-redux'
import { ButtonStopDevice } from './ButtonStopDevice';
import { ButtonReplayDevice } from './ButtonReplayDevice';
import { iRootReducers } from '../../types/reduxTypes';
import { selectorDeviceKey, selectorActionKey } from '../../redux/selectors/holderKeysSelectors';

interface iProps{
    readonly stoped: number,
    readonly deviceKey?: any,
    readonly actionKey?: any
}

const mapStateToProps = (state: iRootReducers) => {
    return{
        deviceKey: selectorDeviceKey(state),
        actionKey: selectorActionKey(state),
    }
};

const ButtonAction: React.FC<iProps> = ({stoped, deviceKey, actionKey}) => {
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

export default connect(mapStateToProps, null)(ButtonAction);
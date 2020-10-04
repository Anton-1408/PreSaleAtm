import React from 'react';
import { connect } from 'react-redux'
import { ButtonStopDevice } from './ButtonStopDevice';
import { ButtonReplayDevice } from './ButtonReplayDevice';
import { iRootReducers } from '../../types/reduxTypes';

interface iProps{
    stoped: number,
    deviceKey?: any,
    actionKey?: any
}

const mapStateToProps = (state: iRootReducers) => {
    return{
        deviceKey: state.holderKeysReducer.deviceKey,
        actionKey: state.holderKeysReducer.actionKey,
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
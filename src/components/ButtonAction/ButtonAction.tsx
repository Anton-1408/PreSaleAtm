import React from 'react';
import { useSelector } from 'react-redux'
import { ButtonStopDevice, ButtonReplayDevice } from '..';
import { RootReducers } from '../../types/reduxTypes';
import { selectorDeviceKey, selectorActionKey } from '../../redux/selectors/holderKeysSelectors';

const ButtonAction: React.FC<ButtonActionProps> = ({ stoped }) => {
  const deviceKey: number = useSelector((state: RootReducers) => selectorDeviceKey(state));
  const actionKey: number = useSelector((state: RootReducers) => selectorActionKey(state));

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

interface ButtonActionProps{
  stoped: number,
}

export default ButtonAction;
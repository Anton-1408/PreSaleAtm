import { SwipeablePanel } from 'rn-swipeable-panel';
import { View } from 'react-native';
import React, {useContext} from 'react';
import { ContentPanel } from './ContentPanel';

interface iProps{
    statePanel: boolean,
    closePanel: Function
};

export const SwipperPanel: React.FC<iProps> = ({statePanel, closePanel}) => {
    return(
        <SwipeablePanel
            fullWidth={true}
            closeOnTouchOutside={true}
            isActive={statePanel}
            onClose={() => {
                closePanel()
            }}
        >
            <ContentPanel/>
        </SwipeablePanel>
    )
}
import { SwipeablePanel } from 'rn-swipeable-panel';
import React from 'react';
import { ContentPanel } from '..';

interface iProps{
    readonly statePanel: boolean,
    readonly closePanel: Function
};

const SwipperPanel: React.FC<iProps> = ({ statePanel, closePanel }) => {
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
};

export default SwipperPanel;
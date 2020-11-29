import { SwipeablePanel } from 'rn-swipeable-panel';
import React from 'react';
import { ContentPanel } from '..';

const SwipperPanel: React.FC<SwipperPanelProps> = ({ statePanel, closePanel }) => {
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

interface SwipperPanelProps{
  statePanel: boolean,
  closePanel: Function
};

export default SwipperPanel;
import React from 'react';
import { useSelector } from 'react-redux';

import { RootReducers } from '../../types/reduxTypes';
import { modeWork } from '../../types/modeWork';
import { selectorTypeWork } from '../../redux/selectors/appStateSelectors';
import { HeaderTitle, SearchInput }  from '..';

const HeaderModeWork: React.FC<HeaderModeWorkProps> = ({ }) => {
  const getModeWork: string = useSelector(
    (state: RootReducers) => selectorTypeWork(state)
  );

  if(getModeWork === modeWork.device){
    return(
      <SearchInput/>
    );
  }
  else{
    return(
      <HeaderTitle
        title='Чек-Листы'
      />
    );
  }
}

interface HeaderModeWorkProps{ };

export default HeaderModeWork;
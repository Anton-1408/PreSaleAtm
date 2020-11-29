import React from 'react';
import { useSelector } from 'react-redux';

import { RootReducers } from 'types/reduxTypes';
import { modeWork } from 'types/modeWork';
import { selectorTypeWork } from 'redux/selectors/appStateSelectors';
import { HeaderTitle, SearchInput }  from 'components';

const HeaderModeWork: React.FC<HeaderModeWorkProps> = ({ }) => {
  const selectModeWork = useSelector(
    (state: RootReducers) => selectorTypeWork(state)
  );

  if(selectModeWork === modeWork.device){
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
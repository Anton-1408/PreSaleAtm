import React from 'react';
import { useSelector } from 'react-redux';
import { iRootReducers } from '../../types/reduxTypes';
import { modeWork } from '../../types/modeWork';
import { selectorTypeWork } from '../../redux/selectors/appStateSelectors';
import { HeaderTitle, SearchInput }  from '..';

interface iProps{

};

const HeaderModeWork: React.FC<iProps> = ({ }) => {
  const getModeWork: string = useSelector(
    (state: iRootReducers) => selectorTypeWork(state)
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

export default HeaderModeWork;
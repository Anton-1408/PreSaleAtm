import React from 'react';
import { SearchInput } from './SearchInput';
import { useSelector } from 'react-redux';
import { iRootReducers } from '../types/reduxTypes';
import { HeaderTitle } from './HeaderTitle';
import { modeWork } from '../types/modeWork';
import { selectorTypeWork } from '../redux/selectors/appStateSelectors';

interface iProps{

};

export const HeaderModeWork: React.FC<iProps> = ({ }) => {
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

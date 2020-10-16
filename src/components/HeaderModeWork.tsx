import React from 'react';
import  SearchInput from './SearchInput';
import { connect } from 'react-redux';
import { iRootReducers } from '../types/reduxTypes';
import { HeaderTitle } from './HeaderTitle';
import { modeWork } from '../types/modeWork';
import { selectorTypeWork } from '../redux/selectors/appStateSelectors';

interface iProps{
    readonly getModeWork?: string,
};

const mapStateToProps = (state: iRootReducers) => {
    return{
        getModeWork: selectorTypeWork(state),
    }
};

const HeaderModeWork: React.FC<iProps> = ({ getModeWork }) => {
    if(getModeWork === modeWork.device){
        return(
            <SearchInput/>
        )
    }
    else{
        return(
            <HeaderTitle
                title='Чек-Листы'
            />
        )
    }
}

export default connect(mapStateToProps, null)(HeaderModeWork)
import React from 'react';
import { connect } from 'react-redux';
import { iRootReducers } from '../types/reduxTypes';
import { HeaderTitle } from './HeaderTitle';
import  SearchInput from './SearchInput';
import { modeWork } from '../types/modeWork';

interface iProps{
    getModeWork?: string,
};

const mapStateToProps = (state: iRootReducers) => {
    return{
        getModeWork: state.appStateReducer.modeWork,
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
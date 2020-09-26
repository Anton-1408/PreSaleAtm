import React from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import { iRootReducers } from '../types/reduxTypes';
import { HeaderTitle } from './HeaderTitle';
import { SearchInput } from './SearchInput';
import { modeWork } from '../types/modeWork';
import { setSerialNumberDevice } from '../redux/actions/actions';

interface iProps{
    getModeWork?: string,
    serealNumber?: string,
    setSerialNumber?: Function
};

const mapStateToProps = (state: iRootReducers) => {
    return{
        getModeWork: state.appStateReducer.modeWork,
        serealNumber: state.appStateReducer.serialNumber,
    }
};

const mapDispatchToProps = (dispatch: ThunkDispatch<iRootReducers, unknown, Action<Object>>) => {
    return {
        setSerialNumber: (serialNumber: string) => dispatch(setSerialNumberDevice(serialNumber))
    };
};

const HeaderModeWork: React.FC<iProps> = ({ getModeWork, setSerialNumber, serealNumber }) => {
    if(getModeWork === modeWork.device){
        return(
            <SearchInput
                placeholder='Серийный номер'
                setText={setSerialNumber}
                value={serealNumber}
            />
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

export default connect(mapStateToProps, mapDispatchToProps)(HeaderModeWork)
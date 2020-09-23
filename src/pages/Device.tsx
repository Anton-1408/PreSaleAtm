import React from 'react';
import { connect } from 'react-redux';
import {View} from 'react-native';
import { iRootReducers } from '../types/reduxTypes';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

const mapDispatchToProps = (dispatch: ThunkDispatch<iRootReducers, unknown, Action<Object>>) => {
    return{
        
    };
};

const mapStateToProps = (state: iRootReducers) => {
    return{

    };
};


interface iProps{

}

const Device: React.FC<iProps> = () => {
    return(
        <View>

        </View>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Device);
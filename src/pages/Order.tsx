import React, {Component, useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import { connect } from 'react-redux';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import { profileScreenNavigationPropOrder, profileScreenRoutePropOrder } from '../types/navigationTypes';
import { style } from '../styles/style';
import { setIdUser, setHashCodeProjects, setResultChecklist, setOrders } from '../redux/actions/actions';
import { iRootReducers } from '../types/reduxTypes';

interface iProps{
    navigation: profileScreenNavigationPropOrder,
    route: profileScreenRoutePropOrder,
    getIdUser: Function,
    getHashCodeProjects: Function,
    syncServer: Function,
    getResultChecklist: Function,
};

const mapStateToProps = (state: iRootReducers) => {
    return{
    
    };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<iRootReducers, unknown, Action<Object>>) => {
    return{
        getIdUser: () => dispatch(setIdUser()),
        getHashCodeProjects: () => dispatch(setHashCodeProjects()),
        syncServer: () => dispatch(setOrders()),
        getResultChecklist: () => dispatch(setResultChecklist()),
    };
};

const Order: React.FC<iProps> = (props) => {
    const { 
        navigation, getIdUser, 
        getHashCodeProjects, syncServer, 
        getResultChecklist 
    } : iProps = props;

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getIdUser().then(() => {
                getHashCodeProjects().then(() => {
                    getResultChecklist().then(() => {
                        syncServer()
                    })
                });
            })
        });
        return unsubscribe;
    }, [navigation]);

    return(
        <View style={style.container}>

        </View>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Order);
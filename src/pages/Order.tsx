import React, { useState, useEffect } from 'react';
import {View, Text, FlatList, Pressable, RefreshControl} from 'react-native';
import { connect } from 'react-redux';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { useFocusEffect } from '@react-navigation/native';
import { profileScreenNavigationPropStack, profileScreenRoutePropOrder } from '../types/navigationTypes';
import { style } from '../styles/style';
import { setIdUser, setHashCodeProjects, setResultChecklist, setOrders, setOrderKey } from '../redux/actions/actions';
import { iRootReducers } from '../types/reduxTypes';
import { getOrders } from '../lib/dbOrders';
import { desingColor, colorPress } from '../styles/constantStyle';

interface iProps{
    navigation: profileScreenNavigationPropStack,
    route: profileScreenRoutePropOrder,
    getIdUser: Function,
    getHashCodeProjects: Function,
    syncServer: Function,
    getResultChecklist: Function,
    setOrderId: Function
};

const mapDispatchToProps = (dispatch: ThunkDispatch<iRootReducers, unknown, Action<Object>>) => {
    return{
        getIdUser: () => dispatch(setIdUser()),
        getHashCodeProjects: () => dispatch(setHashCodeProjects()),
        syncServer: () => dispatch(setOrders()),
        getResultChecklist: () => dispatch(setResultChecklist()),
        setOrderId: (id: number) => dispatch(setOrderKey(id)),
    };
};

const Order: React.FC<iProps> = (props) => {
    const {
        navigation,
        route,
        getIdUser,
        getHashCodeProjects,
        syncServer,
        getResultChecklist,
        setOrderId
    } : iProps = props;

    const [orders, setOrders] = useState([]);
    const [refresh, setRefresh] = useState(false);

    const getDataFromServer = (): void => {
        setRefresh(true);
        getIdUser().then(() => {
            getHashCodeProjects().then(() => {
                getResultChecklist().then(() => {
                    syncServer().then(() => {
                        getOrders(setOrders, route.name).then(() => {
                            setRefresh(false);
                        })
                    });
                });
            });
        });
    };

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            if(route.name === 'OrderInWork'){
                getDataFromServer();
            }
            else{
                getOrders(setOrders, route.name);
            }
        });
        return unsubscribe;
    }, [navigation]);

    return(
        <View style={style.container}>
            <FlatList
                data={orders}
                keyExtractor={(item: any) => (item.id).toString()}
                refreshControl={
                    <RefreshControl
                        refreshing={refresh}
                        onRefresh={() => {
                            getDataFromServer();
                        }}
                        progressBackgroundColor={desingColor}
                        colors={["#FFFFFF"]}
                    />
                }
                renderItem={({item}) => (
                    <Pressable
                        style={({ pressed }) => [colorPress(pressed), style.containerData]}
                        onPress={() => {
                            setOrderId(item.id)
                            navigation.navigate('ModeWork')
                        }}
                    >
                        <View style={style.containerText}>
                            <Text style={style.title}>{item.name}</Text>
                            <Text style={style.comment}>{item.comment}</Text>
                        </View>
                        <View style={style.containerPercent}>
                            <Text style={style.percent}>{item.percent + "%"}</Text>
                        </View>
                    </Pressable>
                )}
            />
        </View>
    );
};

export default connect(null, mapDispatchToProps)(Order);
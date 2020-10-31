import React, { useState, useEffect } from 'react';
import {View, Text, FlatList, Pressable, RefreshControl} from 'react-native';
import { connect } from 'react-redux';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { tNavigationProp, tRoutePropOrder } from '../../types/navigationTypes';
import { iRootReducers } from '../../types/reduxTypes';
import { getOrders } from '../../lib/ordersHelper';
import { colorPress } from '../../styles/constants';
import { colors, base } from '../../styles';
import {
    setIdUser,
    setHashCodeProjects,
    setResultChecklist,
    setOrders,
    setOrderKey,
    setActionFiles
} from '../../redux/actions/actions';

interface iProps{
    readonly route: tRoutePropOrder,
    readonly navigation: tNavigationProp,
    readonly getIdUser: Function,
    readonly getHashCodeProjects: Function,
    readonly syncServer: Function,
    readonly getResultChecklist: Function,
    readonly setOrderId: Function,
    readonly getFilesActions: Function
};

const mapDispatchToProps = (dispatch: ThunkDispatch<iRootReducers, unknown, Action<Object>>) => {
    return{
        getIdUser: () => dispatch(setIdUser()),
        getHashCodeProjects: () => dispatch(setHashCodeProjects()),
        getResultChecklist: () => dispatch(setResultChecklist()),
        getFilesActions: () => dispatch(setActionFiles()),
        syncServer: () => dispatch(setOrders()),
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
        setOrderId,
        getFilesActions
    } : iProps = props;

    const [orders, setOrders] = useState([]);
    const [refresh, setRefresh] = useState<boolean>(false);

    const getDataFromServer = (): void => {
        setRefresh(true);
        Promise.all([
            getIdUser(),
            getHashCodeProjects(),
            getResultChecklist(),
            getFilesActions(),
        ])
        .then(async () => {
            try{
                await syncServer();
                await getOrders(setOrders, route.name);
            }
            catch(e){ }
            finally{
                setRefresh(false);
            }
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
        <View style={base.container}>
            <FlatList
                data={orders}
                keyExtractor={(item: any) => (item.id).toString()}
                refreshControl={
                    <RefreshControl
                        refreshing={refresh}
                        onRefresh={() => {
                            getDataFromServer();
                        }}
                        progressBackgroundColor={colors.color17}
                        colors={[colors.color0]}
                    />
                }
                renderItem={({item}) => (
                    <Pressable
                        style={({ pressed }) => [colorPress(pressed), base.containerData]}
                        onPress={() => {
                            setOrderId(item.id)
                            navigation.navigate('ModeWork')
                        }}
                    >
                        <View style={base.containerText}>
                            <Text style={base.title}>{item.name}</Text>
                            <Text style={base.comment}>{item.comment}</Text>
                        </View>
                        <View>
                            <Text style={base.percent}>{item.percent + "%"}</Text>
                        </View>
                    </Pressable>
                )}
            />
        </View>
    );
};

export default connect(null, mapDispatchToProps)(Order);
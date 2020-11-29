import React, { useState, useEffect } from 'react';
import {View, Text, FlatList, Pressable, RefreshControl} from 'react-native';
import { connect } from 'react-redux';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import { ElementOrder } from 'types/elementType';
import { NavigationProp, RoutePropOrder } from 'types/navigationTypes';
import { RootReducers } from 'types/reduxTypes';
import { getOrders } from 'lib/ordersHelper';
import { colorPress } from 'styles/constants';
import { colors, base } from 'styles';
import {
  setIdUser,
  setHashCodeProjects,
  setResultChecklist,
  setOrders,
  setOrderKey,
  setActionFiles
} from 'redux/actions/actions';

const mapDispatchToProps = (dispatch: ThunkDispatch<RootReducers, unknown, Action<Object>>) => {
  return{
    getIdUser: () => dispatch(setIdUser()),
    getHashCodeProjects: () => dispatch(setHashCodeProjects()),
    getResultChecklist: () => dispatch(setResultChecklist()),
    getFilesActions: () => dispatch(setActionFiles()),
    syncServer: () => dispatch(setOrders()),
    setOrderId: (id: number) => dispatch(setOrderKey(id)),
  };
};

const Order: React.FC<OrderProps> = (props) => {
  const {
    navigation,
    route,
    getIdUser,
    getHashCodeProjects,
    syncServer,
    getResultChecklist,
    setOrderId,
    getFilesActions
  } = props;

  const [orders, setOrders] = useState<ElementOrder[]>([]);
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
        keyExtractor={(item) => (item.id).toString()}
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
        renderItem={({ item }) => (
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

interface OrderProps{
  route: RoutePropOrder,
  navigation: NavigationProp,
  getIdUser: Function,
  getHashCodeProjects: Function,
  syncServer: Function,
  getResultChecklist: Function,
  setOrderId: Function,
  getFilesActions: Function
};

export default connect(null, mapDispatchToProps)(Order);
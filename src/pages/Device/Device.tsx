import React, { useCallback, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import { View, Text, FlatList, Pressable } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import Fuse from 'fuse.js'

import { routes } from 'navigation/routes';
import { ElementDevice } from 'types/elementType';
import { RootReducers } from 'types/reduxTypes';
import { RoutePropDevice, NavigationProp } from 'types/navigationTypes';
import { setDeviceKey } from 'redux/actions/actions';
import { getDevices, setQuery, setParams } from 'lib/devicesHelper';
import { modeWork } from 'types/modeWork';
import { selectorOrderKey, selectorStepKey } from 'redux/selectors/holderKeysSelectors';
import { selectorSerialNumbDevice, selectorTypeWork } from 'redux/selectors/appStateSelectors';
import { styles } from './styles';
import { colors, base } from 'styles';
import { colorPress, titlePage } from 'styles/constants';

const mapDispatchToProps = (dispatch: ThunkDispatch<RootReducers, unknown, Action<Object>>) => {
  return{
    setDiviceId: (id: number) => dispatch(setDeviceKey(id))
  };
};

const mapStateToProps = (state: RootReducers) => {
  return{
    orderKey: selectorOrderKey(state),
    stepKey: selectorStepKey(state),
    serialNumberDevice: selectorSerialNumbDevice(state),
    typeWork: selectorTypeWork(state),
  };
};

const Device: React.FC<DeviceProps> = (props) => {
  const {
    navigation,
    orderKey,
    route,
    setDiviceId,
    serialNumberDevice,
    typeWork,
    stepKey
  } = props;

  const [devices, setDevices] = useState<ElementDevice[]>([]);

  useFocusEffect(
    useCallback(() => {
      const query = setQuery(typeWork);
      const params = setParams(typeWork, orderKey, stepKey);
      getDevices(query, params, route.name, setDevices)
    }, [])
  );

  const searchDevice = () => {
    const listDevice: ElementDevice[] = [];
    const options = {
      shouldSort: true,
      threshold: 0.3,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      keys: [
        "serialNumber"
      ]
    };

    const fuse = new Fuse(devices, options);
    const result = fuse.search(serialNumberDevice);

    result.forEach((device) => {
      listDevice.push(device.item);
    });

    return serialNumberDevice ? listDevice : devices;
  };

  return(
    <View style={base.container}>
      <FlatList
        data={searchDevice()}
        keyExtractor={(item) => (item.id).toString()}
        renderItem={({ item }) => (
          <Pressable
            style={({ pressed }) => [colorPress(pressed), base.containerData]}
            onPress={() => {
              setDiviceId(item.id)
              if(typeWork === modeWork.device){
                navigation.navigate(routes.Todo, {
                  title: titlePage(item.serialNumber)
                });
              }
              else{
                navigation.navigate(routes.ListActions, {
                  title: titlePage(item.serialNumber)
                });
              }
            }}
          >
            <View
              style={[styles.containerId, {
                backgroundColor: item.isStoped ? colors.color3 : (
                  item.percent < 100 ? colors.color5 : colors.color2
                )}
              ]}
            >
              <Text style={styles.deviceId} >{item.id}</Text>
            </View>
            <View style={styles.container}>
              <View style={styles.containerInformation}>
                <Text style={styles.name}>Модель: </Text>
                <Text style={[base.title, styles.deviceInformation]}>{item.model}</Text>
              </View>
              <View style={styles.containerInformation}>
                <Text style={styles.name}>Серийный номер: </Text>
                <Text style={[base.title, styles.deviceInformation]}>{item.serialNumber}</Text>
              </View>
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

interface DeviceProps{
  orderKey: number,
  serialNumberDevice: string,
  typeWork: string,
  stepKey: number,
  route: RoutePropDevice,
  navigation: NavigationProp,
  setDiviceId: Function,
}

export default connect(mapStateToProps, mapDispatchToProps)(Device);
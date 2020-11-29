import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import { View, Text, FlatList, Pressable } from 'react-native';

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

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      const query = setQuery(typeWork);
      const params = setParams(typeWork, orderKey, stepKey);
      getDevices(query, params, route.name, setDevices)
    });
    return unsubscribe;
  }, [navigation]);

  return(
    <View style={base.container}>
      <FlatList
        data={devices.filter((device: ElementDevice) => {
          const deviceSerialNumb = device.serialNumber.toUpperCase()
          const serialNumbSerch = serialNumberDevice.toUpperCase();
          const result = deviceSerialNumb.indexOf(serialNumbSerch);
          return result > -1
        })}
        keyExtractor={(item) => (item.id).toString()}
        renderItem={({ item }) => (
          <Pressable
            style={({ pressed }) => [colorPress(pressed), base.containerData]}
            onPress={() => {
              setDiviceId(item.id)
              if(typeWork === modeWork.device){
                navigation.navigate('Todo', {
                  title: titlePage(item.serialNumber)
                });
              }
              else{
                navigation.navigate('ListActions', {
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
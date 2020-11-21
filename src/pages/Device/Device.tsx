import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import { View, Text, FlatList, Pressable } from 'react-native';
import { iRootReducers } from '../../types/reduxTypes';
import { tRoutePropDevice, tNavigationProp } from '../../types/navigationTypes';
import { setDeviceKey } from '../../redux/actions/actions';
import { getDevices, setQuery, setParams } from '../../lib/devicesHelper';
import { modeWork } from '../../types/modeWork';
import { selectorOrderKey, selectorStepKey } from '../../redux/selectors/holderKeysSelectors';
import { selectorSerialNumbDevice, selectorTypeWork } from '../../redux/selectors/appStateSelectors';
import { styles } from './styles';
import { colors, base } from '../../styles';
import { colorPress, titlePage } from '../../styles/constants';

interface iProps{
  readonly orderKey: number,
  readonly serialNumberDevice: string,
  readonly typeWork: string,
  readonly stepKey: number,
  readonly route: tRoutePropDevice,
  readonly navigation: tNavigationProp,
  readonly setDiviceId: Function,
}

const mapDispatchToProps = (dispatch: ThunkDispatch<iRootReducers, unknown, Action<Object>>) => {
  return{
    setDiviceId: (id: number) => dispatch(setDeviceKey(id))
  };
};

const mapStateToProps = (state: iRootReducers) => {
  return{
    orderKey: selectorOrderKey(state),
    stepKey: selectorStepKey(state),
    serialNumberDevice: selectorSerialNumbDevice(state),
    typeWork: selectorTypeWork(state),
  };
};

const Device: React.FC<iProps> = (props) => {
  const {
    navigation,
    orderKey,
    route,
    setDiviceId,
    serialNumberDevice,
    typeWork,
    stepKey
  } = props;

  const [devices, setDevices] = useState([]);

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
        data={devices.filter((item: any) => {
          const itemSerialNumb = item.serialNumber.toUpperCase()
          const serialNumbSerch = serialNumberDevice.toUpperCase();
          const result = itemSerialNumb.indexOf(serialNumbSerch);
          return result > -1
        })}
        keyExtractor={(item: any) => (item.id).toString()}
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

export default connect(mapStateToProps, mapDispatchToProps)(Device);
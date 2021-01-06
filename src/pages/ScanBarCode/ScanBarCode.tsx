import React, { useState, useEffect } from 'react';
import { View, StatusBar, EventEmitter } from 'react-native';
import { CameraKitCameraScreen } from 'react-native-camera-kit';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { connect } from 'react-redux';

import { routes } from 'navigation/routes';
import { styles } from './styles';
import { RoutePropScanBarCode, NavigationProp } from 'types/navigationTypes';
import { RootReducers } from 'types/reduxTypes';
import { setDeviceKey, setSerialNumberDevice } from 'redux/actions/actions';
import { getPermissions, getDevicesList, searchDevice, SearchDevice } from 'lib/scanCodeHelper';
import { modeWork } from 'types/modeWork';
import { titlePage } from 'styles/constants';
import { selectorOrderKey } from 'redux/selectors/holderKeysSelectors';
import { selectorTypeWork } from 'redux/selectors/appStateSelectors';
import { colors } from 'styles';

const mapDispatchToProps = (dispatch: ThunkDispatch<RootReducers, unknown, Action<Object>>) => {
  return{
    setDeviceId: (id: number) => dispatch(setDeviceKey(id)),
    setSerialNumber: (serialNumber: string) => dispatch(setSerialNumberDevice(serialNumber)),
  };
};

const mapStateToProps = (state: RootReducers) => {
  return{
    orderKey: selectorOrderKey(state),
    typeWork: selectorTypeWork(state),
  };
};

const ScanBarCode: React.FC<ScanBarCodeProps> = (props) => {
  const [devices, setDevices] = useState([]);
  const {
    navigation,
    setDeviceId,
    setSerialNumber,
    orderKey,
    typeWork
  } = props;

  useEffect(() => {
    getPermissions();
    getDevicesList(orderKey, setDevices)
  }, []);

  return(
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.color8}/>
      <CameraKitCameraScreen
        scanBarcode={true}
        laserColor={"blue"}
        frameColor={"yellow"}
        onReadCode={((event) => {
          const serialNumb: string = event.nativeEvent.codeStringValue;
          const device: SearchDevice = searchDevice(devices, serialNumb);
          if(device){
            setDeviceId(device.id);
            setSerialNumber(device.serialNumber);
            if(typeWork === modeWork.device){
              navigation.navigate(routes.Todo, {
                title: titlePage(serialNumb)
              });
            }
            else{
              navigation.navigate(routes.ListActions, {
                title: titlePage(serialNumb)
              });
            }
          }
          navigation.navigate(routes.ModeWork);
        })}
        hideControls={false}
        showFrame={true}
        offsetForScannerFrame = {10}
        heightForScannerFrame = {300}
        colorForScannerFrame = {'red'}
      />
    </View>
  );
};

interface ScanBarCodeProps{
  orderKey: number,
  typeWork: string,
  route: RoutePropScanBarCode,
  setSerialNumber: Function,
  navigation: NavigationProp,
  setDeviceId: Function,
};

export default connect(mapStateToProps, mapDispatchToProps)(ScanBarCode)
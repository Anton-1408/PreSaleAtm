import React, { useState, useEffect } from 'react';
import { View, StatusBar } from 'react-native';
import { CameraKitCameraScreen } from 'react-native-camera-kit';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { connect } from 'react-redux';
import { style } from '../styles/style';
import { profileScreenRoutePropScanBarCode, profileScreenNavigationPropStack } from '../types/navigationTypes';
import { iRootReducers } from '../types/reduxTypes';
import { setDeviceKey, setSerialNumberDevice } from '../redux/actions/actions';
import { getPermissions, getDevicesList, searchDevice } from '../lib/devicesScanCode';


interface iProps{
    route: profileScreenRoutePropScanBarCode,
    navigation: profileScreenNavigationPropStack,
    setDeviceId: Function,
    setSerialNumber: Function,
    orderKey: number
};

const mapDispatchToProps = (dispatch: ThunkDispatch<iRootReducers, unknown, Action<Object>>) => {
    return{
        setDeviceId: (id: number) => dispatch(setDeviceKey(id)),
        setSerialNumber: (serialNumber: string) => dispatch(setSerialNumberDevice(serialNumber)),
    };
};

const mapStateToProps = (state: iRootReducers) => {
    return{
		orderKey: state.holderKeysReducer.orderKey
    };
};

const ScanBarCode: React.FC<iProps> = (props) => {
    const [devices, setDevices] = useState([]);
    const { navigation, setDeviceId, setSerialNumber, orderKey } = props;

    useEffect(() => {
        getPermissions();
        getDevicesList(orderKey, setDevices)
    }, []);

    return(
        <View style={style.container}>
            <StatusBar backgroundColor='#000000'/>
            <CameraKitCameraScreen
                scanBarcode={true}
                laserColor={"blue"}
                frameColor={"yellow"}
                onReadCode={((event: any) => {
                    const serialNumb: string = event.nativeEvent.codeStringValue;
                    const device: any = searchDevice(devices, serialNumb);
                    setDeviceId(device.id);
                    setSerialNumber(device.serialNumber);
                    navigation.navigate('ModeWork');
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

export default connect(mapStateToProps, mapDispatchToProps)(ScanBarCode)
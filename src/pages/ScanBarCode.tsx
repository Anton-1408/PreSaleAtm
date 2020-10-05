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
import { getPermissions, getDevicesList, searchDevice } from '../lib/scanCodeHelper';
import { modeWork } from '../types/modeWork';
import { titlePage, colorBlack } from '../styles/constantStyle';


interface iProps{
    readonly orderKey: number,
    readonly typeWork: string,
    readonly route: profileScreenRoutePropScanBarCode,
    readonly setSerialNumber: Function,
    readonly navigation: profileScreenNavigationPropStack,
    readonly setDeviceId: Function,
};

const mapDispatchToProps = (dispatch: ThunkDispatch<iRootReducers, unknown, Action<Object>>) => {
    return{
        setDeviceId: (id: number) => dispatch(setDeviceKey(id)),
        setSerialNumber: (serialNumber: string) => dispatch(setSerialNumberDevice(serialNumber)),
    };
};

const mapStateToProps = (state: iRootReducers) => {
    return{
        orderKey: state.holderKeysReducer.orderKey,
        typeWork: state.appStateReducer.modeWork,
    };
};

const ScanBarCode: React.FC<iProps> = (props) => {
    const [devices, setDevices] = useState([]);
    const { navigation, setDeviceId, setSerialNumber, orderKey, typeWork } = props;

    useEffect(() => {
        getPermissions();
        getDevicesList(orderKey, setDevices)
    }, []);

    return(
        <View style={style.container}>
            <StatusBar backgroundColor={colorBlack}/>
            <CameraKitCameraScreen
                scanBarcode={true}
                laserColor={"blue"}
                frameColor={"yellow"}
                onReadCode={((event: any) => {
                    const serialNumb: string = event.nativeEvent.codeStringValue;
                    const device: any = searchDevice(devices, serialNumb);
                    if(device){
                        setDeviceId(device.id);
                        setSerialNumber(device.serialNumber);
                        if(typeWork === modeWork.device){
                            navigation.navigate('Todo', {
                                title: titlePage(serialNumb)
                            });
                        }
                        else{
                            navigation.navigate('ListActions', {
                                title: titlePage(serialNumb)
                            });
                        }
                    }
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
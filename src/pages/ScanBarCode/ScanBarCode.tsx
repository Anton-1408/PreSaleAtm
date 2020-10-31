import React, { useState, useEffect } from 'react';
import { View, StatusBar } from 'react-native';
import { CameraKitCameraScreen } from 'react-native-camera-kit';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { connect } from 'react-redux';
import { styles } from './styles';
import { tRoutePropScanBarCode, tNavigationProp } from '../../types/navigationTypes';
import { iRootReducers } from '../../types/reduxTypes';
import { setDeviceKey, setSerialNumberDevice } from '../../redux/actions/actions';
import { getPermissions, getDevicesList, searchDevice } from '../../lib/scanCodeHelper';
import { modeWork } from '../../types/modeWork';
import { titlePage } from '../../styles/constants';
import { selectorOrderKey } from '../../redux/selectors/holderKeysSelectors';
import { selectorTypeWork } from '../../redux/selectors/appStateSelectors';
import { colors } from '../../styles';

interface iProps{
    readonly orderKey: number,
    readonly typeWork: string,
    readonly route: tRoutePropScanBarCode,
    readonly setSerialNumber: Function,
    readonly navigation: tNavigationProp,
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
        orderKey: selectorOrderKey(state),
        typeWork: selectorTypeWork(state),
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
        <View style={styles.container}>
            <StatusBar backgroundColor={colors.color8}/>
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
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import { View, Text, FlatList, Pressable } from 'react-native';
import { iRootReducers } from '../types/reduxTypes';
import { tRoutePropDevice, tNavigationProp } from '../types/navigationTypes';
import { setDeviceKey } from '../redux/actions/actions';
import { componentsStyle } from '../styles/componentsStyle';
import { colorPress, colorIsStop, colorIsDone, colorIsWork, titlePage } from '../styles/constantStyle';
import { style } from '../styles/style';
import { getDevices, setQuery, setParams } from '../lib/devicesHelper';
import { modeWork } from '../types/modeWork';
import { selectorOrderKey, selectorStepKey } from '../redux/selectors/holderKeysSelectors';
import { selectorSerialNumbDevice, selectorTypeWork } from '../redux/selectors/appStateSelectors';

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
        <View style={style.container}>
            <FlatList
                data={devices.filter((item: any) => {
                    const itemSerialNumb = item.serialNumber.toUpperCase()
                    const serialNumbSerch = serialNumberDevice.toUpperCase();
                    const result = itemSerialNumb.indexOf(serialNumbSerch);
                    return result > -1
                })}
                keyExtractor={(item: any) => (item.id).toString()}
                renderItem={({item}) => (
                    <Pressable
                        style={({ pressed }) => [colorPress(pressed), style.containerData]}
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
                            style={[componentsStyle.deviceContainerId, {
                                    backgroundColor: item.isStoped ? colorIsStop : (
                                        item.percent < 100 ? colorIsWork : colorIsDone
                                    )
                                }
                            ]}
                        >
                            <Text style={componentsStyle.deviceId} >{item.id}</Text>
                        </View>
                        <View style={componentsStyle.deviceContainer}>
                            <View style={componentsStyle.deviceInformationContainer}>
                                <Text style={componentsStyle.deviceName}>Модель: </Text>
                                <Text style={[style.title, componentsStyle.deviceInformation]}>{item.model}</Text>
                            </View>
                            <View style={componentsStyle.deviceInformationContainer}>
                                <Text style={componentsStyle.deviceName}>Серийный номер: </Text>
                                <Text style={[style.title, componentsStyle.deviceInformation]}>{item.serialNumber}</Text>
                            </View>
                        </View>
                        <View>
                            <Text style={style.percent}>{item.percent + "%"}</Text>
                        </View>
                    </Pressable>
                )}
            />
        </View>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Device);
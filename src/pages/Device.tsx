import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import { View, Text, FlatList, Pressable } from 'react-native';
import { iRootReducers } from '../types/reduxTypes';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { useFocusEffect } from '@react-navigation/native';
import { profileScreenRoutePropDevice, profileScreenNavigationPropStack } from '../types/navigationTypes';
import { setDeviceKey } from '../redux/actions/actions';
import { componentsStyle } from '../styles/componentsStyle';
import { colorPress } from '../styles/constantStyle';
import { style } from '../styles/style';
import { getDevices } from '../lib/dbDevices';

interface iProps{
    navigation: profileScreenNavigationPropStack,
    route: profileScreenRoutePropDevice,
    orderKey: number,
    setDiviceId: Function,
}

const mapDispatchToProps = (dispatch: ThunkDispatch<iRootReducers, unknown, Action<Object>>) => {
    return{
        setDiviceId: (id: number) => dispatch(setDeviceKey(id))
    };
};

const mapStateToProps = (state: iRootReducers) => {
    return{
        orderKey: state.holderKeysReducer.orderKey
    };
};

const Device: React.FC<iProps> = (props) => {
    const { navigation, orderKey, route, setDiviceId } = props;

    const [devices, setDevices] = useState([]);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getDevices(orderKey, route.name, setDevices)
        });
        return unsubscribe;
    }, [navigation]);

    return(
        <View style={style.container}>
            <FlatList
                data={devices}
                keyExtractor={(item: any) => (item.id).toString()}
                renderItem={({item}) => (
                    <Pressable
                        style={({ pressed }) => [colorPress(pressed), style.containerData]}
                        onPress={() => {
                            setDiviceId(item.id)
                        }}
                    >
                        <View
                            style={[
                                componentsStyle.deviceContainerId, {
                                    backgroundColor: item.stoped ? '#C62828' : (item.percent < 100 ? '#64B5F6' : '#388E3C')
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
                        <View style={style.containerPercent}>
                            <Text style={style.percent}>{item.percent + "%"}</Text>
                        </View>
                    </Pressable>
                )}
            />
        </View>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Device);
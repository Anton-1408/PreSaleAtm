import React from 'react';
import { Action } from 'redux';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ContainerDevice from './ContainerDevice';
import ContainerTodo from './ContainerTodo';
import { desingColor, colorWhite, colorInActiveButton } from '../styles/constantStyle';
import { rootParamsModeWork } from '../types/navigationTypes';
import { iconSizeBar } from '../styles/constantStyle';
import { iRootReducers } from '../types/reduxTypes';
import { setModeWork } from '../redux/actions/actions';
import { setSerialNumberDevice } from '../redux/actions/actions';
import { modeWork } from '../types/modeWork';

const Tab = createBottomTabNavigator<rootParamsModeWork>();

interface iProps{
    setTypeWork: Function,
    setSerialNumber: Function
}

const mapDispatchToProps = (dispatch:  ThunkDispatch<iRootReducers, unknown, Action<Object>>) => {
    return{
        setTypeWork: (typeWork: string) => dispatch(setModeWork(typeWork)),
        setSerialNumber: (serialNumber: string) => dispatch(setSerialNumberDevice(serialNumber))
    };
};

const ContainerModeWork: React.FC<iProps> = ({setTypeWork, setSerialNumber}) => {
    return (
        <Tab.Navigator
            initialRouteName="TodoMode"
            tabBarOptions={{
                activeTintColor: colorWhite,
                inactiveTintColor: colorInActiveButton,
                style: {
                    backgroundColor: desingColor,
                },
                labelStyle:{
                    fontSize: 10,
                    fontFamily: 'OpenSans-Bold'
                }
            }}
        >
            <Tab.Screen
                name='TodoMode'
                component={ContainerTodo}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <Icon name='playlist-check' color={color} size={iconSizeBar}/>
                    ),
                    tabBarLabel: 'Чек-листы'
                }}
                listeners={({ navigation, route }) => ({
                    tabPress: e => {
                        e.preventDefault();
                        setTypeWork(modeWork.todo);
                        navigation.navigate('TodoMode');
                    },
                    beforeRemove: e => {
                        setTypeWork(modeWork.todo);
                    },
                })}
            />
            <Tab.Screen
                name='DeviceMode'
                component={ContainerDevice}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <Icon name='atm' color={color} size={iconSizeBar}/>
                    ),
                    tabBarLabel: 'Устройства'
                }}
                listeners={({ navigation, route }) => ({
                    tabPress: e => {
                        e.preventDefault();
                        setTypeWork(modeWork.device);
                        navigation.navigate('DeviceMode');
                    },
                    beforeRemove: e => {
                        setSerialNumber('')
                    },
                })}
            />
        </Tab.Navigator>
    );
}

export default connect(null, mapDispatchToProps)(ContainerModeWork);
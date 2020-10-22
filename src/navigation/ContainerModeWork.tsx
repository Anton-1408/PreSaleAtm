import React from 'react';
import { Dispatch } from 'redux';
import { useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ContainerDevice from './ContainerDevice';
import ContainerTodo from './ContainerTodo';
import { desingColor, colorWhite, colorInActiveButton, barLabelSize, barLabelFontFamily } from '../styles/constantStyle';
import { rootParamsModeWork } from '../types/navigationTypes';
import { iconSizeBar } from '../styles/constantStyle';
import { setModeWork } from '../redux/actions/actions';
import { setSerialNumberDevice } from '../redux/actions/actions';
import { modeWork } from '../types/modeWork';

const Tab = createBottomTabNavigator<rootParamsModeWork>();

const ContainerModeWork: React.FC = () => {
    const dispatch: Dispatch = useDispatch();
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
                    fontSize: barLabelSize,
                    fontFamily: barLabelFontFamily
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
                        dispatch(setModeWork(modeWork.todo));
                        navigation.navigate('TodoMode');
                    },
                    beforeRemove: e => {
                        dispatch(setModeWork(modeWork.todo));
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
                        dispatch(setModeWork(modeWork.device))
                        navigation.navigate('DeviceMode');
                    },
                    beforeRemove: e => {
                        dispatch(setSerialNumberDevice(''))
                    },
                })}
            />
        </Tab.Navigator>
    );
}

export default ContainerModeWork;
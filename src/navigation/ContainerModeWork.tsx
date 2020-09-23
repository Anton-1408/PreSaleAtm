import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ContainerDevice from './ContainerDevice';
import ContainerTodo from './ContainerTodo';
import { desingColor } from '../styles/constantStyle';
import { rootParamsModeWork } from '../types/navigationTypes';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { iconSizeBar } from '../styles/constantStyle';

const Tab = createBottomTabNavigator<rootParamsModeWork>();

const ContainerModeWork: React.FC = () => {
    return (
        <Tab.Navigator
            initialRouteName="TodoMode"
            tabBarOptions={{
                activeTintColor: '#ffffff',
                inactiveTintColor: '#BDBDBD',
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
                name="TodoMode"
                component={ContainerTodo}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <Icon name="playlist-check" color={color} size={iconSizeBar}/>
                    ),
                    tabBarLabel: "Чек-листы"
                }}
            />
            <Tab.Screen
                name="DeviceMode"
                component={ContainerDevice}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <Icon name="atm" color={color} size={iconSizeBar}/>
                    ),
                    tabBarLabel: "Устройства"
                }}
            />
        </Tab.Navigator>
    );
}

export default ContainerModeWork;
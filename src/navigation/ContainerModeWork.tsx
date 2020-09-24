import React from 'react';
import { Action } from 'redux';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ContainerDevice from './ContainerDevice';
import ContainerTodo from './ContainerTodo';
import { desingColor } from '../styles/constantStyle';
import { rootParamsModeWork } from '../types/navigationTypes';
import { iconSizeBar } from '../styles/constantStyle';
import { iRootReducers } from '../types/reduxTypes';
import { setModeWork } from '../redux/actions/actions';

const Tab = createBottomTabNavigator<rootParamsModeWork>();

interface iProps{
    setTypeWork: Function,
}

const mapDispatchToProps = (dispatch:  ThunkDispatch<iRootReducers, unknown, Action<Object>>) => {
    return{
        setTypeWork: (typeWork: string) => dispatch(setModeWork(typeWork))
    };
};

const ContainerModeWork: React.FC<iProps> = ({setTypeWork}) => {
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
                listeners={({ navigation, route }) => ({
                    tabPress: e => {
                        e.preventDefault();
                        setTypeWork('todoMode');
                        navigation.navigate('TodoMode');
                    },
                })}
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
                listeners={({ navigation, route }) => ({
                    tabPress: e => {
                        e.preventDefault();
                        setTypeWork('deviceMode');
                        navigation.navigate('DeviceMode');
                    },
                })}
            />
        </Tab.Navigator>
    );
}

export default connect(null, mapDispatchToProps)(ContainerModeWork);
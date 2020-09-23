import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Device from '../pages/Device';
import { rootParamsDevice } from "../types/navigationTypes";
import { desingColor } from '../styles/constantStyle';

const Tab = createMaterialTopTabNavigator<rootParamsDevice>();

const ContainerDevice: React.FC = () => {
    return(
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: '#ffffff',
                inactiveTintColor: '#BDBDBD',
                indicatorStyle:{
                    borderBottomColor: '#F3E5F5',
                    borderBottomWidth: 3,
                    borderRadius: 2,
                },
                style: {
                    backgroundColor: desingColor,
                },
                labelStyle:{
                    fontFamily: "OpenSans-Regular"
                }
            }}
            initialRouteName="DevicesInWork"
        >
            <Tab.Screen
                name="DevicesInWork"
                component={Device}
                options={{
                    title: "В работе"
                }}
            />
            <Tab.Screen
                name="DevicesStop"
                component={Device}
                options={{
                    title: "Остановлены"
                }}
            />
            <Tab.Screen
                name="DevicesDone"
                component={Device}
                options={{
                    title: "Завершены"
                }}
            />
        </Tab.Navigator>
    );
};

export default ContainerDevice;
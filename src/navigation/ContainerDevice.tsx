import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Device } from '../pages';
import { rootParamsDevice } from "../types/navigationTypes";
import {
    desingColor,
    colorWhite,
    colorInActiveButton,
    borderColorTabBar,
    barLabelSize,
    barLabelFontFamily
} from '../styles/constants';

const Tab = createMaterialTopTabNavigator<rootParamsDevice>();

const ContainerDevice: React.FC = () => {
    return(
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: colorWhite,
                inactiveTintColor: colorInActiveButton,
                indicatorStyle:{
                    borderBottomColor: borderColorTabBar,
                    borderBottomWidth: 3,
                    borderRadius: 2,
                },
                style: {
                    backgroundColor: desingColor,
                },
                labelStyle:{
                    fontFamily: barLabelFontFamily,
                    fontSize: barLabelSize,
                }
            }}
            initialRouteName='DevicesInWork'
        >
            <Tab.Screen
                name='DevicesInWork'
                component={Device}
                options={{
                    title: 'В работе'
                }}
            />
            <Tab.Screen
                name="DevicesStop"
                component={Device}
                options={{
                    title: 'Остановлены'
                }}
            />
            <Tab.Screen
                name="DevicesDone"
                component={Device}
                options={{
                    title: 'Завершены'
                }}
            />
        </Tab.Navigator>
    );
};

export default ContainerDevice;
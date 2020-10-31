import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Order } from '../pages';
import { rootParamsOrder } from "../types/navigationTypes";
import {
    desingColor,
    colorWhite,
    colorInActiveButton,
    borderColorTabBar,
    barLabelFontFamily,
    barLabelSize
} from '../styles/constants';

const Tab = createMaterialTopTabNavigator<rootParamsOrder>();

const ContainerOrder: React.FC = () => {
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
            initialRouteName="OrderInWork"
        >
            <Tab.Screen
                name="OrderAll"
                component={Order}
                options={{
                    title: "Все"
                }}
            />
            <Tab.Screen
                name="OrderInWork"
                component={Order}
                options={{
                    title: "В работе"
                }}
            />
            <Tab.Screen
                name="OrderDone"
                component={Order}
                options={{
                    title: "Завершены"
                }}
            />
        </Tab.Navigator>
    );
};

export default ContainerOrder;
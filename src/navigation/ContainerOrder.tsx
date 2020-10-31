import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Order } from '../pages';
import { rootParamsOrder } from "../types/navigationTypes";
import { colors } from '../styles';
import { barLabelFontFamily, barLabelSize } from '../styles/constants';

const Tab = createMaterialTopTabNavigator<rootParamsOrder>();

const ContainerOrder: React.FC = () => {
    return(
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: colors.color0,
                inactiveTintColor: colors.color6,
                indicatorStyle:{
                    borderBottomColor: colors.color7,
                    borderBottomWidth: 3,
                    borderRadius: 2,
                },
                style: {
                    backgroundColor: colors.color17,
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
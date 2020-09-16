import React, {Component} from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Order } from '../Order';
import {rootParamsOrder} from "../types/navigationTypes";
import { desingColor } from '../styles/constantStyle';

const Tab = createMaterialTopTabNavigator<rootParamsOrder>();

const ContainerOrder: React.FC = () => {
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
                    backgroundColor: desingColor 
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
                name="OrederDone"
                component={Order}
                options={{
                    title: "Завершены"
                }}
            />
        </Tab.Navigator>
    );
};

export default ContainerOrder;
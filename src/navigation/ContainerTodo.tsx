import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Todo from '../pages/Todo';
import { rootParamsTodo } from "../types/navigationTypes";
import {
    desingColor,
    colorWhite,
    colorInActiveButton,
    borderColorTabBar,
    barLabelSize,
    barLabelFontFamily
} from '../styles/constantStyle';

const Tab = createMaterialTopTabNavigator<rootParamsTodo>();

const ContainerTodo: React.FC = () => {
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
            initialRouteName='TodoInWork'
        >
            <Tab.Screen
                name='TodoAll'
                component={Todo}
                options={{
                    title: 'Все'
                }}
            />
            <Tab.Screen
                name='TodoInWork'
                component={Todo}
                options={{
                    title: 'В работе'
                }}
            />
            <Tab.Screen
                name='TodoDone'
                component={Todo}
                options={{
                    title: 'Завершены'
                }}
            />
        </Tab.Navigator>
    );
};

export default ContainerTodo;
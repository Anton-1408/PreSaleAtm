import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { routes } from 'navigation/routes';
import { Todo } from 'pages';
import { rootParamsTodo } from "types/navigationTypes";
import { colors } from 'styles';
import { barLabelSize, barLabelFontFamily } from 'styles/constants';

const Tab = createMaterialTopTabNavigator<rootParamsTodo>();

const ContainerTodo: React.FC = () => {
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
      initialRouteName={routes.TodoInWork}
    >
      <Tab.Screen
        name={routes.TodoAll}
        component={Todo}
        options={{
          title: 'Все'
        }}
      />
      <Tab.Screen
        name={routes.TodoInWork}
        component={Todo}
        options={{
          title: 'В работе'
        }}
      />
      <Tab.Screen
        name={routes.TodoDone}
        component={Todo}
        options={{
          title: 'Завершены'
        }}
      />
    </Tab.Navigator>
  );
};

export default ContainerTodo;
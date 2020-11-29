import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

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
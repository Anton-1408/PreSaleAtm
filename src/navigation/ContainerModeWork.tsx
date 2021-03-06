import React from 'react';
import { Dispatch } from 'redux';
import { useDispatch } from 'react-redux';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import ContainerDevice from './ContainerDevice';
import ContainerTodo from './ContainerTodo';
import { rootParamsModeWork } from 'types/navigationTypes';
import { setModeWork } from 'redux/actions/actions';
import { setSerialNumberDevice } from 'redux/actions/actions';
import { modeWork } from 'types/modeWork';
import { colors } from 'styles';
import { barLabelSize, iconSizeBar, barLabelFontFamily } from 'styles/constants';
import { routes } from './routes';

const Tab = createBottomTabNavigator<rootParamsModeWork>();

const ContainerModeWork: React.FC = () => {
  const dispatch: Dispatch = useDispatch();
  return (
    <Tab.Navigator
      initialRouteName={routes.TodoMode}
      tabBarOptions={{
        activeTintColor: colors.color0,
        inactiveTintColor: colors.color6,
        style: {
          backgroundColor: colors.color17,
        },
        labelStyle:{
          fontSize: barLabelSize,
          fontFamily: barLabelFontFamily
        }
      }}
    >
      <Tab.Screen
        name={routes.TodoMode}
        component={ContainerTodo}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name='playlist-check' color={color} size={iconSizeBar}/>
          ),
          tabBarLabel: 'Чек-листы'
        }}
        listeners={({ navigation, route }) => ({
          tabPress: e => {
            e.preventDefault();
            dispatch(setModeWork(modeWork.todo));
            navigation.navigate('TodoMode');
          },
          beforeRemove: e => {
            dispatch(setModeWork(modeWork.todo));
          },
        })}
      />
      <Tab.Screen
        name={routes.DeviceMode}
        component={ContainerDevice}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name='atm' color={color} size={iconSizeBar}/>
          ),
          tabBarLabel: 'Устройства'
        }}
        listeners={({ navigation, route }) => ({
          tabPress: e => {
            e.preventDefault();
            dispatch(setModeWork(modeWork.device))
            navigation.navigate('DeviceMode');
          },
          beforeRemove: e => {
            dispatch(setSerialNumberDevice(''))
          },
        })}
      />
    </Tab.Navigator>
  );
}

export default ContainerModeWork;
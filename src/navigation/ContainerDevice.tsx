import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Device } from 'pages';
import { rootParamsDevice } from "types/navigationTypes";
import { colors } from 'styles';
import { barLabelSize, barLabelFontFamily } from 'styles/constants';
import { routes } from './routes';

const Tab = createMaterialTopTabNavigator<rootParamsDevice>();

const ContainerDevice: React.FC = () => {
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
      initialRouteName={routes.DevicesInWork}
    >
      <Tab.Screen
        name={routes.DevicesInWork}
        component={Device}
        options={{
          title: 'В работе'
        }}
      />
      <Tab.Screen
        name={routes.DevicesStop}
        component={Device}
        options={{
          title: 'Остановлены'
        }}
      />
      <Tab.Screen
        name={routes.DevicesDone}
        component={Device}
        options={{
          title: 'Завершены'
        }}
      />
    </Tab.Navigator>
  );
};

export default ContainerDevice;
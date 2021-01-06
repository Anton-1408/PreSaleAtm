import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import { ButtonSetting, ButtonHome, HeaderModeWork, SearchInput, ButtonAction } from 'components';
import { barLabelFontFamily } from 'styles/constants';
import { colors } from 'styles';
import store from 'redux/store';
import ContainerOrder from './ContainerOrder';
import ContainerModeWork from './ContainerModeWork';
import ContainerTodo from './ContainerTodo';
import ContainerDevice from './ContainerDevice';
import { rootStackParams } from 'types/navigationTypes';
import { routes } from './routes';
import {
  Setting,
  ScanBarCode,
  Step,
  ListActions,
  Action,
  Gallery,
  Camera,
  ViewPhoto,
} from '../pages';

export const Stack = createStackNavigator<rootStackParams>();

const ContainerNavigation: React.FC = () => {
  return(
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar backgroundColor={colors.color17} barStyle="light-content"/>
        <Stack.Navigator
          initialRouteName={routes.Order}
          screenOptions={{
            headerTintColor: colors.color0,
            headerStyle:{
              backgroundColor: colors.color17,
              elevation: 0,
            },
            headerTitleStyle:{
              fontSize: 22,
              fontFamily: barLabelFontFamily
            }
          }}
        >
          <Stack.Screen
            name={routes.Setting}
            component={Setting}
            options={{
              title: 'Настройки',
            }}
          />
          <Stack.Screen
            name={routes.Order}
            component={ContainerOrder}
            options={({navigation, route}) => ({
              title: 'Заявки',
              headerRight: () => {
                return(
                  <ButtonSetting/>
                );
              }
            })}
          />
          <Stack.Screen
            name={routes.ModeWork}
            component={ContainerModeWork}
            options={({navigation, route}) => ({
              headerRight: () => {
                return(
                  <ButtonHome/>
                );
              },
              headerTitle: () => {
                return(
                  <HeaderModeWork/>
                );
              }
            })}
          />
          <Stack.Screen
            name={routes.Step}
            component={Step}
            options={({navigation, route}) => ({
              title: route.params.title,
              headerRight: () => {
                return(
                  <ButtonHome/>
                );
              }
            })}
          />
          <Stack.Screen
            name={routes.Todo}
            component={ContainerTodo}
            options={({navigation, route}) => ({
              title: route.params.title,
              headerRight: () => {
                return(
                  <ButtonHome/>
                );
              }
            })}
          />
          <Stack.Screen
            name={routes.Device}
            component={ContainerDevice}
            options={({navigation, route}) => ({
              title: 'Режим работы',
              headerRight: () => {
                return(
                  <ButtonHome/>
                );
              },
              headerTitle: () => {
                return(
                  <SearchInput/>
                );
              }
            })}
          />
          <Stack.Screen
            name={routes.ListActions}
            component={ListActions}
            options={({navigation, route}) => ({
              title: route.params.title,
              headerRight: () => {
                return(
                  <ButtonHome/>
                );
              }
            })}
          />
          <Stack.Screen
            name={routes.Action}
            component={Action}
            options={({navigation, route}) => ({
              title: route.params.title,
              headerRight: () => {
                return(
                  <ButtonAction
                    stoped={route.params.stoped}
                  />
                );
              }
            })}
          />
          <Stack.Screen
            name={routes.ScanBarCode}
            component={ScanBarCode}
            options={({navigation, route}) => ({
              title: '',
              headerStyle:{
                backgroundColor: colors.color8
              },
            })}
          />
          <Stack.Screen
            name={routes.Gallery}
            component={Gallery}
            options={({navigation, route}) => ({
              title: 'Галерея',
              headerStyle:{
                backgroundColor: colors.color8
              },
            })}
          />
          <Stack.Screen
            name={routes.Camera}
            component={Camera}
            options={({navigation, route}) => ({
              title: '',
              headerStyle:{
                backgroundColor: colors.color8
              },
            })}
          />
          <Stack.Screen
            name={routes.ViewPhoto}
            component={ViewPhoto}
            options={({navigation, route}) => ({
              title: '',
              headerStyle:{
                backgroundColor: colors.color8
              },
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default ContainerNavigation;
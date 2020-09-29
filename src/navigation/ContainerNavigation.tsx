import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';
import store from '../redux/store';
import { Stack } from "./stackNavigation";
import Setting from "../pages/Setting";
import ContainerOrder from './ContainerOrder';
import ContainerModeWork from './ContainerModeWork';
import { ButtonSetting } from '../components/ButtonSetting';
import { ButtonHome } from '../components/ButtonHome';
import { desingColor, colorBlack } from '../styles/constantStyle';
import HeaderModeWork from '../components/HeaderModeWork';
import ScanBarCode from '../pages/ScanBarCode';
import Step from '../pages/Step';
import ContainerTodo from './ContainerTodo';
import ContainerDevice from './ContainerDevice';
import SearchInput from '../components/SearchInput';
import { colorWhite } from '../styles/constantStyle';
import ListActions from '../pages/ListActions';
import Action from '../pages/Action';
import ButtonAction from '../components/Action/ButtonAction';
import Gallery from '../pages/Gallery';
import Camera from '../pages/Camera';

const ContainerNavigation: React.FC = () => {
    return(
        <Provider store={store}>
            <NavigationContainer>
                <StatusBar backgroundColor={desingColor} barStyle="light-content"/>
                <Stack.Navigator
                    initialRouteName='Order'
                    screenOptions={{
                        headerTintColor: colorWhite,
                        headerStyle:{
                            backgroundColor: desingColor,
                            elevation: 0,
                        },
                        headerTitleStyle:{
                            fontSize: 20,
                            fontFamily: 'OpenSans-SemiBold'
                        }
                    }}
                >
                    <Stack.Screen
                        name='Setting'
                        component={Setting}
                        options={{
                            title: 'Настройки',
                        }}
                    />
                    <Stack.Screen
                        name='Order'
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
                        name='ModeWork'
                        component={ContainerModeWork}
                        options={({navigation, route}) => ({
                            title: 'Режим работы',
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
                        name='Step'
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
                        name='Todo'
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
                        name='Device'
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
                        name='ListActions'
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
                        name='Action'
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
                        name='ScanBarCode'
                        component={ScanBarCode}
                        options={({navigation, route}) => ({
                            title: '',
                            headerStyle:{
                                backgroundColor: colorBlack
                            },
                        })}
                    />
                    <Stack.Screen
                        name='Gallery'
                        component={Gallery}
                        options={({navigation, route}) => ({
                            title: 'Галерея',
                            headerStyle:{
                                backgroundColor: colorBlack
                            },
                        })}
                    />
                    <Stack.Screen
                        name='Camera'
                        component={Camera}
                        options={({navigation, route}) => ({
                            title: '',
                            headerStyle:{
                                backgroundColor: colorBlack
                            },
                        })}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
};

export default ContainerNavigation;
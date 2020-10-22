import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';
import normalize from 'react-native-normalize';
import { Stack } from "./stackNavigation";
import { ButtonSetting } from '../components/ButtonSetting';
import { ButtonHome } from '../components/ButtonHome';
import { desingColor, colorBlack, barLabelSize, barLabelFontFamily } from '../styles/constantStyle';
import { HeaderModeWork } from '../components/HeaderModeWork';
import { SearchInput } from '../components/SearchInput';
import { colorWhite } from '../styles/constantStyle';
import { ButtonAction } from '../components/Action/ButtonAction';
import store from '../redux/store';
import Setting from "../pages/Setting";
import ContainerOrder from './ContainerOrder';
import ContainerModeWork from './ContainerModeWork';
import ScanBarCode from '../pages/ScanBarCode';
import Step from '../pages/Step';
import ContainerTodo from './ContainerTodo';
import ContainerDevice from './ContainerDevice';
import ListActions from '../pages/ListActions';
import Action from '../pages/Action';
import Gallery from '../pages/Gallery';
import Camera from '../pages/Camera';
import ViewPhoto from '../pages/ViewPhoto';

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
                            fontSize: normalize(22),
                            fontFamily: barLabelFontFamily
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
                    <Stack.Screen
                        name='ViewPhoto'
                        component={ViewPhoto}
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
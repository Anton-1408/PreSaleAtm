import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';
import store from '../redux/store';
import Stack from "./stackNavigation";
import Setting from "../pages/Setting";
import ContainerOrder from './ContainerOrder';
import ContainerModeWork from './ContainerModeWork';
import { ButtonSetting } from '../components/ButtonSetting';
import { ButtonHome } from '../components/ButtonHome';
import { desingColor } from '../styles/constantStyle';
import HeaderModeWork from '../components/HeaderModeWork';

const ContainerNavigation: React.FC = () => {
    return(
        <Provider store={store}>
            <NavigationContainer>
                <StatusBar backgroundColor="#3F51B5" barStyle="light-content"/>
                <Stack.Navigator
                    initialRouteName="Order"
                    screenOptions={{
                        headerTintColor: "#ffffff",
                        headerStyle:{
                            backgroundColor: desingColor,
                            elevation: 0,
                        },
                        headerTitleStyle:{
                            fontSize: 20,
                            fontFamily: "OpenSans-SemiBold"
                        }
                    }}
                >
                    <Stack.Screen
                        name="Setting"
                        component={Setting}
                        options={{
                            title: "Настройки",
                        }}
                    />
                    <Stack.Screen
                        name="Order"
                        component={ContainerOrder}
                        options={({navigation, route}) => ({
                            title: "Заявки",
                            headerRight: () => {
                                return(
                                    <ButtonSetting
                                        navigation={navigation}
                                    />
                                );
                            }
                        })}
                    />
                    <Stack.Screen
                        name="ModeWork"
                        component={ContainerModeWork}
                        options={({navigation, route}) => ({
                            title: "Режим работы",
                            headerRight: () => {
                                return(
                                    <ButtonHome
                                        navigation={navigation}
                                    />
                                );
                            },
                            headerTitle: () => {
                                return(
                                    <HeaderModeWork
                                        navigation={navigation}
                                    />
                                );
                            }
                        })}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
};

export default ContainerNavigation;
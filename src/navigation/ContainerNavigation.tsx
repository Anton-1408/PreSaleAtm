import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';
import store from '../redux/store';
import Stack from "./stackNavigation";

import Setting from "../Setting";
import ContainerOrder from './ContainerOrder';
import { ButtonSetting } from '../components/ButtonSetting';
import { desingColor } from '../styles/constantStyle';

const ContainerNavigation: React.FC = () => {
    return(
        <Provider store={store}>
            <NavigationContainer>
                <StatusBar backgroundColor="#3F51B5"/>
                <Stack.Navigator
                    initialRouteName="Order"
                    screenOptions={{
                        headerTintColor: "#fff",
                        headerStyle:{
                            backgroundColor: desingColor,
                            elevation: 0,
                        },
                        headerTitleStyle:{
                            fontSize: 20,
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
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
};

export default ContainerNavigation;
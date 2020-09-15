import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';
import store from '../redux/store';
import Stack from "./stackNavigation";

import App from "../app";

const ContainerNavigation: React.FC = () => {
    return(
        <Provider store={store}>
            <NavigationContainer>
                <StatusBar backgroundColor="#3F51B5"/>
                <Stack.Navigator
                    initialRouteName="Orders"
                    screenOptions={{
                        headerTintColor: "#fff",
                        headerStyle:{
                            backgroundColor: "#3F51B5"
                        },
                        headerTitleStyle:{
                            fontSize: 20,
                        }
                    }}
                >
                    <Stack.Screen
                        name="Settings"
                        component={App}
                        options={{
                            title: "Настройки"
                        }}
                    />
                    <Stack.Screen
                        name="Orders"
                        component={App}
                        options={{
                            title: "Заявки"
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
};

export default ContainerNavigation;
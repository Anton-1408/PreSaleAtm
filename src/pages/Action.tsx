import React, { useEffect, useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';
import { style } from '../styles/style';
import { iRootReducers } from '../types/reduxTypes';
import { profileScreenNavigationPropStack, profileScreenRoutePropAction } from '../types/navigationTypes';
import { iconSize, colorWhite } from '../styles/constantStyle';
import { componentsStyle } from '../styles/componentsStyle';
import { ActionContext, getExtraFiles, getExtraParams, getResult } from '../lib/actionHelper';
import { SwipperPanel } from '../components/Action/SwipperPanel'
import { ActionType } from '../components/Action/ActionType';
import { colorIsWork } from '../styles/constantStyle';

interface iProps{
    navigation: profileScreenNavigationPropStack,
    route: profileScreenRoutePropAction,
    deviceKey: number,
    actionKey: number,
    actionResult: any
};

const mapStateToProps = (state: iRootReducers) => {
    return{
        deviceKey: state.holderKeysReducer.deviceKey,
        actionKey: state.holderKeysReducer.actionKey,
        actionResult: state.appStateReducer.resultAction
    }
};

const Action: React.FC<iProps> = (props) => {
    const { navigation, route, actionKey, deviceKey, actionResult } = props;

    const [extraFiles, setExtraFile] = useState([]);
    //const [extraParams, setExtraParams] = useState([]);
    //const [resultAction, setResultAction] = useState(undefined);
    const [statePanel, setStatePanel] = useState(false);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getExtraFiles(actionKey, setExtraFile)
           // getExtraParams(actionKey, setExtraParams);
            //getResult(actionKey, deviceKey, setResultAction);
        });
        return unsubscribe;
    }, [navigation]);

    return(
        <ActionContext.Provider
            value={{
                files: extraFiles,
                //extraParams: extraParams,
                comment: route.params.comment,
                //resultAction: resultAction,
            }}
        >
            <View style={style.container}>
                <Pressable
                    style={({ pressed }) => [
                        componentsStyle.actionContainerComment
                    ]}
                    onPress={() => {
                        setStatePanel(true)
                    }}
                >
                    <Text style={style.title}>Комментарий</Text>
                    <Icon name='gesture-tap' size={iconSize} color={colorIsWork}/>
                </Pressable>
                <View style={{backgroundColor: '#fff'}}>
                    <ActionType
                        type={route.params.type}
                    />
                </View>
                <SwipperPanel
                    statePanel={statePanel}
                    closePanel={() => {
                        setStatePanel(false)
                    }}
                />
                <Pressable
                    style={style.button}
                    onPress={() => {
                        console.warn(actionResult);
                    }}
                >
                    <Icon name='check' size={iconSize} color={colorWhite}/>
                </Pressable>
            </View>
        </ActionContext.Provider>
    );
};

export default connect(mapStateToProps, null)(Action);
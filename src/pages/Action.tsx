import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';
import { style } from '../styles/style';
import { iRootReducers } from '../types/reduxTypes';
import { tNavigationProp,tRoutePropAction } from '../types/navigationTypes';
import { iconSize, colorWhite } from '../styles/constantStyle';
import { componentsStyle } from '../styles/componentsStyle';
import { ActionContext, getExtraFiles, getExtraParams, saveResult, deletePhoto, savePhotoAction } from '../lib/actionHelper';
import { SwipperPanel } from '../components/Action/SwipperPanel'
import { colorIsWork } from '../styles/constantStyle';
import { typeAction } from '../types/typeAction';
import ActionType from '../components/Action/ActionType';

interface iProps{
    readonly deviceKey: number,
    readonly actionKey: number,
    readonly actionResult: any
    readonly route: tRoutePropAction,
    readonly navigation: tNavigationProp,
};

const mapStateToProps = (state: iRootReducers) => {
    return{
        deviceKey: state.holderKeysReducer.deviceKey,
        actionKey: state.holderKeysReducer.actionKey,
        actionResult: state.appStateReducer.resultAction
    }
};

const Action: React.FC<iProps> = (props) => {
    const { navigation, actionKey, deviceKey, actionResult, route } = props;

    const [extraFiles, setExtraFile] = useState([]);
    const [extraParams, setExtraParams] = useState([]);
    const [statePanel, setStatePanel] = useState(false);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getExtraParams(actionKey, setExtraParams);
            getExtraFiles(actionKey, setExtraFile)
        });
        return unsubscribe;
    }, [navigation]);

    const setResult = useCallback(() => {
        const type = route.params.type;
        if(type === typeAction.photo){
            deletePhoto(actionKey, deviceKey);
            saveResult(actionKey, deviceKey, actionResult.length);
            savePhotoAction(actionKey, deviceKey, actionResult);
        }
        else{
            saveResult(actionKey, deviceKey, actionResult);
        }
        navigation.goBack();
    }, [actionResult]);

    return(
        <ActionContext.Provider
            value={{
                files: extraFiles,
                extraParams: extraParams,
            }}
        >
            <View style={style.container}>
                <Pressable
                    style={componentsStyle.actionContainerComment}
                    onPress={() => {
                        setStatePanel(true);
                    }}
                >
                    <Text style={style.title}>Комментарий</Text>
                    <Icon name='gesture-tap' size={iconSize} color={colorIsWork}/>
                </Pressable>
                <View style={componentsStyle.actionTypeContainer}>
                    <ActionType
                        actionKey={actionKey}
                        deviceKey={deviceKey}
                    />
                </View>
                <SwipperPanel
                    statePanel={statePanel}
                    closePanel={() => {
                        setStatePanel(false);
                    }}
                />
                <Pressable
                    style={style.button}
                    onPress={setResult}
                >
                    <Icon name='check' size={iconSize} color={colorWhite}/>
                </Pressable>
            </View>
        </ActionContext.Provider>
    );
};

export default connect(mapStateToProps, null)(Action);
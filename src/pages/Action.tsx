import React, { useEffect, useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';
import { style } from '../styles/style';
import { iRootReducers } from '../types/reduxTypes';
import { profileScreenNavigationPropStack, profileScreenRoutePropAction } from '../types/navigationTypes';
import { iconSize } from '../styles/constantStyle';
import { componentsStyle } from '../styles/componentsStyle';
import { ActionContext, getExtraFiles, getExtraParams } from '../lib/actionHelper';
import { SwipperPanel } from '../components/Action/SwipperPanel'
import { ActionType } from '../components/Action/ActionType';
import { colorIsWork } from '../styles/constantStyle';

interface iProps{
    navigation: profileScreenNavigationPropStack,
    route: profileScreenRoutePropAction,
    deviceKey: number,
    actionKey: number
};

const mapStateToProps = (state: iRootReducers) => {
    return{
        deviceKey: state.holderKeysReducer.deviceKey,
        actionKey: state.holderKeysReducer.actionKey,
    }
};

const Action: React.FC<iProps> = (props) => {
    const { navigation, route, actionKey } = props;

    const [extraFiles, setExtraFile] = useState([]);
    const [statePanel, setStatePanel] = useState(false);
    const [extraParams, setExtraParams] = useState([]);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getExtraFiles(actionKey, setExtraFile)
            getExtraParams(actionKey, setExtraParams);
        });
        return unsubscribe;
    }, [navigation]);

    return(
        <ActionContext.Provider
            value={{
                files: extraFiles,
                extraParams: extraParams,
                comment: route.params.comment
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
            </View>
        </ActionContext.Provider>
    );
};

export default connect(mapStateToProps, null)(Action);
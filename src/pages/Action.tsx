import React, { useEffect, useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';
import { style } from '../styles/style';
import { iRootReducers } from '../types/reduxTypes';
import { tNavigationProp,tRoutePropAction } from '../types/navigationTypes';
import { iconSize } from '../styles/constantStyle';
import { componentsStyle } from '../styles/componentsStyle';
import { ActionContext, getExtraFiles, getExtraParams } from '../lib/actionHelper';
import { SwipperPanel } from '../components/Action/SwipperPanel'
import { colorIsWork } from '../styles/constantStyle';
import ActionType from '../components/Action/ActionType';
import { selectorDeviceKey, selectorActionKey } from '../redux/selectors/holderKeysSelectors';
import SaveResult from '../components/Action/SaveResult';

interface iProps{
    readonly deviceKey: number,
    readonly actionKey: number,
    readonly route: tRoutePropAction,
    readonly navigation: tNavigationProp,
};

const mapStateToProps = (state: iRootReducers) => {
    return{
        deviceKey: selectorDeviceKey(state),
        actionKey: selectorActionKey(state),
    }
};

const Action: React.FC<iProps> = (props) => {
    const { navigation, actionKey, deviceKey } = props;

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
                <SaveResult
                    deviceKey={deviceKey}
                    actionKey={actionKey}
                />

            </View>
        </ActionContext.Provider>
    );
};

export default connect(mapStateToProps, null)(Action);
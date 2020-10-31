import React, { useEffect, useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';
import { base } from '../../styles/base';
import { iRootReducers } from '../../types/reduxTypes';
import { tNavigationProp,tRoutePropAction } from '../../types/navigationTypes';
import { iconSize, colorIsWork } from '../../styles/constants';
import { ActionContext, getExtraFiles, getExtraParams } from '../../lib/actionHelper';
import { SwipperPanel, ActionType, SaveResultAction } from '../../components'
import { selectorDeviceKey, selectorActionKey } from '../../redux/selectors/holderKeysSelectors';
import { styles } from './styles';

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
            <View style={base.container}>
                <Pressable
                    style={styles.containerComment}
                    onPress={() => {
                        setStatePanel(true);
                    }}
                >
                    <Text style={base.title}>Комментарий</Text>
                    <Icon name='gesture-tap' size={iconSize} color={colorIsWork}/>
                </Pressable>
                <View style={styles.containerType}>
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
                <SaveResultAction
                    deviceKey={deviceKey}
                    actionKey={actionKey}
                />

            </View>
        </ActionContext.Provider>
    );
};

export default connect(mapStateToProps, null)(Action);
import React, { useEffect, useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';

import { RootReducers } from 'types/reduxTypes';
import { NavigationProp, RoutePropAction } from 'types/navigationTypes';
import { iconSize } from 'styles/constants';
import { colors, base } from 'styles';
import { ActionContext, getExtraFiles, getExtraParams } from 'lib/actionHelper';
import { SwipperPanel, ActionType, SaveResultAction } from 'components'
import { selectorDeviceKey, selectorActionKey } from 'redux/selectors/holderKeysSelectors';
import { styles } from './styles';

const mapStateToProps = (state: RootReducers) => {
  return{
    deviceKey: selectorDeviceKey(state),
    actionKey: selectorActionKey(state),
  }
};

const Action: React.FC<ActionProps> = (props) => {
  const { navigation, actionKey, deviceKey } = props;

  const [extraFiles, setExtraFile] = useState([]);
  const [extraParams, setExtraParams] = useState([]);
  const [statePanel, setStatePanel] = useState<boolean>(false);

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
          <Icon name='gesture-tap' size={iconSize} color={colors.color5}/>
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

interface ActionProps{
  deviceKey: number,
  actionKey: number,
  route: RoutePropAction,
  navigation: NavigationProp,
};

export default connect(mapStateToProps, null)(Action);
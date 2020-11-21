import React, { useEffect, useState } from 'react';
import { View, FlatList, Pressable, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import { iRootReducers } from '../../types/reduxTypes';
import { tNavigationProp, tRoutePropListActions } from '../../types/navigationTypes';
import { setActionKey } from '../../redux/actions/actions';
import { getListActions } from '../../lib/listActionsHelper';
import { colors, base } from '../../styles';
import { colorPress, bcolorDone, colorDone, iconSizeBar } from '../../styles/constants';
import { selectorStepKey, selectorDeviceKey } from '../../redux/selectors/holderKeysSelectors';

interface iProps{
  readonly stepKey: number,
  readonly deviceKey: number,
  readonly route: tRoutePropListActions,
  readonly navigation: tNavigationProp,
  readonly setActionId: Function,
};

const mapStateToProps = (state: iRootReducers) => {
  return{
    stepKey: selectorStepKey(state),
    deviceKey: selectorDeviceKey(state),
  }
};

const mapDispatchToProps = (dispatch: ThunkDispatch<iRootReducers, unknown, Action<Object>>) => {
  return{
    setActionId: (id: number) => dispatch(setActionKey(id)),
  }
};

const ListActions: React.FC<iProps> = (props) => {
  const { navigation, stepKey, deviceKey, setActionId } = props;
  const [listActions, setListActions] = useState([]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getListActions(deviceKey, stepKey, setListActions)
    });
    return unsubscribe;
  }, [navigation]);

  return(
    <View style={base.container}>
      <FlatList
        data={listActions}
        keyExtractor={(item: any) => (item.id).toString()}
        renderItem={({item}) => (
          <Pressable
            style={({ pressed }) => [
              colorPress(pressed),
              base.containerData, {
                backgroundColor: bcolorDone(item.isDone)
              }
            ]}
            onPress={() => {
              setActionId(item.id);
              navigation.navigate('Action', {
                title: item.name,
                comment: item.comment,
                type: item.type,
                stoped: item.stoped,
              });
            }}
          >
            <View style={base.containerText}>
              <Text style={[base.title, { color: colorDone(item.isDone, colors.color1)}]}>
                {item.name}
              </Text>
              <Text style={[base.comment, { color: colorDone(item.isDone, colors.color8)}]}>
                {item.fio} {item.date}
              </Text>
            </View>
            <View>
              <Icon name='angle-right' color={colorDone(item.isDone, colors.color1)} size={iconSizeBar}/>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ListActions);
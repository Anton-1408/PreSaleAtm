import React, { useEffect, useState } from 'react';
import { View, FlatList, Pressable, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import { style } from '../styles/style';
import { iRootReducers } from '../types/reduxTypes';
import { profileScreenNavigationPropStack, profileScreenRoutePropListActions } from '../types/navigationTypes';
import { setActionKey } from '../redux/actions/actions';
import { getListActions } from '../lib/listActionsHelper';
import { colorPress, bcolorDone, colorDone, colorTitle } from '../styles/constantStyle';

interface iProps{
    navigation: profileScreenNavigationPropStack,
    route: profileScreenRoutePropListActions,
    setActionId: Function,
    stepKey: number,
    deviceKey: number,
};

const mapStateToProps = (state: iRootReducers) => {
    return{
        stepKey: state.holderKeysReducer.stepKey,
        deviceKey: state.holderKeysReducer.deviceKey,
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
        <View style={style.container}>
            <FlatList
                data={listActions}
                keyExtractor={(item: any) => (item.id).toString()}
                renderItem={({item}) => (
                    <Pressable
                        style={({ pressed }) => [
                            colorPress(pressed),
                            style.containerData, {
                                backgroundColor: bcolorDone(item.isDone)
                            }
                        ]}
                        onPress={() => {
                            setActionId(item.id)
                            navigation.navigate('Action', {
                                title: item.name,
                                comment: item.comment,
                                type: item.type,
                                stoped: item.stoped,
                            })
                        }}
                    >
                        <View style={style.containerText}>
                            <Text style={[style.title, { color: colorDone(item.isDone, colorTitle) }]}>{item.name}</Text>
                        </View>
                        <View style={style.containerPercent}>
                            <Icon name='angle-right' color={colorDone(item.isDone, colorTitle)} size={25}/>
                        </View>
                    </Pressable>
                )}
            />
        </View>
    )
};

export default connect(mapStateToProps, mapDispatchToProps)(ListActions);
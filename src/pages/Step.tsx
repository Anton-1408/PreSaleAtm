import React, { useState, useEffect } from 'react';
import { FlatList, Pressable, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { profileScreenRoutePropScanStep, profileScreenNavigationPropStack } from '../types/navigationTypes';
import { colorPress, bcolorDone, colorDone, colorComment, colorTitle } from '../styles/constantStyle';
import { style } from '../styles/style';
import { iRootReducers } from '../types/reduxTypes';
import { setStepKey } from '../redux/actions/actions';
import { getSteps } from '../lib/dbSteps';
import { componentsStyle } from '../styles/componentsStyle';
import { StepStatus } from '../components/StepStatus';

interface iProps{
    navigation: profileScreenNavigationPropStack,
    route: profileScreenRoutePropScanStep,
    todoKey: number,
    orderKey: number
}

const mapStateToProps = (state: iRootReducers) => {
    return{
        todoKey: state.holderKeysReducer.todoKey,
        orderKey: state.holderKeysReducer.orderKey
    }
};

const mapDispatchToProps = (dispatch: ThunkDispatch<iRootReducers, unknown, Action<Object>>) => {
    return{
        setStepId: (id: number) => dispatch(setStepKey(id)),
    }
};

const Step: React.FC<iProps> = (props) => {
    const { navigation, todoKey, orderKey } = props;
    const [steps, setSteps] = useState([]);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getSteps(orderKey, todoKey, setSteps);
        });
        return unsubscribe;
    }, [navigation]);

    return(
        <View style={style.container}>
            <FlatList
                data={steps}
                keyExtractor={(item: any) => (item.id).toString()}
                renderItem={({item}) => (
                    <Pressable
                        style={({ pressed }) => [
                            colorPress(pressed),
                            componentsStyle.stepDataContainer, {
                                backgroundColor: bcolorDone(item.isDone)
                            }
                        ]}
                        onPress={() => {

						}}
                    >
                        <View style={componentsStyle.stepDataInformation}>
                            <View style={style.containerText}>
                                <Text style={[style.title, { color: colorDone(item.isDone, colorTitle) }]}>{item.name}</Text>
                                <Text style={[style.comment, { color: colorDone(item.isDone, colorComment) }]}>{item.comment}</Text>
                            </View>
                            <View style={style.containerPercent}>
                                <Icon name='angle-right' color={colorDone(item.isDone, colorTitle)} size={25}/>
                            </View>
                        </View>
                        <StepStatus
                            isImportant={item.isImportant}
                            isRequired={item.isRequired}
                        />
                    </Pressable>
                )}
            />
        </View>
    )
};

export default connect(mapStateToProps, mapDispatchToProps)(Step)
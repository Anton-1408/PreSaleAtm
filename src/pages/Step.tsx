import React, { useState, useEffect } from 'react';
import { FlatList, Pressable, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import { tRoutePropStep, tNavigationProp } from '../types/navigationTypes';
import { colorPress, bcolorDone, colorDone, colorBlack, colorTitle, iconSizeBar } from '../styles/constantStyle';
import { style } from '../styles/style';
import { iRootReducers } from '../types/reduxTypes';
import { setStepKey } from '../redux/actions/actions';
import { getSteps, setParams, setQuery } from '../lib/stepsHelper';
import { componentsStyle } from '../styles/componentsStyle';
import { StepStatus } from '../components';
import { modeWork } from '../types/modeWork';
import Icon from 'react-native-vector-icons/FontAwesome';
import { selectorOrderKey, selectorTodoKey, selectorDeviceKey } from '../redux/selectors/holderKeysSelectors';
import { selectorTypeWork } from '../redux/selectors/appStateSelectors';

interface iProps{
    readonly navigation: tNavigationProp,
    readonly route: tRoutePropStep,
    readonly todoKey: number,
    readonly orderKey: number,
    readonly deviceKey: number,
    readonly typeWork: string,
    readonly setStepId: Function,
}

const mapStateToProps = (state: iRootReducers) => {
    return{
        todoKey: selectorTodoKey(state),
        orderKey: selectorOrderKey(state),
        deviceKey: selectorDeviceKey(state),
        typeWork: selectorTypeWork(state)
    }
};

const mapDispatchToProps = (dispatch: ThunkDispatch<iRootReducers, unknown, Action<Object>>) => {
    return{
        setStepId: (id: number) => dispatch(setStepKey(id)),
    }
};

const Step: React.FC<iProps> = (props) => {
    const { navigation, todoKey, orderKey, typeWork,  deviceKey, setStepId } = props;
    const [steps, setSteps] = useState([]);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            const query = setQuery(typeWork);
            const params = setParams(typeWork, orderKey, deviceKey, todoKey);
            getSteps(query, params, setSteps);
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
                            setStepId(item.id)
                            if(typeWork === modeWork.todo){
                                navigation.navigate('Device')
                            }
                            else{
                                navigation.navigate('ListActions', {
                                    title: item.name
                                })
                            }
						}}
                    >
                        <View style={componentsStyle.stepDataInformation}>
                            <View style={style.containerText}>
                                <Text style={[style.title, { color: colorDone(item.isDone, colorTitle) }]}>{item.name}</Text>
                                <Text style={[style.comment, { color: colorDone(item.isDone, colorBlack) }]}>{item.comment}</Text>
                            </View>
                            <View>
                                <Icon name='angle-right' color={colorDone(item.isDone, colorTitle)} size={iconSizeBar}/>
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
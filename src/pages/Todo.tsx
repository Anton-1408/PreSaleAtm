import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { View, Pressable, FlatList, Text } from 'react-native';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { iRootReducers } from '../types/reduxTypes';
import { profileScreenRoutePropTodo, profileScreenNavigationPropStack } from '../types/navigationTypes'
import { setTodoKey } from '../redux/actions/actions';
import { style } from '../styles/style';
import { getTodos, setQuery, setParams } from '../lib/dbTodos';
import { colorPress } from '../styles/constantStyle';

interface iProps{
	navigation: profileScreenNavigationPropStack,
	route: profileScreenRoutePropTodo,
	orderKey: number,
	deviceKey: number,
	setTodoId: Function,
	typeWork: string
}

const mapDispatchToProps = (dispatch: ThunkDispatch<iRootReducers, unknown, Action<Object>>) => {
    return{
		setTodoId: (id: number) => dispatch(setTodoKey(id)),
    };
};

const mapStateToProps = (state: iRootReducers) => {
    return{
		orderKey: state.holderKeysReducer.orderKey,
		deviceKey: state.holderKeysReducer.deviceKey,
		typeWork: state.appStateReducer.modeWork,
    };
};

const Todo: React.FC<iProps> = (props) => {
	const { navigation, setTodoId, orderKey, deviceKey, typeWork, route } = props;
	const [ todos, useTodos ] = useState([]);

	useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
			const query = setQuery(typeWork);
			const params = setParams(typeWork, orderKey, deviceKey);
			getTodos(query, params, useTodos, route.name);
        });
        return unsubscribe;
    }, [navigation]);

    return(
        <View style={style.container}>
			<FlatList
				data={todos}
				keyExtractor={(item: any) => (item.id).toString()}
				renderItem={({item}) => (
					<Pressable
						style={({ pressed }) => [colorPress(pressed), style.containerData]}
						onPress={() => {
							setTodoId(item.id)
							navigation.navigate('Step', {
								title: item.name
							});
						}}
					>
						<View style={style.containerText}>
							<Text style={style.title}>{item.name}</Text>
							<Text style={style.comment}>{item.comment}</Text>
						</View>
						<View style={style.containerPercent}>
							<Text style={style.percent}>{item.percent + "%"}</Text>
						</View>
					</Pressable>
				)}
			/>
        </View>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
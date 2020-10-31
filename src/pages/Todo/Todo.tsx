import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { View, Pressable, FlatList, Text } from 'react-native';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { iRootReducers } from '../../types/reduxTypes';
import { tRoutePropTodo, tNavigationProp } from '../../types/navigationTypes'
import { setTodoKey } from '../../redux/actions/actions';
import { base } from '../../styles';
import { getTodos, setQuery, setParams } from '../../lib/todosHelper';
import { colorPress } from '../../styles/constants';
import { selectorOrderKey, selectorDeviceKey } from '../../redux/selectors/holderKeysSelectors';
import { selectorTypeWork } from '../../redux/selectors/appStateSelectors';

interface iProps{
	readonly orderKey: number,
	readonly deviceKey: number,
	readonly typeWork: string
	readonly route: tRoutePropTodo,
	readonly navigation: tNavigationProp,
	readonly setTodoId: Function,
}

const mapDispatchToProps = (dispatch: ThunkDispatch<iRootReducers, unknown, Action<Object>>) => {
    return{
		setTodoId: (id: number) => dispatch(setTodoKey(id)),
    };
};

const mapStateToProps = (state: iRootReducers) => {
    return{
			orderKey: selectorOrderKey(state),
			deviceKey: selectorDeviceKey(state),
			typeWork: selectorTypeWork(state),
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
      <View style={base.container}>
					<FlatList
						data={todos}
						keyExtractor={(item: any) => (item.id).toString()}
						renderItem={({item}) => (
							<Pressable
								style={({ pressed }) => [colorPress(pressed), base.containerData]}
								onPress={() => {
									setTodoId(item.id)
									navigation.navigate('Step', {
										title: item.name
									});
								}}
							>
								<View style={base.containerText}>
									<Text style={base.title}>{item.name}</Text>
									<Text style={base.comment}>{item.comment}</Text>
								</View>
								<View>
									<Text style={base.percent}>{item.percent + "%"}</Text>
								</View>
							</Pressable>
						)}
					/>
      </View>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
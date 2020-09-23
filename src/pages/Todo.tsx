import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { View, Pressable, FlatList, Text } from 'react-native';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { iRootReducers } from '../types/reduxTypes';
import { profileScreenRoutePropTodo, profileScreenNavigationPropStack } from '../types/navigationTypes'
import { setTodoKey } from '../redux/actions/actions';
import { style } from '../styles/style';

interface iProps{
	navigation: profileScreenNavigationPropStack,
	route: profileScreenRoutePropTodo,
	orderKey: number,
	setTodoId: Function,
}

const mapDispatchToProps = (dispatch: ThunkDispatch<iRootReducers, unknown, Action<Object>>) => {
    return{
		setTodoId: (id: number) => dispatch(setTodoKey(id)),
    };
};

const mapStateToProps = (state: iRootReducers) => {
    return{
		orderKey: state.holderKeysReducer.orderKey
    };
};

const Todo: React.FC<iProps> = (props) => {
	const { navigation, setTodoId, orderKey } = props;

	// useEffect(() => {
	// 	console.warn("csc");

	// }, [navigation]);

    return(
        <View>

        </View>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

export type rootStackParams={
    Order: undefined,
    Setting: undefined,
};

export type rootParamsOrder={
    OrderAll: undefined,
    OrderInWork: undefined,
    OrderDone: undefined,
};

export type profileScreenNavigationPropOrder = StackNavigationProp<rootParamsOrder, 'OrderAll'> |
                                                StackNavigationProp<rootParamsOrder, 'OrderInWork'> |
                                                StackNavigationProp<rootParamsOrder, 'OrderDone'>   

export type profileScreenRoutePropOrder = RouteProp<rootParamsOrder, 'OrderAll'> |
                                            RouteProp<rootParamsOrder, 'OrderInWork'> | 
                                            RouteProp<rootParamsOrder, 'OrderDone'>;


export type profileScreenNavigationPropSetting = StackNavigationProp<rootStackParams, 'Setting'>; 
export type profileScreenRoutePropSetting = RouteProp<rootStackParams, 'Setting'>;
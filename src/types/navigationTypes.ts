import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

export type rootStackParams={
    Order: undefined,
    Setting: undefined,
};

export type rootParamsOrder={
    OrderAll: undefined,
    OrderInWork: undefined,
    OrederDone: undefined,
};

export type profileScreenNavigationPropOrder = StackNavigationProp<rootStackParams, 'Order'>;
export type profileScreenRoutePropOrder = RouteProp<rootStackParams, 'Order'>;


export type profileScreenNavigationPropSetting = StackNavigationProp<rootStackParams, 'Setting'>; 
export type profileScreenRoutePropSetting = RouteProp<rootStackParams, 'Setting'>;
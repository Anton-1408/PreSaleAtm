import { StackNavigationProp } from '@react-navigation/stack';

export type rootStackParams={
    Order: undefined,
    Setting: undefined,
};

export type rootParamsOrder={
    OrderAll: undefined,
    OrderInWork: undefined,
    OrederDone: undefined,
};

export type profileScreenNavigationPropProjects = StackNavigationProp<rootStackParams, 'Order'>; 

export type profileScreenNavigationPropSettings = StackNavigationProp<rootStackParams, 'Setting'>; 
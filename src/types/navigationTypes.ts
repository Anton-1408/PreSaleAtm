import { StackNavigationProp } from '@react-navigation/stack';

export type rootStackParams={
    Orders: undefined,
    Settings: undefined,
};

export type profileScreenNavigationPropProjects = StackNavigationProp<rootStackParams, 'Orders'>; 

export type profileScreenNavigationPropSettings = StackNavigationProp<rootStackParams, 'Settings'>; 
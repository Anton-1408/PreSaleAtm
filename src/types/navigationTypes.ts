import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { CompositeNavigationProp } from '@react-navigation/native'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

export type rootStackParams={
    Setting: undefined,
    Order: undefined,
    ModeWork: undefined,
};

export type rootParamsOrder={
    OrderAll: undefined,
    OrderInWork: undefined,
    OrderDone: undefined,
};

export type rootParamsDevice={
    DevicesInWork: undefined,
    DevicesStop: undefined,
    DevicesDone: undefined,
};

export type rootParamsTodo={
    TodoAll: undefined,
    TodoInWork: undefined,
    TodoDone: undefined,
};

export type rootParamsModeWork={
    DeviceMode: undefined,
    TodoMode: undefined,
};

export type profileScreenRoutePropOrder = RouteProp<rootParamsOrder, 'OrderAll'>
                                            | RouteProp<rootParamsOrder, 'OrderInWork'>
                                            | RouteProp<rootParamsOrder, 'OrderDone'>;

export type profileScreenRoutePropDevice = RouteProp<rootParamsDevice, 'DevicesInWork'>
                                            | RouteProp<rootParamsDevice, 'DevicesStop'>
                                            | RouteProp<rootParamsDevice, 'DevicesDone'>;

export type profileScreenRoutePropTodo= RouteProp<rootParamsTodo, 'TodoAll'>
                                            | RouteProp<rootParamsTodo, 'TodoInWork'>
                                            | RouteProp<rootParamsTodo, 'TodoDone'>;

export type profileScreenRoutePropSetting = RouteProp<rootStackParams, 'Setting'>;

export type profileScreenRoutePropModeWork= RouteProp<rootStackParams, 'ModeWork'>;

export type profileScreenNavigationPropStack = StackNavigationProp<rootStackParams>;

// type navigationPropModeWork =  BottomTabNavigationProp<rootParamsModeWork, 'TodoMode'>;// |  BottomTabNavigationProp<rootParamsModeWork, 'DeviceMode'>;

//export type profileScreenNavigationPropModeWork = //CompositeNavigationProp<
                                                      //  navigationPropModeWork
                                                    //    profileScreenNavigationPropStack
                                                    //>;


import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

export type rootStackParams={
    Setting: undefined,
    Order: undefined,
    ModeWork: undefined,
    ScanBarCode: undefined,
    Gallery: undefined,
    Camera: undefined,
    Step: {
        title: string,
    },
    Todo: {
        title: 'Чек-Листы'
    },
    Device: undefined,
    ListActions: {
        title: string,
    },
    Action:{
        title: string,
        comment: string,
        type: any,
        stoped: number
    }
    ViewPhoto:{
        name: string,
        array: Array<Object>,
    }
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

export type profileScreenRoutePropModeWork = RouteProp<rootParamsModeWork, 'DeviceMode'>
                                                | RouteProp<rootParamsModeWork, 'TodoMode'>

export type profileScreenNavigationPropStack = StackNavigationProp<rootStackParams>;

export type profileScreenRoutePropScanBarCode = RouteProp<rootStackParams, 'ScanBarCode'>;

export type profileScreenRoutePropStep = RouteProp<rootStackParams, 'Step'>;

export type profileScreenRoutePropListActions = RouteProp<rootStackParams, 'ListActions'>;

export type profileScreenRoutePropAction = RouteProp<rootStackParams, 'Action'>;

export type profileScreenRoutePropGallery = RouteProp<rootStackParams, 'Gallery'>;

export type profileScreenRoutePropCamera = RouteProp<rootStackParams, 'Camera'>;

export type profileScreenRoutePropViewPhoto = RouteProp<rootStackParams, 'ViewPhoto'>;



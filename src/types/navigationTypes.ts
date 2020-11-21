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
    type: string,
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

export type tRoutePropOrder = RouteProp<rootParamsOrder, 'OrderAll'>
                                | RouteProp<rootParamsOrder, 'OrderInWork'>
                                | RouteProp<rootParamsOrder, 'OrderDone'>;

export type tRoutePropDevice = RouteProp<rootParamsDevice, 'DevicesInWork'>
                                | RouteProp<rootParamsDevice, 'DevicesStop'>
                                | RouteProp<rootParamsDevice, 'DevicesDone'>;

export type tRoutePropTodo = RouteProp<rootParamsTodo, 'TodoAll'>
                                            | RouteProp<rootParamsTodo, 'TodoInWork'>
                                            | RouteProp<rootParamsTodo, 'TodoDone'>;

export type tRoutePropSetting = RouteProp<rootStackParams, 'Setting'>;

export type tNavigationProp = StackNavigationProp<rootStackParams>;

export type tRoutePropScanBarCode = RouteProp<rootStackParams, 'ScanBarCode'>;

export type tRoutePropStep = RouteProp<rootStackParams, 'Step'>;

export type tRoutePropListActions = RouteProp<rootStackParams, 'ListActions'>;

export type tRoutePropAction = RouteProp<rootStackParams, 'Action'>;

export type tRoutePropGallery = RouteProp<rootStackParams, 'Gallery'>;

export type tRoutePropCamera = RouteProp<rootStackParams, 'Camera'>;

export type tRoutePropViewPhoto = RouteProp<rootStackParams, 'ViewPhoto'>;



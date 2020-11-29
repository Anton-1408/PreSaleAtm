import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

import { ElementGalleryPhoto } from 'types/elementType';

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
    array: Array<ElementGalleryPhoto>,
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

export type RoutePropOrder = RouteProp<rootParamsOrder, 'OrderAll'>
                                | RouteProp<rootParamsOrder, 'OrderInWork'>
                                | RouteProp<rootParamsOrder, 'OrderDone'>;

export type RoutePropDevice = RouteProp<rootParamsDevice, 'DevicesInWork'>
                                | RouteProp<rootParamsDevice, 'DevicesStop'>
                                | RouteProp<rootParamsDevice, 'DevicesDone'>;

export type RoutePropTodo = RouteProp<rootParamsTodo, 'TodoAll'>
                                | RouteProp<rootParamsTodo, 'TodoInWork'>
                                | RouteProp<rootParamsTodo, 'TodoDone'>;

export type RoutePropSetting = RouteProp<rootStackParams, 'Setting'>;

export type NavigationProp = StackNavigationProp<rootStackParams>;

export type RoutePropScanBarCode = RouteProp<rootStackParams, 'ScanBarCode'>;

export type RoutePropStep = RouteProp<rootStackParams, 'Step'>;

export type RoutePropListActions = RouteProp<rootStackParams, 'ListActions'>;

export type RoutePropAction = RouteProp<rootStackParams, 'Action'>;

export type RoutePropGallery = RouteProp<rootStackParams, 'Gallery'>;

export type RoutePropCamera = RouteProp<rootStackParams, 'Camera'>;

export type RoutePropViewPhoto = RouteProp<rootStackParams, 'ViewPhoto'>;



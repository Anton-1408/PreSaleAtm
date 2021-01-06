import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { routes } from 'navigation/routes';
import { ElementGalleryPhoto } from 'types/elementType';

export type rootStackParams={
  [routes.Setting]: undefined,
  [routes.Order]: undefined,
  [routes.ModeWork]: undefined,
  [routes.ScanBarCode]: undefined,
  [routes.Gallery]: undefined,
  [routes.Camera]: undefined,
  [routes.Step]: {
    title: string,
  },
  [routes.Todo]: {
    title: 'Чек-Листы'
  },
  [routes.Device]: undefined,
  [routes.ListActions]: {
    title: string,
  },
  [routes.Action]:{
    title: string,
    comment: string,
    type: string,
    stoped: number
  }
  [routes.ViewPhoto]:{
    name: string,
    array: Array<ElementGalleryPhoto>,
  }
};

export type rootParamsOrder={
  [routes.OrderAll]: undefined,
  [routes.OrderInWork]: undefined,
  [routes.OrderDone]: undefined,
};

export type rootParamsDevice={
  [routes.DevicesInWork]: undefined,
  [routes.DevicesStop]: undefined,
  [routes.DevicesDone]: undefined,
};

export type rootParamsTodo={
  [routes.TodoAll]: undefined,
  [routes.TodoInWork]: undefined,
  [routes.TodoDone]: undefined,
};

export type rootParamsModeWork={
  [routes.DeviceMode]: undefined,
  [routes.TodoMode]: undefined,
};

export type RoutePropOrder =  | RouteProp<rootParamsOrder, routes.OrderAll>
                              | RouteProp<rootParamsOrder, routes.OrderInWork>
                              | RouteProp<rootParamsOrder, routes.OrderDone>;

export type RoutePropDevice = | RouteProp<rootParamsDevice, routes.DevicesInWork>
                              | RouteProp<rootParamsDevice, routes.DevicesStop>
                              | RouteProp<rootParamsDevice, routes.DevicesDone>;

export type RoutePropTodo = | RouteProp<rootParamsTodo, routes.TodoAll>
                            | RouteProp<rootParamsTodo, routes.TodoInWork>
                            | RouteProp<rootParamsTodo, routes.TodoDone>;

export type RoutePropSetting = RouteProp<rootStackParams, routes.Setting>;

export type NavigationProp = StackNavigationProp<rootStackParams>;

export type RoutePropScanBarCode = RouteProp<rootStackParams, routes.ScanBarCode>;

export type RoutePropStep = RouteProp<rootStackParams, routes.Step>;

export type RoutePropListActions = RouteProp<rootStackParams, routes.ListActions>;

export type RoutePropAction = RouteProp<rootStackParams, routes.Action>;

export type RoutePropGallery = RouteProp<rootStackParams, routes.Gallery>;

export type RoutePropCamera = RouteProp<rootStackParams, routes.Camera>;

export type RoutePropViewPhoto = RouteProp<rootStackParams, routes.ViewPhoto>;
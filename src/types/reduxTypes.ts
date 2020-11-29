import {
  SET_ACTION_KEY,
  SET_DEVICE_KEY,
  SET_HASHCODE_PROJECTS,
  SET_ORDER_KEY,
  SET_MODE_WORK,
  SET_ID_USER,
  SET_RESULT_CHECK_LIST,
  SET_TODO_KEY,
  SET_STEP_KEY,
  SET_SERIAL_NUMBER_DEVICE,
  SET_RESULT_ACTION,
  SET_ACTION_PHOTOS,
  SET_SEND_FILES,
} from "../redux/actions/types";
import { FilesPhoto } from '../types/elementType';

export interface OrdertKey{
  type: typeof SET_ORDER_KEY,
  orderKey: number,
};

export interface TodoKey{
  type: typeof SET_TODO_KEY,
  todoKey: number,
};

export interface DeviceKey{
  type: typeof SET_DEVICE_KEY,
  deviceKey: number,
};

export interface StepKey{
  type: typeof SET_STEP_KEY,
  stepKey: number,
};

export interface ActionKey{
  type: typeof SET_ACTION_KEY,
  actionKey: number,
};

export interface ModeWork{
  type: typeof SET_MODE_WORK,
  modeWork: string,
};

export interface UserId{
  type: typeof SET_ID_USER,
  idUser: string,
};

export interface ResultCheckList{
  type: typeof SET_RESULT_CHECK_LIST,
  listResultsCheckList: Array<Object>,
};

export interface HashcodeProjects{
  type: typeof SET_HASHCODE_PROJECTS,
  projectHash: Array<Object>,
  resultHash:  Array<Object>,
};

export interface SetSerialNumberDevice{
  type: typeof SET_SERIAL_NUMBER_DEVICE,
  serialNumber: string,
};

export interface SetResultAction{
  type: typeof SET_RESULT_ACTION,
  resultAction: any
};

export interface SetPhotosAction{
  type: typeof SET_ACTION_PHOTOS,
  photoAction: FilesPhoto
}

export interface SetSendFiles{
  type: typeof SET_SEND_FILES,
  actionFiles: FormData
};

export interface HolderKeysReducerState{
  actionKey: number,
  stepKey: number,
  deviceKey: number,
  todoKey: number,
  orderKey: number,
};

export interface SyncDataReducerState{
  idUser: string,
  resultHash: Object,
  projectHash: Object,
  actionFiles: FormData,
  listResultsCheckList: Array<Object>,
};

export interface AppStateReducerState{
  serialNumber: string,
  modeWork: string,
  resultAction: any,
  photoAction: FilesPhoto,
}

export type HolderKeysReducer = OrdertKey | TodoKey | DeviceKey | StepKey | ActionKey;

export type SyncDataReducer = HashcodeProjects | ResultCheckList | UserId | SetSendFiles;

export type AppStateReducer = SetSerialNumberDevice | ModeWork | SetResultAction | SetPhotosAction;

export interface RootReducers{
    holderKeysReducer: HolderKeysReducerState,
    syncDataReducer: SyncDataReducerState,
    appStateReducer: AppStateReducerState
};
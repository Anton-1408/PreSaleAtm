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

export interface iOrdertKey{
    type: typeof SET_ORDER_KEY,
    orderKey: number,
};

export interface iTodoKey{
    type: typeof SET_TODO_KEY,
    todoKey: number,
};

export interface iDeviceKey{
    type: typeof SET_DEVICE_KEY,
    deviceKey: number,
};

export interface iStepKey{
    type: typeof SET_STEP_KEY,
    stepKey: number,
};

export interface iActionKey{
    type: typeof SET_ACTION_KEY,
    actionKey: number,
};

export interface iModeWork{
    type: typeof SET_MODE_WORK,
    modeWork: string,
};

export interface iUserId{
    type: typeof SET_ID_USER,
    idUser: string,
};

export interface iResultCheckList{
    type: typeof SET_RESULT_CHECK_LIST,
    listResultsCheckList: Array<Object>,
};

export interface iHashcodeProjects{
    type: typeof SET_HASHCODE_PROJECTS,
    projectHash: Array<Object>,
    resultHash:  Array<Object>,
};

export interface iSetSerialNumberDevice{
    type: typeof SET_SERIAL_NUMBER_DEVICE,
    serialNumber: string,
};

export interface iSetResultAction{
    type: typeof SET_RESULT_ACTION,
    resultAction: any
};

export interface iSetPhotosAction{
    type: typeof SET_ACTION_PHOTOS,
    photoAction: Array<Object> | Object
}

export interface iSetSendFiles{
    type: typeof SET_SEND_FILES,
    actionFiles: FormData
};

export interface iHolderKeysReducerState{
    actionKey: number,
    stepKey: number,
    deviceKey: number,
    todoKey: number,
    orderKey: number,
};

export interface iSyncDataReducer{
    idUser: string,
    resultHash: Object,
    projectHash: Object,
    actionFiles: FormData,
    listResultsCheckList: Array<Object>,
};

export interface iAppStateReducer{
    serialNumber: string,
    modeWork: string,
    resultAction: any,
    photoAction: Array<Object> | Object,
}

export type typeHolderKeysReducer = iOrdertKey | iTodoKey |
                                    iDeviceKey | iStepKey |
                                    iActionKey;

export type typeSyncDataReducer = iHashcodeProjects | iResultCheckList |
                                    iUserId | iSetSendFiles;

export type typeAppStateReducer = iSetSerialNumberDevice | iModeWork |
                                    iSetResultAction | iSetPhotosAction;

export interface iRootReducers{
    holderKeysReducer: iHolderKeysReducerState,
    syncDataReducer: iSyncDataReducer,
    appStateReducer: iAppStateReducer
};
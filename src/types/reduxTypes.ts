import {
    SET_ACTION_KEY,
    SET_DEVICE_KEY,
    SET_HASHCODE_PROJECTS,
    SET_PROJECT_KEY,
    SET_MODE_WORK,
    SET_ID_USER,
    SET_RESULT_CHECK_LIST,
    SET_TODO_KEY,
    SET_STEP_KEY,
} from "../redux/actions/types";

export interface iProjectKey{
    type: typeof SET_PROJECT_KEY,
    projectKey: number,
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

export interface iHolderKeysReducerState{
    actionKey: number,
    modeWork: string,
    stepKey: number,
    deviceKey: number,
    todoKey: number,
    projectKey: number,
};

export interface iSyncDataReducer{
    idUser: string,
    projectHash: any,
    resultHash: any,
    listResultsCheckList: any,
};

export type typeHolderKeysReducer = iProjectKey | iTodoKey | iModeWork | iDeviceKey | iStepKey | iActionKey;

export type typeSyncDataReducer = iHashcodeProjects | iResultCheckList | iUserId;

export interface iRootReducers{
    holderKeysReducer: iHolderKeysReducerState,
    syncDataReducer: iSyncDataReducer,
};
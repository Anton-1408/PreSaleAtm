import { iHolderKeysReducerState, typeHolderKeysReducer } from "../../types/reduxTypes";
import {
    SET_ACTION_KEY,
    SET_DEVICE_KEY,
    SET_PROJECT_KEY,
    SET_MODE_WORK,
    SET_TODO_KEY,
    SET_STEP_KEY,
} from "../actions/types";


const initialState={
    actionKey: 0,
    stepKey: 0,
    deviceKey: 0,
    todoKey: 0,
    projectKey: 0,
    modeWork: "",
};

export function holderKeysReducer(state: iHolderKeysReducerState = initialState, action: typeHolderKeysReducer){
    switch(action.type){
        case SET_ACTION_KEY:
            return{
                ...state,
                actionKey: action.actionKey
            }
        case SET_DEVICE_KEY:
            return{
                ...state,
                deviceKey: action.deviceKey
            };
        case SET_PROJECT_KEY:
            return{
                ...state,
                projectKey: action.projectKey
            };
        case SET_TODO_KEY:
            return{
                ...state,
                todoKey: action.todoKey
            };
        case SET_STEP_KEY:
            return{
                ...state,
                stepKey: action.stepKey
            };
        case SET_MODE_WORK:
            return{
                ...state,
                modeWork: action.modeWork
            };
        default:
            return state;                    
    }
};
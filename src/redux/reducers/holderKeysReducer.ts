import { iHolderKeysReducerState, typeHolderKeysReducer } from "../../types/reduxTypes";
import {
    SET_ACTION_KEY,
    SET_DEVICE_KEY,
    SET_ORDER_KEY,
    SET_MODE_WORK,
    SET_TODO_KEY,
    SET_STEP_KEY,
} from "../actions/types";


const initialState={
    actionKey: 0,
    stepKey: 0,
    deviceKey: 0,
    todoKey: 0,
    orderKey: 0,
    modeWork: "todoMode",
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
        case SET_ORDER_KEY:
            return{
                ...state,
                orderKey: action.orderKey
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
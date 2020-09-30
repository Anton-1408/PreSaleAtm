import { modeWork } from './../../types/modeWork';
import {
    SET_SERIAL_NUMBER_DEVICE,
    SET_MODE_WORK,
    SET_RESULT_ACTION,
    SET_ACTION_PHOTOS,
} from "../actions/types";
import {
    iAppStateReducer,
    typeAppStateReducer
} from "../../types/reduxTypes";


const initialState={
    serialNumber: '',
    modeWork: modeWork.todo,
    resultAction: undefined,
    photoAction: [],
};

export function appStateReducer(state: iAppStateReducer = initialState, action: typeAppStateReducer){
    switch(action.type){
        case SET_SERIAL_NUMBER_DEVICE:
            return{
                ...state,
                serialNumber: action.serialNumber
            };
        case SET_MODE_WORK:
            return{
                ...state,
                modeWork: action.modeWork
            };
        case SET_RESULT_ACTION:
            return{
                ...state,
                resultAction: action.resultAction
            };
        case SET_ACTION_PHOTOS:
            return{
                ...state,
                photoAction: action.photoAction
            };
        default:
            return state;
    }
};
import { modeWork } from './../../types/modeWork';
import {
    SET_SERIAL_NUMBER_DEVICE,
    SET_MODE_WORK,
} from "../actions/types";
import {
    iAppStateReducer,
    typeAppStateReducer
} from "../../types/reduxTypes";


const initialState={
    serialNumber: '',
    modeWork: modeWork.todo,
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
        default:
            return state;
    }
};
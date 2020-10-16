import { iRootReducers } from '../../types/reduxTypes';
import { createSelector } from 'reselect';

const stateActionResult = (state: iRootReducers) => state.appStateReducer.resultAction;
const stateTypeWork = (state: iRootReducers) => state.appStateReducer.modeWork;
const stateSerialNumberDevice = (state: iRootReducers) => state.appStateReducer.serialNumber;
const statePhotoAction = (state: iRootReducers) => state.appStateReducer.photoAction;

export const selectorActionResult = createSelector(
    stateActionResult,
    (actionResult: any) => {
        return actionResult;
    }
);

export const selectorSerialNumbDevice = createSelector(
    stateSerialNumberDevice,
    (serialNumb: string) => {
        return serialNumb;
    }
);

export const selectorTypeWork = createSelector(
    stateTypeWork,
    (typeWork) => {
        return typeWork;
    }
);

export const selectorPhotoAction = createSelector(
    statePhotoAction,
    (photoAction: Array<Object> | Object) => {
        return photoAction;
    }
);
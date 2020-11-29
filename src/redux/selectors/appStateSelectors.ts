import { RootReducers } from '../../types/reduxTypes';
import { FilesPhoto } from '../../types/elementType';
import { createSelector } from 'reselect';

const stateActionResult = (state: RootReducers) => state.appStateReducer.resultAction;
const stateTypeWork = (state: RootReducers) => state.appStateReducer.modeWork;
const stateSerialNumberDevice = (state: RootReducers) => state.appStateReducer.serialNumber;
const statePhotoAction = (state: RootReducers) => state.appStateReducer.photoAction;

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
  (photoAction: FilesPhoto) => {
    return photoAction;
  }
);
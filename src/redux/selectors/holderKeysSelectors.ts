import { iRootReducers } from '../../types/reduxTypes';
import { createSelector } from 'reselect';

const stateDeviceKey = (state: iRootReducers) => state.holderKeysReducer.deviceKey;
const stateActionKey = (state: iRootReducers) => state.holderKeysReducer.actionKey;
const stateStepKey = (state: iRootReducers) => state.holderKeysReducer.stepKey;
const stateOrderKey = (state: iRootReducers) => state.holderKeysReducer.orderKey;
const stateTodoKey = (state: iRootReducers) => state.holderKeysReducer.todoKey;

export const selectorOrderKey = createSelector(
    stateOrderKey,
    (orderKey: number) => {
        return orderKey;
    }
);

export const selectorStepKey = createSelector(
    stateStepKey,
    (stepKey) => {
        return stepKey;
    }
);

export const selectorDeviceKey = createSelector(
    stateDeviceKey,
    (deviceKey: number) => {
        return deviceKey;
    }
);

export const selectorActionKey = createSelector(
    stateActionKey,
    (actionKey: number) => {
        return actionKey;
    }
);

export const selectorTodoKey = createSelector(
    stateTodoKey,
    (todoKey: number) => {
        return todoKey;
    }
);
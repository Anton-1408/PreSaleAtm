import { RootReducers } from 'types/reduxTypes';
import { createSelector } from 'reselect';

const stateDeviceKey = (state: RootReducers) => state.holderKeysReducer.deviceKey;
const stateActionKey = (state: RootReducers) => state.holderKeysReducer.actionKey;
const stateStepKey = (state: RootReducers) => state.holderKeysReducer.stepKey;
const stateOrderKey = (state: RootReducers) => state.holderKeysReducer.orderKey;
const stateTodoKey = (state: RootReducers) => state.holderKeysReducer.todoKey;

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
import { createSelector } from "reselect";
import { RootReducers } from 'types/reduxTypes';

const stateIdUser = (state: RootReducers) => state.syncDataReducer.idUser;
const stateProjectsHash = (state: RootReducers) => state.syncDataReducer.projectHash;
const stateResultsHash = (state: RootReducers) => state.syncDataReducer.resultHash;
const stateFilesAction = (state: RootReducers) => state.syncDataReducer.actionFiles;
const stateCheckListResults = (state : RootReducers) => state.syncDataReducer.listResultsCheckList;

export const selectorIdUser = createSelector(
  stateIdUser,
  (idUser: string) => {
    return idUser;
  }
);

export const selectorProjectsHash = createSelector(
  stateProjectsHash,
  (projectHash: Object) => {
    return projectHash;
  }
);

export const selectorResultsHash = createSelector(
  stateResultsHash,
  (resultsHash: Object) => {
    return resultsHash;
  }
);

export const selectorFilesAction = createSelector(
  stateFilesAction,
  (filesAction: FormData) => {
    return filesAction;
  }
);

export const selectorCheckListResults = createSelector(
  stateCheckListResults,
  (checkListResults: Array<Object>) => {
    return checkListResults;
  }
);
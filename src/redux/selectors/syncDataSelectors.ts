import { createSelector } from "reselect";
import { iRootReducers } from '../../types/reduxTypes';

const stateIdUser = (state: iRootReducers) => state.syncDataReducer.idUser;
const stateProjectsHash = (state: iRootReducers) => state.syncDataReducer.projectHash;
const stateResultsHash = (state: iRootReducers) => state.syncDataReducer.resultHash;
const stateFilesAction = (state: iRootReducers) => state.syncDataReducer.actionFiles;
const stateCheckListResults = (state : iRootReducers) => state.syncDataReducer.listResultsCheckList;

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
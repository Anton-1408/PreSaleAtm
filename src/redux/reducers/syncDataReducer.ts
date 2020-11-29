import {
  SET_ID_USER,
  SET_RESULT_CHECK_LIST,
  SET_HASHCODE_PROJECTS,
  SET_SEND_FILES
} from "../actions/types";
import {
  SyncDataReducerState,
  SyncDataReducer
} from "../../types/reduxTypes";

const initialState={
  idUser: "",
  resultHash: {},
  projectHash: {},
  listResultsCheckList: [],
  actionFiles: new FormData(),
};

export function syncDataReducer(state: SyncDataReducerState = initialState, action: SyncDataReducer){
  switch(action.type){
    case SET_ID_USER:
      return{
        ...state,
        idUser: action.idUser
      };
    case SET_RESULT_CHECK_LIST:
      return{
        ...state,
        listResultsCheckList: action.listResultsCheckList
      };
    case SET_HASHCODE_PROJECTS:
      return{
        ...state,
        projectHash: action.projectHash,
        resultHash: action.resultHash,
      };
    case SET_SEND_FILES:
      return{
        ...state,
        actionFiles: action.actionFiles,
      };
    default:
      return state;
  }
};
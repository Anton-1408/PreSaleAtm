import {
    SET_ID_USER,
    SET_RESULT_CHECK_LIST,
    SET_HASHCODE_PROJECTS,
} from "../actions/types";
import {
    iSyncDataReducer, 
    typeSyncDataReducer
} from "../../types/reduxTypes";


const initialState={
    idUser: "",
    resultHash: {},
    projectHash: {},
    listResultsCheckList: {},
};

export function syncDataReducer(state: iSyncDataReducer = initialState, action: typeSyncDataReducer){
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
        default:
            return state;        
    }
};
import { combineReducers } from 'redux';
import { holderKeysReducer } from './holderKeysReducer';
import { syncDataReducer } from './syncDataReducer'
import { iRootReducers } from "../../types/reduxTypes";

export default combineReducers<iRootReducers>({
    holderKeysReducer,
    syncDataReducer,
});
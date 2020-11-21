import { combineReducers } from 'redux';
import { holderKeysReducer } from './holderKeysReducer';
import { syncDataReducer } from './syncDataReducer'
import { appStateReducer} from './appStateReducer';
import { iRootReducers } from "../../types/reduxTypes";

export default combineReducers<iRootReducers>({
  holderKeysReducer,
  syncDataReducer,
  appStateReducer
});
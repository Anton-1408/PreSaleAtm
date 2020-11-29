import { combineReducers } from 'redux';
import { holderKeysReducer } from './holderKeysReducer';
import { syncDataReducer } from './syncDataReducer'
import { appStateReducer} from './appStateReducer';
import { RootReducers } from "../../types/reduxTypes";

export default combineReducers<RootReducers>({
  holderKeysReducer,
  syncDataReducer,
  appStateReducer
});
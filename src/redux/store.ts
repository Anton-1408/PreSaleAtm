import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import rootReducer from "./reducers/rootReducer";
import { sagaWatcherFiles } from './sagas/sagaFiles';

const saga = createSagaMiddleware();

export default createStore(rootReducer, applyMiddleware(thunk, saga));

saga.run(sagaWatcherFiles);
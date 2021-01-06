import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist'
import { composeWithDevTools } from 'redux-devtools-extension';
import AsyncStorage from '@react-native-async-storage/async-storage';

import rootReducer from "./reducers/rootReducer";
import { sagaWatcherFiles } from './sagas/sagaFiles';

const saga = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

composeWithDevTools(applyMiddleware(thunk, saga));

export const store = createStore(
  persistedReducer,
  compose(
    applyMiddleware(thunk, saga),
  ),
);

export const persistor = persistStore(store);

saga.run(sagaWatcherFiles);
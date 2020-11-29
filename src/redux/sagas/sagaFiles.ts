import { takeEvery, put, call, select } from 'redux-saga/effects';
import { SET_SEND_FILES } from 'redux/actions/types';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { SagaIterator } from '@redux-saga/core';

import { urlServer } from 'lib/urlServer'
import { RootReducers } from 'types/reduxTypes';
import { selectorFilesAction } from 'redux/selectors/syncDataSelectors';

export function* sagaWatcherFiles(): SagaIterator{
  yield takeEvery(SET_SEND_FILES, sagaWorker)
};

function *sagaWorker(): SagaIterator{
  try{
    yield call(sendFiles);
  }
  catch(err){ }
}

function* sendFiles(): SagaIterator{
  const state: RootReducers = yield select();
  const params: FormData = selectorFilesAction(state);
  return axios.post(urlServer + 'mobile/api001.php', params)
  .then((res: AxiosResponse) => { })
  .catch((err: AxiosError) => { })
};
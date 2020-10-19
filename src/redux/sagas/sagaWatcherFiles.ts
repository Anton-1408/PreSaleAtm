import { takeEvery, put, call, select } from 'redux-saga/effects';
import { SET_SEND_FILES } from '../actions/types';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { SagaIterator } from '@redux-saga/core';
import { urlServer } from '../../lib/urlServer'
import { iRootReducers } from '../../types/reduxTypes';

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
    const state: iRootReducers = yield select();
    const params: FormData = state.syncDataReducer.actionFiles;
    return axios.post(urlServer + 'mobile/api001.php', params)
    .then((res: AxiosResponse) => { })
    .catch((err: AxiosError) => { })
};
import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import SQLite from 'react-native-sqlite-storage';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { typeDbParams } from '../../types/dbTypes';
import { dbHelper } from '../../lib/dbHelper';
import { iRootReducers } from '../../types/reduxTypes';
import { setOrdersToDB } from '../../lib/setOrdersToDB';
import { urlServer } from '../../lib/urlServer'
import {
  selectorIdUser,
  selectorCheckListResults,
  selectorResultsHash,
  selectorProjectsHash
} from '../selectors/syncDataSelectors';
import {
  SET_ACTION_KEY,
  SET_DEVICE_KEY,
  SET_HASHCODE_PROJECTS,
  SET_ORDER_KEY,
  SET_MODE_WORK,
  SET_ID_USER,
  SET_RESULT_CHECK_LIST,
  SET_TODO_KEY,
  SET_STEP_KEY,
  SET_SERIAL_NUMBER_DEVICE,
  SET_RESULT_ACTION,
  SET_ACTION_PHOTOS,
  SET_SEND_FILES,
} from "./types";
import {
  iOrdertKey,
  iTodoKey,
  iDeviceKey,
  iStepKey,
  iActionKey,
  iModeWork,
  iUserId,
  iResultCheckList,
  iHashcodeProjects,
  iSetSerialNumberDevice,
  iSetResultAction,
  iSetPhotosAction,
  iSetSendFiles
} from "../../types/reduxTypes";

export function setIdUser(): ThunkAction<Promise<void>, iRootReducers, unknown, Action<Object>>{
  return async (dispatch) => {
    return new Promise((resolve, reject) => {
      const query: string = 'select sid from settings';
      const params: typeDbParams = [];
      const callBack: SQLite.StatementCallback = (transaction, result) => {
        const len: number = result.rows.length;
        if(len){
          const listRow: SQLite.ResultSetRowList = result.rows;
          dispatch(setValueIdUser(listRow.item(0).sid));
        }
        resolve();
      };
      dbHelper(query, params, callBack);
    });
  };
};

export function setActionFiles(): ThunkAction<Promise<void>, iRootReducers, unknown, Action<Object>>{
  return async (dispatch, getState) => {
  return new Promise((resolve, reject) => {
    const query: string = 'select name, type, id_action, id_device, uri from photos';
    const params: typeDbParams = [];
    const callBack: SQLite.StatementCallback = (transaction, result) => {
      const len: number = result.rows.length;
      const listRow: SQLite.ResultSetRowList = result.rows;
      const sid = getState().syncDataReducer.idUser;
      const listFiles: Array<Object> = [];
      const listData: FormData = new FormData();
      for(let i = 0; i < len; i++){
        const row = listRow.item(i);
        const item: Object = {
          name: row.name,
          type: row.type,
          idAction: row.id_action,
          idDevice: row.id_device,
          uri: row.uri,
        };
        listFiles.push(item);
      }
      listData.append('sid', sid);
      listData.append('action', 'uploadProjectsFile');
      listData.append("files", listFiles);
      dispatch(setValueFiles(listData));
      resolve();
    }
    dbHelper(query, params, callBack);
  });
  }
};

export function setResultChecklist(): ThunkAction<Promise<void>, iRootReducers, unknown, Action<Object>>{
  return async (dispatch) => {
    return new Promise((resolve, reject) => {
      const query: string = `select r.id, r.id_device, r.id_action, r.value, r.date, r.fio, (select max(stoped)
                              from results where id_device = r.id_device) as stoped from results r where r.value is not null`;
      const params: typeDbParams = [];
      const callBack: SQLite.StatementCallback = (transaction, result) => {
        const len: number = result.rows.length;
        const results: Array<Object> = [];
        const listRows: SQLite.ResultSetRowList = result.rows;
        for(let i = 0; i < len; i++){
          const row = listRows.item(i);
          const resParams: Object = {
            idRecord: row.id,
            idDevice: row.id_device,
            idAction: row.id_action,
            dt: row.date,
            value: row.value,
            stoped: row.stoped
          };
          results.push(resParams);
        }
        dispatch(setValueResults(results));
        resolve()
      };
      dbHelper(query, params, callBack);
    });
  };
};

export function setHashCodeProjects(): ThunkAction<Promise<void>, iRootReducers, unknown, Action<Object>>{
  return async (dispatch) => {
    return new Promise((resolve, reject) => {
      const query: string = 'select id, order_hash, result_hash from orders';
      const params: typeDbParams = [];
      const callBack: SQLite.StatementCallback = (transaction, result) =>{
        const len: number = result.rows.length;
        const listRow: SQLite.ResultSetRowList = result.rows;
        const projectHash: any = {}
        const resultHash: any = {};
        for(let i = 0; i < len; i++){
          const row = listRow.item(i);
          projectHash[row.id] = row.order_hash;
          resultHash[row.id] = row.result_hash;
        }
        dispatch(setValueHashs(projectHash, resultHash));
        resolve();
      };
      dbHelper(query, params, callBack);
    })
  };
};

export function setOrders(): ThunkAction<Promise<void>, iRootReducers, unknown, Action<Object>>{
  return async (dispatch, getState) => {
    return await axios.post(urlServer + 'mobile/api001.php', {
      sid: selectorIdUser(getState()),
      action: 'syncProjects',
      results: selectorCheckListResults(getState()),
      projectHash: selectorProjectsHash(getState()),
      resultHashs: selectorResultsHash(getState()),
    })
    .then((res: AxiosResponse) => {
      if('projects' in res.data){
        const orders: Array<JSON> = res.data.projects;
        setOrdersToDB(orders);
      }
    })
    .catch((err: AxiosError) => {

    });
  };
};

function setValueIdUser(value: string): iUserId{
  return{
    type: SET_ID_USER,
    idUser: value
  }
};

function setValueFiles(value: FormData): iSetSendFiles{
  return{
    type: SET_SEND_FILES,
    actionFiles: value,
  }
};

function setValueResults(value: Array<Object>): iResultCheckList{
  return{
    type: SET_RESULT_CHECK_LIST,
    listResultsCheckList: value,
  }
};

function setValueHashs(projectHash: Array<Object>, resultHash: Array<Object>): iHashcodeProjects{
  return{
    type: SET_HASHCODE_PROJECTS,
    projectHash: projectHash,
    resultHash: resultHash,
  }
};

export function setModeWork(value: string): iModeWork{
  return {
    type: SET_MODE_WORK,
    modeWork: value
  }
};

export function setActionKey(value: number): iActionKey{
  return{
    type: SET_ACTION_KEY,
    actionKey: value
  };
};

export function setOrderKey(value: number): iOrdertKey{
  return{
    type: SET_ORDER_KEY,
    orderKey: value
  };
};

export function setTodoKey(value: number): iTodoKey{
  return{
    type: SET_TODO_KEY,
    todoKey: value
  };
};

export function setDeviceKey(value: number): iDeviceKey{
  return{
    type: SET_DEVICE_KEY,
    deviceKey: value
  };
};

export function setStepKey(value: number): iStepKey{
  return{
    type: SET_STEP_KEY,
    stepKey: value
  };
};

export function setSerialNumberDevice(value: string): iSetSerialNumberDevice{
  return{
    type: SET_SERIAL_NUMBER_DEVICE,
    serialNumber: value,
  };
}

export function setResultAction(value: any): iSetResultAction{
  return{
    type: SET_RESULT_ACTION,
    resultAction: value
  };
};

export function setPhotosAction(value: Array<Object> | Object): iSetPhotosAction{
  return{
    type: SET_ACTION_PHOTOS,
    photoAction: value,
  }
}
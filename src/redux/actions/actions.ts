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
    iSetPhotosAction
} from "../../types/reduxTypes";


export function setIdUser(): ThunkAction<Promise<string>, iRootReducers, unknown, Action<Object>>{
    return async (dispatch) => {
        return new Promise((resolve, reject) => {
            const query: string = 'select sid from settings';
            const params: typeDbParams = [];
            const callBack: SQLite.StatementCallback = (transaction, result) => {
                const len: number = result.rows.length;
                if(len){
                    const listRow: SQLite.ResultSetRowList = result.rows;
                    const idIser: iUserId = {
                        type: SET_ID_USER,
                        idUser: listRow.item(0).sid
                    };
                    dispatch(idIser);
                }
                resolve("idUserDone");
            };
            dbHelper(query, params, callBack);
        });
    };
};

export function setResultChecklist(): ThunkAction<Promise<string>, iRootReducers, unknown, Action<Object>>{
    return async (dispatch) => {
        return new Promise((resolve, reject) => {
            const query: string = `select r.id, r.id_device, r.id_action, r.value, r.date, r.fio, 
                                        (select max(stoped) from results where id_device = r.id_device) as stoped from results r
                                    where r.value is not null`;
            const params: typeDbParams = [];
            const callBack: SQLite.StatementCallback = (transaction, result) => {
                const len: number = result.rows.length;
                const results: Array<Object> = [];
                const listRows: SQLite.ResultSetRowList = result.rows;
                for(let i = 0; i < len; i++){
                    const row: any = listRows.item(i);
                    const resParams: Object = {
                        idRecord: row.id, idDevice: row.id_device,
                        idAction: row.id_action, dt: row.date,
                        value: row.value, stoped: row.stoped
                    };
                    results.push(resParams);
                }

                const resultValue: iResultCheckList={
                    type: SET_RESULT_CHECK_LIST,
                    listResultsCheckList: results,
                };

                dispatch(resultValue);
                resolve("resultsDone")
            };
            dbHelper(query, params, callBack);
        });
    };
};

export function setHashCodeProjects(): ThunkAction<Promise<string>, iRootReducers, unknown, Action<Object>>{
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
                    const row: any = listRow.item(i);
                    projectHash[row.id] = row.order_hash;
                    resultHash[row.id] = row.result_hash;
                }

                const value: iHashcodeProjects =  {
                    type: SET_HASHCODE_PROJECTS,
                    projectHash: projectHash,
                    resultHash: resultHash,
                };

                dispatch(value);
                resolve("hashCodesDone");
            };
            dbHelper(query, params, callBack);
        })
    };
};

export function setOrders(): ThunkAction<Promise<any>, iRootReducers, unknown, Action<Object>>{
    return async (dispatch, getState) => {
        return await axios.post(urlServer + 'mobile/api001.php', {
            sid: getState().syncDataReducer.idUser,
            action: 'syncProjects',
            results: getState().syncDataReducer.listResultsCheckList,
            projectHash: getState().syncDataReducer.projectHash,
            resultHashs: getState().syncDataReducer.resultHash
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
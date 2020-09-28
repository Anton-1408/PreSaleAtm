import { typeDbParams } from '../types/dbTypes';
import SQLite from 'react-native-sqlite-storage';
import { dbHelper } from './dbHelper';
import React from 'react';
import { typeAction } from '../types/typeAction';

interface iContext{
    files: Array<Object>,
    extraParams: any,
};

export const ActionContext = React.createContext<iContext>({
    files: [],
    extraParams: [],
});

export const getExtraFiles = (idAction: number, setExtraFiles: Function) => {
    const query: string = 'SELECT id, path, name from extra_files where id_action = ?';
    const params: typeDbParams = [idAction];
    const callBack: SQLite.StatementCallback = (transaction, result) => {
        const len: number = result.rows.length;
        const rowList: SQLite.ResultSetRowList = result.rows;
        const listFiles: Array<Object> = [];
        for(let i = 0; i< len; i++){
            const row: any = rowList.item(i);
            listFiles.push(row);
        }
        setExtraFiles(listFiles)
    };
    dbHelper(query, params, callBack);
};

export const getExtraParams = (idAction: number, setExtraParams: Function) => {
    const query: string = 'SELECT id, extra_params from extra_params where id_action = ?';
    const params: typeDbParams = [idAction];
    const callBack: SQLite.StatementCallback = (transaction, result) => {
        const len: number = result.rows.length;
        const rowList: SQLite.ResultSetRowList = result.rows;
        const listFiles: Array<Object> = [];
        for(let i = 0; i< len; i++){
            const row: any = rowList.item(i);
            const item: any = {id: row.id, value: false, title: row.extra_params}
            listFiles.push(item);
        }
        setExtraParams(listFiles)
    };
    dbHelper(query, params, callBack);
};

export const getResult = (idAction: number, idDevice: number, type: string, setResult: Function)=> {
    const query: string = 'SELECT value from results WHERE id_action = ? and id_device = ?';
    const params: typeDbParams = [idAction, idDevice];
    const callBack: SQLite.StatementCallback = (transaction, result) => {
        const len: number = result.rows.length;
        const rowList: SQLite.ResultSetRowList = result.rows;
        if(len > 0){
            const row: any = rowList.item(0);
            let result: any = null;

            switch(type){
                case typeAction.checkbox:
                        result = Boolean(row.value);
                    break;
                case typeAction.numberInput && typeAction.textInput:
                        result = row.value;
                    break;
                case typeAction.checkboxGroup:
                        result = JSON.parse(row.value);
                    break
                case typeAction.radioGroup:
                        result = row.value;
                    break;
            };
            setResult(result);
        }
    };
    dbHelper(query, params, callBack);
};

export const initialState = (type: string) => {
    let state: any;
    switch(type){
        case typeAction.checkbox:
                state = false;
            break;
        case typeAction.numberInput || typeAction.textInput:
                state = '';
            break;
        case typeAction.checkboxGroup:
                state = [];
            break
        case typeAction.radioGroup:
                state=''
            break;
    };
    return state;
};

export const saveResult = (idAction: number, idDevice: number, value: any) => {
    const query: string = 'replace into results (id_action, id_device, value) VALUES (?, ?, ?)';
    const params: typeDbParams = [idAction, idDevice, value];
    const callBack: SQLite.StatementCallback = (transaction, result) => {
        console.warn('csc');
    };
    dbHelper(query, params, callBack);
};

// const nowDate = () => {
//     const date: Date = new Date();
//     let year = now.getFullYear();
//     let month = now.getMonth() + 1;
//     let day = now.getDate();

//     month = month < 10 ? "0" + month : month;
//     day = day < 10 ? "0" + day : day;
//     const date = year + "-" + month + "-" + day;
//     return '';
// };

import { typeDbParams } from '../types/dbTypes';
import SQLite from 'react-native-sqlite-storage';
import { dbHelper } from './dbHelper';
import React from 'react';
import { typeAction } from '../types/typeAction';

interface iContext{
    files: Array<Object>,
    extraParams: any,
    //resultAction: any,
};

export const ActionContext = React.createContext<iContext>({
    files: [],
    extraParams: [],
    //resultAction: undefined,
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
                        result = row.value ? true : false;
                    break;
                case typeAction.numberInput || typeAction.textInput:
                        result = row.value;
                    break;
                case typeAction.checkboxGroup:
                        result = JSON.parse(row.value);
                    break
            };
            setResult(result);
        }
    };
    dbHelper(query, params, callBack);
};
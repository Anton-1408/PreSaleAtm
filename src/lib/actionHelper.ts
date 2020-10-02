import React from 'react';
import { typeDbParams } from '../types/dbTypes';
import SQLite from 'react-native-sqlite-storage';
import { dbHelper } from './dbHelper';
import { typeAction } from '../types/typeAction';

interface iContext{
    files: Array<Object>,
    extraParams: any,
};

export const ActionContext = React.createContext<iContext>({
    files: [],
    extraParams: [],
});

export const getExtraFiles = (idAction: number, setExtraFiles: Function): void => {
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

export const getExtraParams = (idAction: number, setExtraParams: Function): void => {
    const query: string = 'SELECT id, extra_params from extra_params where id_action = ?';
    const params: typeDbParams = [idAction];
    const callBack: SQLite.StatementCallback = (transaction, result) => {
        const len: number = result.rows.length;
        const rowList: SQLite.ResultSetRowList = result.rows;
        const listFiles: Array<Object> = [];
        for(let i = 0; i < len; i++){
            const row: any = rowList.item(i);
            const item: any = {id: row.id, value: false, title: row.extra_params}
            listFiles.push(item);
        }
        setExtraParams(listFiles)
    };
    dbHelper(query, params, callBack);
};

export const getResult = (idAction: number, idDevice: number, type: string, setResult: Function): void => {
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
                        result = row.value == 1 ? true : false;
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

export const initialState = (type: string): any => {
    let state: any;
    switch(type){
        case typeAction.checkbox:
                state = false;
            break;
        case typeAction.numberInput && typeAction.textInput:
                state = '';
            break;
        case typeAction.checkboxGroup:
                state = [];
            break
        case typeAction.radioGroup:
                state='';
            break;
        case typeAction.photo:
                state = [];
            break;
    };
    return state;
};

export const saveResult = (idAction: number, idDevice: number, value: any): void => {
    const query: string = 'replace into results (id_action, id_device, date, value) VALUES (?, ?, ?, ?)';
    const params: typeDbParams = [idAction, idDevice, nowDate(), value];
    const callBack: SQLite.StatementCallback = (transaction, result) => { };
    dbHelper(query, params, callBack);
};

export const savePhotoAction = (idAction: number, idDevice: number, files: Array<Object>): void => {
    const query: string = 'replace into photos (id_action, id_device, name, uri, type) VALUES (?,?,?,?,?)';
    const callBack : SQLite.StatementCallback = (transaction, result) => { };
    files.forEach((item: any) => {
        const params: typeDbParams = [idAction, idDevice, item.name, item.uri, item.type];
        dbHelper(query, params, callBack);
    });
};

const nowDate = (): string => {
    const dateTime: Date = new Date();
    let year: any = dateTime.getFullYear();
    let month: any = dateTime.getMonth() + 1;
    let day: any = dateTime.getDate();

    month = month < 10 ? "0" + month : month;
    day = day < 10 ? "0" + day : day;
    const date = year + "-" + month + "-" + day;

    let hour: any = dateTime.getHours();
    let minut: any = dateTime.getMinutes();

    minut = minut < 10 ? "0" + minut : minut;
    hour = hour < 10 ? "0" + hour : hour;
    const time = hour + ":" + minut;

    return date + ' ' + time;
};

export const setStopedDevice = (idDevice: number, stopped: number): void => {
    const query = `update results set stoped = ? where id_device = ?`
    const params: typeDbParams = [stopped, idDevice];
    const callBack: SQLite.StatementCallback = (transaction, result) => { };
    dbHelper(query, params, callBack);
};

export const deletePhoto = (idAction: number, idDevice: number): void => {
    const query: string = 'delete from photos where id_action = ? and id_device = ?';
    const params: typeDbParams = [idAction, idDevice];
    const callBack: SQLite.StatementCallback = (transaction, result) => { };
    dbHelper(query, params, callBack);
};

export const getPhoto = (idAction: number, idDevice: number, setResult: Function): void => {
    const query: string = 'select * from photos where id_action = ? and id_device = ?';
    const params: typeDbParams = [idAction, idDevice];
    const callBack: SQLite.StatementCallback = (transaction, result) => {
        const len: number = result.rows.length;
        const rowList: SQLite.ResultSetRowList = result.rows;
        const listPhotos: Array<Object> = [];

        for(let i = 0; i < len; i++){
            const row: any = rowList.item(i);
            listPhotos.push(row);
        }
        setResult(listPhotos);
    };
    dbHelper(query, params, callBack);
};
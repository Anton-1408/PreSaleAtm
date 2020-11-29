import React from 'react';
import SQLite from 'react-native-sqlite-storage';

import { ExtraFile, ExtraParam } from '../types/elementType';
import { ActionResult, ElementGalleryPhoto } from '../types/elementType';
import { typeDbParams } from '../types/dbTypes';
import { dbHelper } from './dbHelper';
import { typeAction } from '../types/typeAction';

export const ActionContext = React.createContext<ContextParams>({
  files: [],
  extraParams: [],
});

export const getExtraFiles = (idAction: number, setExtraFiles: Function): void => {
  const query: string = 'SELECT id, path, name from extra_files where id_action = ?';
  const params: typeDbParams = [idAction];
  const callBack: SQLite.StatementCallback = (transaction, result) => {
    const len: number = result.rows.length;
    const rowList: SQLite.ResultSetRowList = result.rows;
    const listFiles: Array<ExtraFile> = [];
    for(let i = 0; i< len; i++){
      const row = rowList.item(i);
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
    const listFiles: Array<ExtraParam> = [];
    for(let i = 0; i < len; i++){
      const row = rowList.item(i);
      const item: ExtraParam = {
        id: row.id,
        value: false,
        title: row.extra_params
      }
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
      const row = rowList.item(0);
      let result: ActionResult;
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
        case typeAction.noAction:
            result = row.value;
          break;
      };
      setResult(result);
    }
  };
  dbHelper(query, params, callBack);
};

export const initialState = (type: string): ActionResult => {
  let state: ActionResult;
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
    case typeAction.noAction:
        state = 1;
      break;
  };
  return state;
};

export const saveResult = (idAction: number, idDevice: number, result: Value): void => {
  const query: string = `replace into results (id_action, id_device, date, value) VALUES (?, ?, ?, ?)`;
  const params: typeDbParams = [idAction, idDevice, nowDate(), result];
  const callBack: SQLite.StatementCallback = (transaction, result) => { };
  dbHelper(query, params, callBack);
};

export const savePhotoAction = (idAction: number, idDevice: number, files: Array<ElementGalleryPhoto>): void => {
  const query: string = `replace into photos (id_action, id_device, name, uri, type) VALUES (?,?,?,?,?)`;
  const callBack : SQLite.StatementCallback = (transaction, result) => { };
  files.forEach((file: ElementGalleryPhoto) => {
    const params: typeDbParams = [idAction, idDevice, file.name!, file.uri, file.type];
    dbHelper(query, params, callBack);
  });
};

const nowDate = (): string => {
  const dateTime: Date = new Date();
  let year: number = dateTime.getFullYear();
  let month: DataTime = dateTime.getMonth() + 1;
  let day: DataTime = dateTime.getDate();
  let hour: DataTime = dateTime.getHours();
  let minut: DataTime = dateTime.getMinutes();

  month = month < 10 ? "0" + month : month;
  day = day < 10 ? "0" + day : day;
  minut = minut < 10 ? "0" + minut : minut;
  hour = hour < 10 ? "0" + hour : hour;

  const time: string = hour + ":" + minut;
  const date: string = year + "-" + month + "-" + day;
  return date + ' ' + time;
};

export const setReplayDevice = (idDevice: number): void => {
  const query = `update results set stoped = ? where id_device = ?`
  const params: typeDbParams = [0, idDevice];
  const callBack: SQLite.StatementCallback = (transaction, result) => { };
  dbHelper(query, params, callBack);
};

export const setStopDevice = (idAction: number, idDevice: number): void => {
  const query = `replace into results (id_action, id_device, date, stoped) VALUES (?,?,?,?)`;
  const params: typeDbParams = [idAction, idDevice, nowDate(), 1];
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
  const query: string = 'select name, uri from photos where id_action = ? and id_device = ?';
  const params: typeDbParams = [idAction, idDevice];
  const callBack: SQLite.StatementCallback = (transaction, result) => {
    const len: number = result.rows.length;
    const rowList: SQLite.ResultSetRowList = result.rows;
    const listPhotos: Array<Photo> = [];
    for(let i = 0; i < len; i++){
      const row = rowList.item(i);
      listPhotos.push(row);
    }
    setResult(listPhotos);
  };
  dbHelper(query, params, callBack);
};

interface Photo{
  name: string,
  uri: string
};

type DataTime = string | number;

export interface ContextParams{
  files: Array<ExtraFile>,
  extraParams: Array<ExtraParam>,
};

type Value = string | number;
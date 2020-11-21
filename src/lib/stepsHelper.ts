import SQLite from 'react-native-sqlite-storage';
import { typeDbParams } from '../types/dbTypes';
import { dbHelper } from './dbHelper';
import { modeWork } from '../types/modeWork';

export const setQuery = (typeWork: string): string => {
  let query = '';
  if(typeWork === modeWork.todo){
    query = `SELECT s.id, s.name, s.comment, s.is_required, s.is_important,
              count(a.id) * (SELECT count(id) from devices where id_order = ?) total, sum(r.result) result from steps s
                LEFT JOIN actions a
                  on a.id_step = s.id
                LEFT JOIN (
                  SELECT r.id_action, count(r.id) result from results r where r.value is not null
                    GROUP by r.id_action
                ) r
                  on r.id_action = a.id
                WHERE s.id_todo = ?
              GROUP by s.id`
  }
  else{
    query = `SELECT s.id, s.name, s.comment, s.is_required, s.is_important, count(a.id) total,
                sum(r.result) result from steps s
              LEFT JOIN actions a
                on a.id_step = s.id
              LEFT JOIN (
                SELECT r.id_action, count(r.id) result from results r where r.id_device = ? and r.value is not null
                  GROUP by r.id_action
              ) r
                on r.id_action = a.id
              WHERE s.id_todo = ?
            GROUP by s.id`
    }
    return query;
};

export const setParams = (typeWork: string, idOrder: number, idDevice: number, idTodo: number): typeDbParams => {
  const params: typeDbParams = [];
  if(typeWork === modeWork.todo){
    params.push(idOrder);
    params.push(idTodo);
  }
  else{
    params.push(idDevice);
    params.push(idTodo);
  }
  return params;
};

export const getSteps= (query: string, params: typeDbParams, setSteps: Function): void => {
  const callBack: SQLite.StatementCallback = (transaction, result) => {
    const len: number = result.rows.length;
    const rowList: SQLite.ResultSetRowList = result.rows;
    const listSteps: Array<Object> = [];
    for(let i = 0; i < len; i++){
      const row: any = rowList.item(i);
      const item: Object = {
        id: row.id,
        name: row.name,
        comment: row.comment,
        isRequired: row.is_required,
        isImportant: row.is_important,
        isDone: row.total === row.result,
      };
      listSteps.push(item);
    }
    setSteps(listSteps);
  };
  dbHelper(query, params, callBack);
};
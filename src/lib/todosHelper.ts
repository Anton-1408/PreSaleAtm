import { typeDbParams } from "../types/dbTypes";
import SQLite from 'react-native-sqlite-storage';

import { ElementTodo } from 'types/elementType';
import { filterByInWork, filterByDone, filterByAll, calculationPercent } from './filterListDataPage';
import { dbHelper } from './dbHelper';
import { modeWork } from 'types/modeWork';

export const setQuery = (typeWork: string): string => {
  let query = '';
  if(typeWork === modeWork.todo){
    query = `SELECT t.id, t.name, t.comment, count(ac.action) * d.device total, sum(ac.res) result from todos t
              LEFT JOIN (
                SELECT s.id_todo, a.id action, count(r.id) res from actions a
                  left join results r
                    on r.id_action = a.id
                    and r.value is not null
                  LEFT JOIN steps s
                    on s.id = a.id_step
                GROUP by a.id
              ) ac
                on ac.id_todo = t.id
              left JOIN (
                SELECT id_order, count(id) device from devices GROUP by id_order
              ) d
                on d.id_order = t.id_order
              WHERE t.id_order = ?
            GROUP by t.id`
  }
  else{
    query = `SELECT t.id, t.name, t.comment, count(ac.action) total, sum(ac.res) result from todos t
              LEFT JOIN (
                SELECT s.id_todo, a.id action, count(r.id) res from actions a
                  left join results r
                    on r.id_action = a.id
                    and r.id_device = ?
                    and r.value is not null
                  LEFT JOIN steps s
                    on s.id = a.id_step
                GROUP by a.id
              ) ac
                on ac.id_todo = t.id
              WHERE t.id_order = ?
            GROUP by t.id`
  }
  return query;
};

export const setParams = (typeWork: string, idOrder: number, idDevice: number): typeDbParams => {
  const params: typeDbParams = [];
  if(typeWork === modeWork.todo){
    params.push(idOrder);
  }
  else{
    params.push(idDevice);
    params.push(idOrder);
  }
  return params;
};

export const getTodos = (query: string, params: typeDbParams, setTodos: Function, namePage: string): void => {
  const callBack: SQLite.StatementCallback = (transaction, result) => {
    const len: number = result.rows.length;
    const listRow: SQLite.ResultSetRowList = result.rows;
    const listTodos: Array<ElementTodo> = [];
    for(let i = 0; i < len; i++){
      const row = listRow.item(i);
      const item: ElementTodo = {
        id: row.id,
        name: row.name,
        comment: row.comment,
        percent: calculationPercent(row.total, row.result),
      };
      listTodos.push(item);
    }
    setTodos(todosFilter(listTodos, namePage))
  };
  dbHelper(query, params, callBack);
};

const todosFilter = (listTodo: Array<ElementTodo>, namePage: string): Array<Object> => {
  switch(namePage){
    case 'TodoAll':
      return filterByAll(listTodo);
    case 'TodoInWork':
      return filterByInWork(listTodo);
    case 'TodoDone':
      return filterByDone(listTodo);
    default:
      return [];
  }
};
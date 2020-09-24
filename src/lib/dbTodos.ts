import { typeDbParams } from "../types/dbTypes";
import SQLite from 'react-native-sqlite-storage';
import { filterByInWork, filterByDone, filterByAll, calculationPercent } from './filterListDataPage';
import { dbHelper } from './dbHelper';

export const getTodos = (idOrder: number, useTodos: Function, namePage: string) => {
    const query = `SELECT t.id, t.name, t.comment, count(ac.action) * d.device total, sum(ac.res) result from todos t
                        LEFT JOIN (
                            SELECT s.id_todo, a.id action, count(r.id) res from actions a
                                left join results r
                                    on r.id_action = a.id
                                LEFT JOIN steps s
                                    on s.id = a.id_step
                            GROUP by a.id
                        ) ac
                            on ac.id_todo = t.id
                        left JOIN (
                            SELECT id_order, count(id) device from devices
                            GROUP by id_order
                        ) d
                            on d.id_order = t.id_order
                        WHERE t.id_order = ?
                    GROUP by t.id`;
    const params: typeDbParams = [idOrder];
    const callBack: SQLite.StatementCallback = (transaction, result) => {
        const len: number = result.rows.length;
        const listRow: SQLite.ResultSetRowList = result.rows;
        const listTodos: Array<Object> = [];
        for(let i = 0; i < len; i++){
            const row: any = listRow.item(i);
            const item: any = {
                id: row.id,
                name: row.name,
                comment: row.comment,
                percent: calculationPercent(row.total, row.result),
            };
            listTodos.push(item);
        }
        useTodos(todosFilter(listTodos, namePage))
    };
    dbHelper(query, params, callBack);
};

const todosFilter = (listOrder: Array<Object>, namePage: string): Array<Object> => {
    switch(namePage){
        case 'TodoAll':
            return filterByAll(listOrder);
        case 'TodoInWork':
            return filterByInWork(listOrder);
        case 'TodoDone':
            return filterByDone(listOrder);
        default:
            return [];
    }
};
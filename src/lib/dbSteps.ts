import { typeDbParams } from './../types/dbTypes';
import SQLite from 'react-native-sqlite-storage';
import { dbHelper } from './dbHelper';

export const getSteps = (idOrder: number, idTodo: number) => {
    const query = `SELECT s.id, count(a.id) * (SELECT count(id) from devices where id_order = ?) total,
                    sum(r.result) result from steps s
                        LEFT JOIN actions a
                            on a.id_step = s.id
                        LEFT JOIN (
                            SELECT r.id_action, count(r.id) result from results r
                                GROUP by r.id_action
                        ) r
                            on r.id_action = a.id
                    WHERE s.id_todo = ?
                    GROUP by s.id`;
    const params: typeDbParams = [idOrder, idTodo];
    const callBack: SQLite.StatementCallback = (transaction, result) => {
        const len: number = result.rows.length;
        const rowList: SQLite.ResultSetRowList = result.rows;
        for(let i = 0; i < len; i++){

        }
    };
    dbHelper(query, params, callBack);
};
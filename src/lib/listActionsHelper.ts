import { typeDbParams } from "../types/dbTypes";
import SQLite from 'react-native-sqlite-storage';
import { dbHelper } from './dbHelper';

export const getListActions = (idDevice: number, idStep: number, setListActions: Function): void => {
    const query: string = `select a.id, a.name, a.comment, a.type, r.fio, r.date, s.stoped,
                                CASE WHEN r.id IS NOT NULL THEN 1 ELSE 0 END AS isDone from actions a
                                left JOIN results r
                                    on r.id_action = a.id
                                    and r.id_device = ?
                                left join (
                                    select id_device, max(stoped) stoped from results
                                        GROUP by id_device
                                ) s
                                    on s.id_device = ?
                                where a.id_step = ?
                            GROUP by a.id;`;
    const params: typeDbParams = [idDevice, idDevice, idStep];
    const callBack: SQLite.StatementCallback = (transaction, results) => {
        const len: number = results.rows.length;
        const rowList: SQLite.ResultSetRowList = results.rows;
        const listActions: Array<Object> = [];
        for(let i = 0; i < len; i++){
            const row: any = rowList.item(i);
            listActions.push(row);
        };
        setListActions(listActions);
    };
    dbHelper(query,params, callBack);
};
import { typeDbParams } from '../types/dbTypes';
import SQLite from 'react-native-sqlite-storage';
import { dbHelper } from './dbHelper';
import { filterByInWork, filterByDone, filterByAll } from './filterListDataPage';

export const getDevices = (idOrder: number, namePage: string) => {
    const query : string = `select d.id, d.model, d.serial_number, count(r.id) result, act.actions, max(r.stoped) stoped from devices d
                                LEFT join results r
                                    on r.id_device = d.id
                                LEFT join (
                                    SELECT t.id, t.id_order, sum(ac.total) actions  from todos t
                                        LEFT JOIN (
                                            SELECT s.id_todo, count(a.id) total  from steps s
                                                LEFT JOIN actions a
                                                on s.id = a.id_step
                                            GROUP by s.id_todo
                                        ) ac
                                        on ac.id_todo = t.id
                                    GROUP by t.id_order
                                ) act
                                    on act.id_order = d.id_order
                            where d.id_order = ?
                            GROUP by d.id`;
    const params: typeDbParams = [idOrder];
    const callBack: SQLite.StatementCallback = (transaction, results) => {
        const len: number = results.rows.length;
        const listRow: SQLite.ResultSetRowList = results.rows;
        const deviceList: Array<Object> = [];
        for(let i = 0; i < len; i++){
            const row: any = listRow.item(i);
        };
    };
    dbHelper(query, params, callBack);
};

const deviceFilter = (listOrder: Array<Object>, namePage: string): Array<Object> => {
    switch(namePage){
        case 'DevicesDone':
            return filterByDone(listOrder);
        case 'DevicesInWork':
            return filterByInWork(listOrder);
        case 'DevicesStop':
            return [];
        default:
            return [];
    }
};
import { typeDbParams } from '../types/dbTypes';
import SQLite from 'react-native-sqlite-storage';
import { dbHelper } from './dbHelper';
import { filterByInWork, filterByDone, filterByAll } from './filterListDataPage';

export const getOrders = (setOrder: Function, namePage: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        const query: string = `select o.id, o.name, o.comment, a.actions * d.device total, a.result  from orders o
                                    LEFT JOIN todos t
                                        on t.id_order = o.id
                                    LEFT JOIN (
                                        SELECT count(a.id) 'actions', s.id_todo, done.result from steps s
                                            LEFT JOIN actions a
                                                on a.id_step = s.id
                                            LEFT JOIN ( 
                                                select count(r.id) result, ac.id_step from actions ac 
                                                    LEFT JOIN results r
                                                        on r.id_action = ac.id 
                                            ) done
                                                on done.id_step = s.id
                                    ) a	
                                        on a.id_todo = t.id
                                    LEFT JOIN (
                                        SELECT id_order, count(id) device from devices GROUP by id_order
                                    ) d	
                                        on d.id_order = o.id
                                GROUP by o.id`;
        const params: typeDbParams = [];
        const callBack: SQLite.StatementCallback = (transaction, result) => {
            type typeRow = {id: number, name: string, percent: number, comment: string};
            const len: number = result.rows.length;
            const rowList: SQLite.ResultSetRowList = result.rows;
            const listOrder: Array<Object> = [];

            for(let i = 0; i < len; i++){
                const row: any = rowList.item(i);
                const percent = row.total ? (row.result/row.total) * 100 : 0;
                const item: typeRow = {id: row.id, name: row.name, comment: row.comment, percent: ~~percent};
                listOrder.push(item);
            }

            setOrder(orderFilter(listOrder, namePage));
            resolve('OrderDone');
        };
        dbHelper(query, params, callBack);
    });
};

const orderFilter = (listOrder: Array<Object>, namePage: string): Array<Object> => {
    switch(namePage){
        case 'OrderAll': 
            return filterByAll(listOrder);
        case 'OrderInWork':
            return filterByInWork(listOrder);
        case 'OrderDone':
            return filterByDone(listOrder);
        default:
            return [];                   
    }
};
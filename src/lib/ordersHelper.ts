import SQLite from 'react-native-sqlite-storage';

import { ElementOrder } from 'types/elementType';
import { typeDbParams } from 'types/dbTypes';
import { dbHelper } from './dbHelper';
import { filterByInWork, filterByDone, filterByAll, calculationPercent } from './filterListDataPage';

export const getOrders = (setOrder: Function, namePage: string): Promise<void> => {
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
                                          and r.value is not null
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
      const len: number = result.rows.length;
      const rowList: SQLite.ResultSetRowList = result.rows;
      const listOrder: Array<ElementOrder> = [];

      for(let i = 0; i < len; i++){
        const row = rowList.item(i);
        const item: ElementOrder = {
          id: row.id,
          name: row.name,
          comment: row.comment,
          percent: calculationPercent(row.total, row.result)
        };
        listOrder.push(item);
      }
      setOrder(orderFilter(listOrder, namePage));
      resolve();
    };
    dbHelper(query, params, callBack);
  });
};

const orderFilter = (listOrder: Array<ElementOrder>, namePage: string): Array<Object> => {
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
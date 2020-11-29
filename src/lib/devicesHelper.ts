import { typeDbParams } from '../types/dbTypes';
import SQLite from 'react-native-sqlite-storage';

import { ElementDevice } from 'types/elementType';
import { dbHelper } from './dbHelper';
import { filterByInWork, filterByDone, filterByStopped, calculationPercent } from './filterListDataPage';
import { modeWork } from 'types/modeWork';

export const setQuery = (typeWork: string): string => {
  let query = '';
  if(typeWork === modeWork.device){
    query = `select d.id, d.model, d.serial_number, count(r.id) result, act.actions total, max(s.stoped) stoped from devices d
                LEFT join results r
                  on r.id_device = d.id
                  and r.value is not null
                LEFT join ( select stoped, id_device from results group by id_device ) s
                  on s.id_device = d.id
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
            GROUP by d.id`
  }
  else{
    query = `SELECT d.id, d.serial_number, d.model, count(act.id) total, count(r.id) result, s.stoped  from devices d
              LEFT join (
                SELECT t.id_order, ac.id from todos t
                  LEFT JOIN (
                    SELECT s.id_todo, a.id from steps s
                      LEFT JOIN actions a
                        on s.id = a.id_step
                    where s.id = ? GROUP by a.id
                  ) ac
                    on ac.id_todo = t.id
                where ac.id is not null GROUP by ac.id
              ) act
                on act.id_order = d.id_order
              LEFT join results r
                on r.id_action = act.id
                and r.id_device = d.id
                and r.value is not null
              left join ( select id_device, stoped stoped from results ) s
                on	s.id_device = d.id
              where d.id_order = ?
            GROUP by d.id`;
  }
  return query;
};

export const setParams = (typeWork: string, idOrder: number, idStep: number): typeDbParams => {
  const params: typeDbParams = [];
  if(typeWork === modeWork.device){
    params.push(idOrder);
  }
  else{
    params.push(idStep);
    params.push(idOrder);
  }
  return params;
};

export const getDevices = (query: string, params: typeDbParams, namePage: string, setDevices: Function): void => {
  const callBack: SQLite.StatementCallback = (transaction, results) => {
    const len: number = results.rows.length;
    const listRow: SQLite.ResultSetRowList = results.rows;
    const deviceList: Array<ElementDevice> = [];
    for(let i = 0; i < len; i++){
      const row = listRow.item(i);
      const item: ElementDevice = {
        id: row.id,
        serialNumber: row.serial_number,
        model: row.model,
        isStoped: row.stoped,
        percent: calculationPercent(row.total, row.result)
      };
      deviceList.push(item);
    };
    setDevices(deviceFilter(deviceList, namePage))
  };
  dbHelper(query, params, callBack);
};

const deviceFilter = (listDevice: Array<ElementDevice>, namePage: string): Array<Object> => {
  switch(namePage){
    case 'DevicesDone':
      return filterByDone(listDevice);
    case 'DevicesInWork':
      return filterByInWork(listDevice);
    case 'DevicesStop':
      return filterByStopped(listDevice);
    default:
      return [];
  }
};
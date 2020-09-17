import SQLite from 'react-native-sqlite-storage';
import { dbHelper } from './dbHelper';
import { typeDbParams } from '../types/dbTypes';

export function saveSetting(sid: string): void{
    const query: string = "replace into settings (id, sid) VALUES (?, ?)";
    const params: typeDbParams = [1, sid];
    const callBack: SQLite.StatementCallback = (transaction, result) => {
        
    };
    dbHelper(query, params, callBack);
};

export function getSetting(setUserId: Function): void{
    const query: string = "select sid from settings";
    const params: typeDbParams = [];
    const callBack: SQLite.StatementCallback = (transaction, result) => {
        const len = result.rows.length;
        if(len){
            const row = result.rows.item(0);
            setUserId(row.sid);
        }
    };
    dbHelper(query, params, callBack);
};
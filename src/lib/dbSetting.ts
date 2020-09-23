import SQLite from 'react-native-sqlite-storage';
import { dbHelper } from './dbHelper';
import { typeDbParams } from '../types/dbTypes';
import { profileScreenNavigationPropStack } from '../types/navigationTypes';

export function saveSetting(sid: string): Promise<string>{
    return new Promise((resolve, reject) => {
        const query: string = "replace into settings (id, sid) VALUES (?, ?)";
        const params: typeDbParams = [1, sid];
        const callBack: SQLite.StatementCallback = (transaction, result) => {
            resolve('saveSetting');
        };
        dbHelper(query, params, callBack);
    })
};

export function getSetting(setUserId: Function): void{
    const query: string = "select sid from settings";
    const params: typeDbParams = [];
    const callBack: SQLite.StatementCallback = (transaction, result) => {
        const len: number = result.rows.length;
        if(len){
            const row: SQLite.ResultSetRowList = result.rows;
            const sid: string = row.item(0).sid;
            setUserId(sid);
        }
    };
    dbHelper(query, params, callBack);
};
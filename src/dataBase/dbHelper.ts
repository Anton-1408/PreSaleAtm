import { typeDbParams, typeDbOptions } from '../types/dbTypes';
import SQLite from 'react-native-sqlite-storage';

const options: typeDbOptions={
    name: 'DataBase.db', 
    location: "default",
    createFromLocation: 1,
}

const successCb = (): void => {
    console.warn("success");
    
};

const errorCb = (err: SQLite.SQLError): void => {
    console.warn(err);
};

const DataBase = SQLite.openDatabase(options, successCb, errorCb);

export function dbHelper(query: string, params: typeDbParams, callBack: SQLite.TransactionCallback): void {
    DataBase.transaction((transaction: SQLite.Transaction) => {
        transaction.executeSql(query, params, callBack);
    });
};
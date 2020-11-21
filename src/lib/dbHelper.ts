import SQLite from 'react-native-sqlite-storage';
import { typeDbParams, typeDbOptions } from '../types/dbTypes';

const options: typeDbOptions={
  name: 'DataBase.db',
  location: "default",
  createFromLocation: 1,
}

const successCb = (): void => { };

const errorCb = (err: SQLite.SQLError): void => { };

const DataBase = SQLite.openDatabase(options, successCb, errorCb);

export function dbHelper(query: string, params: typeDbParams, callBack: SQLite.StatementCallback): void {
  DataBase.transaction((transaction: SQLite.Transaction) => {
    transaction.executeSql(query, params, callBack);
  });
};
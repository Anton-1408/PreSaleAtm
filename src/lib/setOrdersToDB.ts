import SQLite from 'react-native-sqlite-storage';
import RNFetchBlob from 'rn-fetch-blob';
import { dbHelper } from './dbHelper';
import { typeDbParams } from '../types/dbTypes';
import { urlServer } from './urlServer';

const callBack: SQLite.StatementCallback = (transaction, result) => { };

export const setOrdersToDB = (orders: any): void => {
    const keyOrder = Object.keys(orders).forEach((id) => {
        const query: string = 'replace into orders (id, name, comment, order_hash, result_hash) VALUES (?,?,?,?,?)';
        const params: typeDbParams = [orders[id].id, orders[id].name, orders[id].comment, orders[id].projectHash, orders[id].resultHash];
        dbHelper(query, params, callBack);
        if('hws' in orders[id])
            setDevices(orders[id].id, orders[id].hws);
        if('todos' in orders[id])
            setTodos(orders[id].id, orders[id].todos);
        if('results' in orders[id])
            setResults(orders[id].results);
    });
};

const setDevices = (idOrder: string, devices: any): void => {
    const keyDevice = Object.keys(devices).forEach((id) => {
        const query: string = 'replace into devices (id, serial_number, model, id_order) VALUES (?,?,?,?)';
        const params: typeDbParams = [devices[id].id, devices[id].sn, devices[id].model, idOrder];
        dbHelper(query, params, callBack);
    });
};

const setResults = (results: any): void => {
    results.forEach((item: any) => {
        const query: string = `replace into results (id_action, id_device, value, date, fio, stoped) VALUES (?,?,?,?,?,?)`;
        const params: typeDbParams = [item.idAction, item.idDevice, item.value, item.dt, item.fio, item.stoped];
        dbHelper(query, params, callBack);
    });
};

const setTodos = (idOrder: string, todos: any): void => {
    const keyTodo = Object.keys(todos).forEach((id) => {
        const query: string = 'replace into todos (id, name, comment, id_order) VALUES (?,?,?,?)';
        const params: typeDbParams = [todos[id].id, todos[id].name, todos[id].comment, idOrder];
        dbHelper(query, params, callBack);
        if('steps' in todos[id])
            setSteps(todos[id].id, todos[id].steps);
    });
};

const setSteps = (idTodo: string, steps: any): void => {
    const keyStep = Object.keys(steps).forEach((id) => {
        const query: string = `replace into steps (id, id_todo, name, comment, is_required, is_important) VALUES (?,?,?,?,?,?)`;
        const params: typeDbParams = [steps[id].id, idTodo, steps[id].name, steps[id].comment, steps[id].isRequired, steps[id].isImportant];
        dbHelper(query, params, callBack);
        if('actions' in steps[id])
            setActions(steps[id].id, steps[id].actions);
    });
};

const setActions = (idStep: string, actios: any): void => {
    const keyAction = Object.keys(actios).forEach((id) => {
        const query: string = `replace into actions (id, id_step, name, comment, type) VALUES (?,?,?,?,?)`;
        const params: typeDbParams = [actios[id].id, idStep, actios[id].name, actios[id].comment, actios[id].type];
        dbHelper(query, params, callBack);
        if('extra' in actios[id])
            setExstraParams(actios[id].id, actios[id].extra);
        if('files' in actios[id])
            setExtraFiles(actios[id].id, actios[id].files);
    });
};

const setExtraFiles = (idAction: string, files: any) => {
    const keyFile = Object.keys(files).forEach((id) => {
        downLoadsFile(idAction, files[id]);
    });
};

const setExstraParams = (idAction: string, extraParams: any) => {
    const keyExtraParams = Object.keys(extraParams).forEach((id) => {
        const query: string = 'replace into extra_params (id_action, extra_params) VALUES(?,?)';
        if(id === 'item'){
            extraParams[id].forEach((item: string) => {
                const params: typeDbParams = [idAction, item];
                dbHelper(query, params, callBack);
            });
        }
        else if(id === 'minNumberOfPhoto'){
            const minPhoto = 'Минимальное кол-во фото: ' + extraParams[id];
            const params: typeDbParams = [idAction, minPhoto];
            dbHelper(query, params, callBack);
        }
        else if(id === 'maxNumberOfPhoto'){
            const maxPhoto = 'Максимальное кол-во фото: ' + extraParams[id];
            const params: typeDbParams = [idAction, maxPhoto];
            dbHelper(query, params, callBack);
        }
    });
};

const downLoadsFile = (idAction: string, files: any) => {
    const dirs = RNFetchBlob.fs.dirs;
    const name = files.id + files.filename;
    RNFetchBlob.config({
        fileCache: true,
        path : dirs.DocumentDir + '/' + name
    })
    .fetch(
        "GET",
        urlServer + files.url
    )
    .then(res => {
        const url = 'file://' + res.path();
        const query: string = 'replace into extra_files (id, id_action, path, name) VALUES (?,?,?,?)';
        const params: typeDbParams = [files.id, idAction, url, files.filename];
        dbHelper(query, params, callBack);
    });
};
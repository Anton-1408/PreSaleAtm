import SQLite from 'react-native-sqlite-storage';
import { CameraKitCamera } from 'react-native-camera-kit';
import { typeDbParams } from '../types/dbTypes';
import { dbHelper } from './dbHelper';

export const getPermissions = async () => {
    const isUserAuthorizedCamera = await CameraKitCamera.requestDeviceCameraAuthorization();
};

export const getDevicesList = (idOrder: number, setDevices: Function) => {
    const query: string = 'SELECT id, serial_number from devices where id_order = ?'
    const params: typeDbParams = [idOrder];
    const callBack: SQLite.StatementCallback = (transaction, result) => {
        const len: number = result.rows.length;
        const rowList: SQLite.ResultSetRowList = result.rows;
        const listDevices: Array<Object> = [];
        for(let i = 0; i < len; i++){
            const row: any = rowList.item(i);
            const item: any = {id: row.id, serialNumber: row.serial_number };
            listDevices.push(item)
        }
        setDevices(listDevices);
    };
    dbHelper(query, params, callBack)
};

export const searchDevice = (listDevice: Array<Object>, serialNumber: string) => {
    const device: any = listDevice.find((item: any) => {
        return item.serialNumber === serialNumber
    });
    return device;
};
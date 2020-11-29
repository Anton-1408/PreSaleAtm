import SQLite from 'react-native-sqlite-storage';
import { CameraKitCamera } from 'react-native-camera-kit';

import { ElementSearchDevice } from 'types/elementType';
import { typeDbParams } from 'types/dbTypes';
import { dbHelper } from './dbHelper';

export const getPermissions = async () => {
  await CameraKitCamera.requestDeviceCameraAuthorization();
};

export const getDevicesList = (idOrder: number, setDevices: Function): void => {
  const query: string = 'SELECT id, serial_number from devices where id_order = ?'
  const params: typeDbParams = [idOrder];
  const callBack: SQLite.StatementCallback = (transaction, result) => {
    const len: number = result.rows.length;
    const rowList: SQLite.ResultSetRowList = result.rows;
    const listDevices: Array<ElementSearchDevice> = [];
    for(let i = 0; i < len; i++){
      const row = rowList.item(i);
      const item: ElementSearchDevice = {
        id: row.id,
        serialNumber: row.serial_number
      };
      listDevices.push(item)
    }
    setDevices(listDevices);
  };
  dbHelper(query, params, callBack)
};

export const searchDevice = (listDevice: Array<ElementSearchDevice>, serialNumber: string): SearchDevice => {
  const device = listDevice.find((item: ElementSearchDevice) => {
    return item.serialNumber === serialNumber
  });
  return device;
};

export type SearchDevice = ElementSearchDevice | undefined;
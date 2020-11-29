import { typeAction } from './typeAction';

export interface ElementOrder{
  id: number,
  name: string,
  comment: string,
  percent: number
};

export interface ElementTodo{
  id: number,
  name: string,
  comment: string,
  percent: number
};

export interface ElementStep{
  id: number,
  name: string,
  comment: string,
  isRequired: number,
  isImportant: number,
  isDone: boolean,
};

export interface ElementSearchDevice{
  id: number,
  serialNumber: string
};

export interface ElementDevice extends ElementSearchDevice{
  model: string,
  isStoped: number,
  percent: number
};

export interface ElementAction{
  id: number,
  name: string,
  comment: string,
  type: typeAction,
  fio: string
  date: string,
  stoped: number,
  isDone: boolean
};

export interface ElemetResult{
  idAction: number,
  idDevice: number,
  value: number | string,
  dt: string,
  fio: string,
  stoped: number
};

export enum ElementExtraParams{
  item = 'item',
  minNumberOfPhoto = 'minNumberOfPhoto',
  maxNumberOfPhoto = 'maxNumberOfPhoto'
};

export interface ElementFiles{
  id: number,
  filename: string,
  url: string
};

export interface ElementGalleryPhoto{
  name: string | null,
  uri: string,
  type: string,
  check?: boolean
};

export interface ExtraParam{
  value: boolean,
  title: string,
  id: number
};

export interface ExtraFile{
  id: number,
  path: string,
  name: string
};

export type ActionResult = string | number | [] | boolean | undefined;

export type FilesPhoto = Array<ElementGalleryPhoto> | ElementGalleryPhoto;

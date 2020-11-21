import { colors } from '.'

export const iconSize: number = 50;
export const iconSizeBar: number = 30;
export const sizeButtonAction: number = 40;
export const sizeImage: number = 118;
export const barLabelSize: number = 12;
export const barLabelFontFamily: string = 'OpenSans-SemiBold';

export const colorPress = (pressed: boolean): Object => {
  return{
    backgroundColor: pressed ? colors.color4 : colors.transparent
  };
};

export const bcolorDone = (isDone: boolean): string => {
  return  isDone ? colors.color2 : colors.color0;
};

export const colorDone: any = (isDone: boolean, colorText: string): string => {
  return  isDone ? colors.color0 : colorText;
};

export const titlePage: any = (title: string): string => {
  return '#' + title;
};
export const desingColor: string = '#3F51B5';
export const iconSize: number = 50;
export const iconSizeBar: number = 26;
export const colorWhite: string = '#FFFFFF';
export const colorTitle: string = '#F57C00';
export const colorIsDone: string = '#388E3C';
export const colorIsStop: string = '#C62828';
export const colorIsPress: string = '#EEEEEE';
export const colorIsWork: string = '#64B5F6';
export const colorComment: string = '#000000';
export const colorIconSearch: string = '#616161';
export const sizeButtonAction: number = 40;

export const colorPress: any = (pressed: boolean) => {
    return{
        backgroundColor: pressed ? colorIsPress: colorWhite
    };
};

export const bcolorDone: any = (isDone: boolean) => {
    return  isDone ? colorIsDone : colorWhite;
};

export const colorDone: any = (isDone: boolean, colorText: string) => {
    return  isDone ? colorWhite : colorText;
};

export const titlePage: any = (title) => {
    return '#' + title;
};
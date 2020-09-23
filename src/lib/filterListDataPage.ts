export const filterByInWork = (list: Array<Object>): Array<Object> => {
    const newList = list.filter((item: any) => {
        return item.percent < 100;
    });
    return newList;
};

export const filterByDone = (list: Array<Object>): Array<Object> => {
    const newList = list.filter((item: any) => {
        return item.percent === 100;
    });
    return newList;
};

export const filterByAll = (list: Array<Object>): Array<Object> => {
    const newList = list.filter((item: any) => {
        return item.percent <= 100;
    });
    return newList;
};
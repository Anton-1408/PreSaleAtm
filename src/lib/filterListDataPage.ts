export const calculationPercent = (total: number, result: number): number => {
    if(total){
        const percent = (result / total) * 100;
        return ~~percent;
    }
    else{
        return 0;
    }
};

export const filterByInWork = (list: Array<Object>): Array<Object> => {
    const newList = list.filter((item: any) => {
        return 'isStoped' in item ? item.percent < 100 && !item.isStoped : item.percent < 100;
    });
    return newList;
};

export const filterByDone = (list: Array<Object>): Array<Object> => {
    const newList = list.filter((item: any) => {
        return 'isStoped' in item ? item.percent === 100 && !item.isStoped : item.percent === 100;
    });
    return newList;
};

export const filterByAll = (list: Array<Object>): Array<Object> => {
    const newList = list.filter((item: any) => {
        return item.percent <= 100;
    });
    return newList;
};

export const filterByStopped = (list: Array<Object>): Array<Object> => {
    const newList = list.filter((item: any) => {
        return item.isStoped;
    })
    return newList;
};
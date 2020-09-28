import React, { Fragment, useContext } from 'react';
import { Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { ActionContext } from '../../lib/actionHelper';
import { style } from '../../styles/style';
import { typeAction } from '../../types/typeAction';

export const ExtraParamsPhoto: React.FC = () => {
    const route: any = useRoute();
    const context = useContext(ActionContext);
    if(typeAction.photo === route.params.type){
        return(
            context.extraParams.map((item: any) => {
                return(
                    <Text key={item.id} style={style.comment}>{item.title}</Text>
                );
            })
        )
    }
    else{
        return(
            <Fragment>
            </Fragment>
        );
    }
};

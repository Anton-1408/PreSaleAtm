import React, { Fragment, useContext } from 'react';
import { Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { ActionContext, iContext } from '../../lib/actionHelper';
import { style } from '../../styles/style';
import { typeAction } from '../../types/typeAction';
import { tRoutePropAction } from '../../types/navigationTypes';
import { componentsStyle } from '../../styles/componentsStyle';

export const ExtraParamsPhoto: React.FC = () => {
    const route: tRoutePropAction = useRoute();
    const context: iContext = useContext(ActionContext);
    if(typeAction.photo === route.params.type){
        return(
            context.extraParams.map((item: any) => {
                return(
                    <Text key={item.id} style={[style.comment, componentsStyle.extraPhotoText]}>
                        {item.title}
                    </Text>
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

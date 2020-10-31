import React, { Fragment, useContext } from 'react';
import { Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { ActionContext, iContext } from '../../lib/actionHelper';
import { styles } from './styles';
import { typeAction } from '../../types/typeAction';
import { tRoutePropAction } from '../../types/navigationTypes';

interface iProps{

};

const ExtraParamsPhoto: React.FC<iProps> = ({}) => {
    const route: tRoutePropAction = useRoute();
    const context: iContext = useContext(ActionContext);

    if(typeAction.photo === route.params.type){
        return(
            context.extraParams.map((item: any) => {
                return(
                    <Text key={item.id} style={styles.comment}>
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

export default ExtraParamsPhoto;

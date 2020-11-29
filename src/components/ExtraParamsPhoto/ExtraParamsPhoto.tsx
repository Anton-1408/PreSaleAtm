import React, { Fragment, useContext } from 'react';
import { Text } from 'react-native';
import { useRoute } from '@react-navigation/native';

import { ActionContext, ContextParams } from 'lib/actionHelper';
import { styles } from './styles';
import { typeAction } from 'types/typeAction';
import { RoutePropAction } from 'types/navigationTypes';

const ExtraParamsPhoto: React.FC<ExtraParamsPhotoProps> = ({}) => {
  const route = useRoute<RoutePropAction>();
  const context = useContext<ContextParams>(ActionContext);

  if(typeAction.photo === route.params.type){
    return(
      <Fragment>
        {context.extraParams.map((param) => {
          return(
            <Text key={param.id} style={styles.comment}>
              {param.title}
            </Text>
          );
        })}
      </Fragment>
    )
  }
  else{
    return(
      <Fragment>
      </Fragment>
    );
  }
};

interface ExtraParamsPhotoProps{ };

export default ExtraParamsPhoto;

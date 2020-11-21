import React, { useContext } from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { ActionContext, iContext } from '../../lib/actionHelper';
import { styles } from './styles';
import { ExtraParamsPhoto } from '..';
import { tRoutePropAction } from '../../types/navigationTypes';
import { base } from '../../styles';

const ContentPanel: React.FC = () => {
  const context: iContext = useContext(ActionContext);
  const route: tRoutePropAction = useRoute();

  return(
    <View>
      <Text style={styles.comment}>{route.params.comment}</Text>
      <ExtraParamsPhoto/>
      <View style={styles.containerFiles}>
        {context.files.map((item: any) => (
          <Pressable
            key={item.id}
            style={base.imageContainer}
          >
            <Image
              source={{uri: item.path}}
              style={base.imageStyle}
            />
          </Pressable>
        ))}
      </View>
    </View>
  );
};

export default ContentPanel;
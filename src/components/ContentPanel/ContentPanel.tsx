import React, { useContext } from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';

import { ActionContext, ContextParams } from '../../lib/actionHelper';
import { styles } from './styles';
import { ExtraParamsPhoto } from '..';
import { RoutePropAction } from '../../types/navigationTypes';
import { base } from '../../styles';

const ContentPanel: React.FC<ContentPanelProps> = ({}) => {
  const context = useContext<ContextParams>(ActionContext);
  const route = useRoute<RoutePropAction>();

  return(
    <View>
      <Text style={styles.comment}>{route.params.comment}</Text>
      <ExtraParamsPhoto/>
      <View style={styles.containerFiles}>
        {context.files.map((file) => (
          <Pressable
            key={file.id}
            style={base.imageContainer}
          >
            <Image
              source={{uri: file.path}}
              style={base.imageStyle}
            />
          </Pressable>
        ))}
      </View>
    </View>
  );
};

interface ContentPanelProps{ }

export default ContentPanel;
import React, { useContext } from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { ActionContext, iContext } from '../../lib/actionHelper';
import { styles } from './styles';
import { componentsStyle } from '../../styles/componentsStyle';
import { ExtraParamsPhoto } from '..';
import { tRoutePropAction } from '../../types/navigationTypes';
import { style } from '../../styles/style';

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
                        style={style.imageContainer}
                    >
                        <Image
                            source={{uri: item.path}}
                            style={style.imageStyle}
                        />
                    </Pressable>
                ))}
            </View>
        </View>
    );
};

export default ContentPanel;
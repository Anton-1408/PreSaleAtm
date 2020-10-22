import React, { useContext } from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { ActionContext, iContext } from '../../lib/actionHelper';
import { style } from '../../styles/style';
import { componentsStyle } from '../../styles/componentsStyle';
import { ExtraParamsPhoto } from './ExtraParamsPhoto';
import { tRoutePropAction } from '../../types/navigationTypes';

export const ContentPanel: React.FC = () => {
    const context: iContext = useContext(ActionContext);
    const route: tRoutePropAction = useRoute();

    return(
        <View>
            <Text style={[style.comment, componentsStyle.contentPanelComment]}>
                {route.params.comment}
            </Text>
            <ExtraParamsPhoto/>
            <View style={componentsStyle.imageConteinerPanel}>
                <View style={componentsStyle.containerFilesContent}>
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
        </View>
    );
};
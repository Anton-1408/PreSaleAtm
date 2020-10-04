import React, { Fragment, useContext } from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { ActionContext } from '../../lib/actionHelper';
import { style } from '../../styles/style';
import { componentsStyle } from '../../styles/componentsStyle';
import { ExtraParamsPhoto } from './ExtraParamsPhoto';

export const ContentPanel: React.FC = () => {
    const context = useContext(ActionContext);
    const route: any = useRoute();

    return(
        <View>
            <Text style={[style.comment, componentsStyle.contentPanelComment]}>
                {route.params.comment}
            </Text>
            <ExtraParamsPhoto/>
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
    );
};
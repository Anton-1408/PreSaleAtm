import React, {useContext} from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import { ActionContext } from '../../lib/actionHelper';
import { style } from '../../styles/style';
import { componentsStyle } from '../../styles/componentsStyle';

export const ContentPanel: React.FC = () => {
    const context = useContext(ActionContext);
    return(
        <View style={componentsStyle.conteinerContentPanel}>
            <Text style={style.comment}>{context.comment}</Text>
            <View style={componentsStyle.containerFilesContent}>
                {context.files.map((item: any) => (
                    <Pressable
                        key={item.id}
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
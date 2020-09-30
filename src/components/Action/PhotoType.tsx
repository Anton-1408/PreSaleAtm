import React, { useState, useEffect } from 'react';
import { View, Pressable, FlatList, Image } from 'react-native';
import { style } from '../../styles/style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colorWhite, iconSize } from '../../styles/constantStyle';
import { useNavigation } from '@react-navigation/native';
import { iRootReducers } from '../../types/reduxTypes';
import { connect } from 'react-redux';
import { componentsStyle } from '../../styles/componentsStyle';
import { countImageRow } from '../../lib/galleryHelper';

interface iProps{
    initialState: Array<string>,
    setResult: Function,
    readonly photoAction: Array<Object>
};

const mapStateToProps = (state: iRootReducers) => {
    return{
        photoAction: state.appStateReducer.photoAction,
    }
};

const PhotoType: React.FC<iProps> = ({initialState, setResult, photoAction}) => {
    const navigation = useNavigation();
    const [images, setImages] = useState([]);

    useEffect(() => {
        setImages((prev: any) => {
            if(Array.isArray(photoAction)){
                const newState: any = [...prev, ...photoAction];
                return newState;
            }
            else{
                prev.push(photoAction);
                return prev;
            }
        })
    }, [photoAction])


    return(
        <View style={componentsStyle.photoTypeContainer}>
            <FlatList
                data={images}
                horizontal={false}
                keyExtractor={ (item: any) => item.name }
                numColumns={countImageRow()}
                columnWrapperStyle={componentsStyle.imagesContainer}
                renderItem={({item, index}) => (
                    <Pressable
                        style={componentsStyle.imageGalleryContainer}
                        onPress={() => {
                            navigation.navigate('ViewPhoto', {
                                index: index,
                                array: images,
                            })
                        }}
                    >
                        <Image
                            source={{uri: item.uri}}
                            style={[style.imageStyle, componentsStyle.imageGallery]}
                        />
                    </Pressable>
                )}
            />
            <Pressable
                style={[style.button, componentsStyle.buttonCamera]}
                onPress={() => {
                    navigation.navigate('Camera')
                }}
            >
                <Icon name='camera-enhance' size={iconSize} color={colorWhite}/>
            </Pressable>
            <Pressable
                style={[style.button, componentsStyle.buttonGallery]}
                onPress={() => {
                    navigation.navigate('Gallery')
                }}
            >
                <Icon name='folder-image' size={iconSize} color={colorWhite}/>
            </Pressable>
        </View>
    );
}

export default connect(mapStateToProps, null)(PhotoType);
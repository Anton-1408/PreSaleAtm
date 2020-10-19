import React, { useState, useEffect } from 'react';
import { View, Pressable, FlatList, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { style } from '../../styles/style';
import { colorWhite, iconSize } from '../../styles/constantStyle';
import { iRootReducers } from '../../types/reduxTypes';
import { connect } from 'react-redux';
import { componentsStyle } from '../../styles/componentsStyle';
import { countImageRow } from '../../lib/galleryHelper';
import { tNavigationProp } from '../../types/navigationTypes';

interface iProps{
    readonly initialState: any,
    readonly setResult: Function,
    readonly photoAction?: any
};

const mapStateToProps = (state: iRootReducers) => {
    return{
        photoAction: state.appStateReducer.photoAction,
    }
};

const PhotoType: React.FC<iProps> = ({initialState, setResult, photoAction}) => {
    const navigation: tNavigationProp = useNavigation();
    const [images, setImages] = useState([]);

    useEffect(() => {
        setImages((prev: any) => {
            if(Array.isArray(photoAction)){
                const newState: any = [...prev, ...photoAction];
                return newState;
            }
            else{
                const arrImg: any = [...prev];
                const findeImg = arrImg.findIndex((item: any) => {
                    return item.name === photoAction.name;
                });
                if(findeImg < 0)
                    arrImg.push(photoAction);
                else
                    arrImg.splice(findeImg, 1);
                return arrImg;
            }
        });
    }, [photoAction])

    useEffect(() => {
        setResult(images);
    }, [images]);

    useEffect(() => {
        setImages(initialState);
    }, [initialState])

    return(
        <View style={componentsStyle.photoTypeContainer}>
            <FlatList
                data={images}
                horizontal={false}
                keyExtractor={ (item: any) => item.name }
                style={style.imagesList}
                numColumns={countImageRow()}
                renderItem={({item}) => (
                    <Pressable
                        style={style.imageContainer}
                        onPress={() => {
                            navigation.navigate('ViewPhoto', {
                                name: item.name,
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
            <View
                style={[
                    style.button,
                    componentsStyle.buttonCamera,
                ]}
            >
                <Pressable
                    onPress={() => {
                        navigation.navigate('Camera')
                    }}
                >
                    <Icon name='camera-enhance' size={iconSize} color={colorWhite}/>
                </Pressable>
            </View>
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
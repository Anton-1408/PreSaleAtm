import React, { useEffect, useState, useCallback } from 'react';
import { Pressable, View, FlatList, StatusBar, PermissionsAndroid, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { iRootReducers } from '../types/reduxTypes';
import { profileScreenNavigationPropStack, profileScreenRoutePropGallery } from '../types/navigationTypes';
import { setPhotosAction } from '../redux/actions/actions';
import { colorBlack, colorWhite, iconSize } from '../styles/constantStyle';
import { getPhotos, getAccessGallery, countImageRow } from '../lib/galleryHelper';
import { style } from '../styles/style';
import { componentsStyle } from '../styles/componentsStyle';
import { CheckPhoto } from '../components/CheckPhoto';

interface iProps{
    navigation: profileScreenNavigationPropStack,
    route: profileScreenRoutePropGallery,
    setPhotos: Function
};

const mapDispatchToProps = (dispatch: ThunkDispatch<iRootReducers, unknown, Action<Object>>) => {
    return{
        setPhotos: (paths: Array<Object>) => dispatch(setPhotosAction(paths))
    };
};

const Gallery: React.FC<iProps> = ({navigation, route, setPhotos}) => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        getAccessGallery().then((granted) => {
            if( granted === PermissionsAndroid.RESULTS.GRANTED ){
                getPhotos(setImages)
            }
        });
    }, []);

    const chosePhoto = useCallback(() => {
        const photos = images.filter((item: any) => {
            if(item.check){
                return  delete item.check;
            }
        });
        setPhotos(photos);
        navigation.goBack();
    }, [images]);

    return(
        <View style={[style.container, {backgroundColor: colorBlack}]}>
            <StatusBar backgroundColor={colorBlack}/>
            <FlatList
                data={images}
                horizontal={false}
                keyExtractor={ (item: any) => item.name }
                numColumns={countImageRow()}
                renderItem={({item}) => (
                    <Pressable
                        style={style.imageContainer}
                        onPress={() => {
                            setImages((prev: any) => {
                                return prev.map((next: any) => {
                                    return next.name === item.name ?
                                        {...next, check: !next.check} : next;
                                })
                            });
                        }}
                    >
                        <ImageBackground
                            source={{uri: item.uri}}
                            style={[style.imageStyle, componentsStyle.imageGallery]}
                        >
                            <CheckPhoto
                                check={item.check}
                            />
                        </ImageBackground>
                    </Pressable>
                )}
            />
            <Pressable
                style={[style.button, componentsStyle.imageGalleryButton]}
                onPress={chosePhoto}
            >
                <Icon name="check-outline" size={iconSize} color={colorWhite}/>
            </Pressable>
        </View>
    )
};

export default connect(null, mapDispatchToProps)(Gallery)
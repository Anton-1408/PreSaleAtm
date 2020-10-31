import React, { useEffect, useState, useCallback } from 'react';
import { Pressable, View, FlatList, StatusBar, PermissionsAndroid, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { iRootReducers } from '../../types/reduxTypes';
import { tNavigationProp, tRoutePropGallery } from '../../types/navigationTypes';
import { setPhotosAction } from '../../redux/actions/actions';
import { iconSize } from '../../styles/constants';
import { colors, base } from '../../styles';
import { getPhotos, getAccessGallery, countImageRow } from '../../lib/galleryHelper';
import { CheckPhoto } from '../../components';
import { styles } from './styles';

interface iProps{
    readonly route: tRoutePropGallery,
    readonly navigation: tNavigationProp,
    readonly setPhotos: Function
};

const mapDispatchToProps = (dispatch: ThunkDispatch<iRootReducers, unknown, Action<Object>>) => {
    return{
        setPhotos: (paths: Array<Object>) => dispatch(setPhotosAction(paths))
    };
};

const Gallery: React.FC<iProps> = ({navigation, route, setPhotos}) => {
    const [images, setImages] = useState([]);
    const [countImages, setCountImages] = useState(20);

    useEffect(() => {
        getAccessGallery().then((granted) => {
            if(granted === PermissionsAndroid.RESULTS.GRANTED){
                getPhotos(setImages, countImages)
            }
        });
    }, [countImages]);

    const chosePhoto = useCallback(() => {
        const photos = images.filter((item: any) => {
            if(item.check){
                return  delete item.check;
            }
        });
        setPhotos(photos);
        navigation.goBack();
    }, [images]);

    const viewImages = useCallback(() => {
        setCountImages((prev: number) => {
            return prev + 20;
        })
    }, [countImages]);

    return(
        <View style={[base.container, styles.galleryContainer]}>
            <StatusBar backgroundColor={colors.color8}/>
            <FlatList
                data={images}
                horizontal={false}
                keyExtractor={(item: any) => item.name}
                numColumns={countImageRow()}
                style={base.imagesList}
                onEndReached={viewImages}
                renderItem={({item}) => (
                    <Pressable
                        style={base.imageContainer}
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
                            style={[base.imageStyle, styles.imageGallery]}
                        >
                            <CheckPhoto
                                check={item.check}
                            />
                        </ImageBackground>
                    </Pressable>
                )}
            />
            <Pressable
                style={[base.button, styles.imageGalleryButton]}
                onPress={chosePhoto}
            >
                <Icon name="check-outline" size={iconSize} color={colors.color0}/>
            </Pressable>
        </View>
    )
};

export default connect(null, mapDispatchToProps)(Gallery)
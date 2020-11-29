import React, { useEffect, useState, useCallback } from 'react';
import { Pressable, View, FlatList, StatusBar, PermissionsAndroid, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import { ElementGalleryPhoto } from 'types/elementType';
import { RootReducers } from 'types/reduxTypes';
import { NavigationProp, RoutePropGallery } from 'types/navigationTypes';
import { setPhotosAction } from 'redux/actions/actions';
import { iconSize } from 'styles/constants';
import { colors, base } from 'styles';
import { getPhotos, getAccessGallery, countImageRow } from 'lib/galleryHelper';
import { CheckPhoto } from 'components';
import { styles } from './styles';

const mapDispatchToProps = (dispatch: ThunkDispatch<RootReducers, unknown, Action<Object>>) => {
  return{
    setPhotos: (imgs: Array<ElementGalleryPhoto>) => dispatch(setPhotosAction(imgs))
  };
};

const Gallery: React.FC<GalleryProps> = ({navigation, route, setPhotos}) => {
  const [images, setImages] = useState<ElementGalleryPhoto[]>([]);
  const [countImages, setCountImages] = useState<number>(20);

  useEffect(() => {
    getAccessGallery()
    .then((granted) => {
      if(granted === PermissionsAndroid.RESULTS.GRANTED){
        getPhotos(setImages, countImages)
      }
    });
  }, [countImages]);

  const chosePhoto = useCallback(() => {
    const photos = images.filter((image: ElementGalleryPhoto) => {
      if(image.check){
        return  delete image.check;
      }
    });
    setPhotos(photos);
    navigation.goBack();
  }, [images]);

  const viewImages = useCallback(() => {
    setCountImages((prev) => {
      return prev + 20;
    });
  }, [countImages]);

  return(
    <View style={[base.container, styles.galleryContainer]}>
      <StatusBar backgroundColor={colors.color8}/>
      <FlatList
        data={images}
        horizontal={false}
        keyExtractor={(item) => item.name! }
        numColumns={countImageRow()}
        style={base.imagesList}
        onEndReached={viewImages}
        renderItem={({ item }) => (
          <Pressable
            style={base.imageContainer}
            onPress={() => {
              setImages((prev) => {
                return prev.map((image) => {
                  return image.name === item.name ? {
                    ...image,
                    check: !image.check
                  } : image;
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
  );
};

interface GalleryProps{
  route: RoutePropGallery,
  navigation: NavigationProp,
  setPhotos: Function
};

export default connect(null, mapDispatchToProps)(Gallery)
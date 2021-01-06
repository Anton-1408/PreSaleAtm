import React, { useState, useEffect } from 'react';
import { View, Pressable, FlatList, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

import { ElementGalleryPhoto } from 'types/elementType';
import { iconSize } from 'styles/constants';
import { colors, base } from 'styles';
import { RootReducers } from 'types/reduxTypes';
import { useSelector, useDispatch } from 'react-redux';
import { routes } from 'navigation/routes';
import { styles } from './styles';
import { countImageRow } from 'lib/galleryHelper';
import { NavigationProp } from 'types/navigationTypes';
import { selectorPhotoAction } from 'redux/selectors/appStateSelectors';
import { setPhotosAction } from 'redux/actions/actions';

const Photo: React.FC<PhotoProps> = ({ initialState, setResult }) => {
  const navigation: NavigationProp = useNavigation();
  const [images, setImages] = useState<ElementGalleryPhoto[]>([]);
  const dispatch = useDispatch();

  const photoAction = useSelector(
    (state: RootReducers) => selectorPhotoAction(state)
  );

  const removePhotosFromStore = () => {
    dispatch(setPhotosAction([]));
  };

  useEffect(() => {
    return removePhotosFromStore;
  }, [])

  useEffect(() => {
    setImages((prev) => {
      if(Array.isArray(photoAction)){
        const newState = [...prev, ...photoAction];
        return newState;
      }
      else{
        const arrImg = [...prev];
        const findeImg = arrImg.findIndex((img) => {
          return img.name === photoAction.name;
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
    <View style={styles.container}>
      <FlatList
        data={images}
        horizontal={false}
        keyExtractor={(item) => item.name!}
        style={base.imagesList}
        numColumns={countImageRow()}
        renderItem={({ item }) => (
          <Pressable
            style={base.imageContainer}
            onPress={() => {
              navigation.navigate(routes.ViewPhoto, {
                name: item.name!,
                array: images,
              })
            }}
          >
            <Image
              source={{uri: item.uri}}
              style={base.imageStyle}
            />
          </Pressable>
        )}
      />
      <View style={[base.button, styles.buttonCamera]}>
        <Pressable
          onPress={() => {
            navigation.navigate(routes.Camera)
          }}
        >
          <Icon name='camera-enhance' size={iconSize} color={colors.color0}/>
        </Pressable>
      </View>
      <Pressable
        style={[base.button, styles.buttonGallery]}
        onPress={() => {
          navigation.navigate(routes.Gallery)
        }}
      >
        <Icon name='folder-image' size={iconSize} color={colors.color0}/>
      </Pressable>
    </View>
  );
};

interface PhotoProps{
  initialState: ElementGalleryPhoto[],
  setResult: Function,
};

export default Photo;
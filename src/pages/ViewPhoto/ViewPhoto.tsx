import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { Pressable, View, StatusBar, Text, Alert } from 'react-native';

import { ElementGalleryPhoto } from 'types/elementType';
import { RootReducers } from 'types/reduxTypes';
import { NavigationProp, RoutePropViewPhoto } from 'types/navigationTypes';
import { setPhotosAction } from 'redux/actions/actions';
import { iconSize, iconSizeBar } from 'styles/constants';
import { styles } from './styles';
import { colors, base } from 'styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ImageView from "react-native-image-viewing";

const mapDispatchToProps = (dispatch: ThunkDispatch<RootReducers, unknown, Action<Object>>) => {
  return{
    setPhoto: (img: ElementGalleryPhoto) => dispatch(setPhotosAction(img))
  };
};

const ViewPhoto: React.FC<ViewPhotoProps> = ({navigation, route, setPhoto}) => {
  const [images, setImages] = useState<ElementGalleryPhoto[]>([]);
  const [initialIndex, setInitialIndex] = useState<number>(0);

  useEffect(() => {
    const imgs: ElementGalleryPhoto[] = route.params.array;
    const index: number = route.params.array.findIndex((img) => {
      return img.name === route.params.name
    });
    setInitialIndex(index);
    setImages(imgs);
  }, []);

  return(
    <View style={base.container}>
      <StatusBar backgroundColor={colors.color8}/>
      <ImageView
        images={images}
        imageIndex={initialIndex}
        visible={true}
        presentationStyle="fullScreen"
        swipeToCloseEnabled={false}
        onRequestClose={() => { }}
        HeaderComponent={(index) => (
          <View style={styles.photoViewHeader}>
            <Text style={styles.photoViewTitle}>
              {images.length > 0 ? images[index.imageIndex].name : ''}
            </Text>
            <Pressable
              style={styles.photoViewButtonClose}
              onPress={() => {
                navigation.goBack()
              }}
            >
              <Icon name='close' size={iconSizeBar} color={colors.color8}/>
            </Pressable>
          </View>
        )}
        FooterComponent={(index) => (
          <Pressable
            style={styles.buttonDeletePhoto}
            onPress={() => {
              Alert.alert('Изображение будет удалено.', 'Вы уверены?', [
                {
                  text: 'Да',
                  onPress: () => {
                    setPhoto(images[index.imageIndex]);
                    navigation.goBack();
                  }
                },
                {
                  text: 'Нет',
                }
              ])
            }}
          >
            <Icon name="delete" size={iconSize} color={colors.color6}/>
          </Pressable>
        )}
      />
    </View>
  );
};

interface ViewPhotoProps{
  route: RoutePropViewPhoto,
  navigation: NavigationProp,
  setPhoto: Function
}

export default connect(null, mapDispatchToProps)(ViewPhoto);
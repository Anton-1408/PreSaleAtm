import React, { useRef, useCallback } from 'react';
import { connect } from 'react-redux';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { CameraKitCamera } from "react-native-camera-kit";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Pressable, View, StatusBar, Platform } from 'react-native';

import { ElementGalleryPhoto } from 'types/elementType';
import { RootReducers } from 'types/reduxTypes';
import { NavigationProp, RoutePropCamera } from 'types/navigationTypes';
import { setPhotosAction } from 'redux/actions/actions';
import { colors, base } from 'styles';
import { iconSize } from 'styles/constants';
import { styles } from './styles';

const mapDispatchToProps = (dispatch: ThunkDispatch<RootReducers, unknown, Action<Object>>) => {
  return{
    setPhoto: (img: ElementGalleryPhoto) => dispatch(setPhotosAction(img))
  };
};

const Camera: React.FC<CameraProps> = ({navigation, route, setPhoto}) => {
  const ref = useRef<CameraKitCamera>(null);

  const makePhoto = useCallback(async () => {
    const image = await ref.current.capture(true);
    const src: string = Platform.OS === 'ios' ? "ph://" : "file://";
    const data = {
      name: image.name,
      uri: src + image.uri,
      type: 'image/jpeg'
    };
    setPhoto(data);
    navigation.goBack();
  }, []);

  return(
    <View style={base.container}>
      <StatusBar backgroundColor={colors.color8}/>
      <CameraKitCamera
        ref={(cam: CameraKitCamera) => ref.current = cam}
        style={styles.cameraStyle}
        cameraOptions={{
          flashMode: 'auto',
          focusMode: 'on',
          zoomMode: 'on',
          ratioOverlay:'1:1',
        }}
      />
      <Pressable
        style={[base.button, styles.buttonCamera]}
        onPress={makePhoto}
      >
        <Icon name="circle-double" size={iconSize} color={colors.color0}/>
      </Pressable>
    </View>
  );
};

interface CameraProps{
  route: RoutePropCamera,
  navigation: NavigationProp,
  setPhoto: Function
}

export default connect(null, mapDispatchToProps)(Camera);
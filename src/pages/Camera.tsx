import React, { useRef, useCallback } from 'react';
import { connect } from 'react-redux';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { CameraKitCamera } from "react-native-camera-kit";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Pressable, View, StatusBar} from 'react-native';
import { iRootReducers } from '../types/reduxTypes';
import { profileScreenNavigationPropStack, profileScreenRoutePropCamera } from '../types/navigationTypes';
import { setPhotosAction } from '../redux/actions/actions';
import { style } from '../styles/style';
import { colorBlack, colorWhite, iconSize } from '../styles/constantStyle';
import { componentsStyle } from '../styles/componentsStyle';

interface iProps{
    navigation: profileScreenNavigationPropStack,
    route: profileScreenRoutePropCamera,
    setPhoto: Function
}

const mapDispatchToProps = (dispatch: ThunkDispatch<iRootReducers, unknown, Action<Object>>) => {
    return{
        setPhoto: (path: string) => dispatch(setPhotosAction(path))
    };
};

const Camera: React.FC<iProps> = ({navigation, route, setPhoto}) => {
    const ref: any = useRef(null);

    const makePhoto = useCallback(async () => {
        const image = await ref.current.capture(true)
        const data = {name: image.name, uri: image.uri, type: 'image/jpeg'}
        setPhoto(data);
        navigation.goBack();
    }, []);

    return(
        <View style={style.container}>
            <StatusBar backgroundColor={colorBlack}/>
            <CameraKitCamera
                ref={(cam: any) => ref.current = cam}
                style={componentsStyle.cameraStyle}
                cameraOptions={{
                    flashMode: 'auto',
                    focusMode: 'on',
                    zoomMode: 'on',
                    ratioOverlay:'1:1',
                }}
            />
            <Pressable
                style={[style.button, componentsStyle.imageGalleryButton, {right: "36%"}]}
                onPress={makePhoto}
            >
                <Icon name="circle-double" size={iconSize} color={colorWhite}/>
            </Pressable>
        </View>
    );
};

export default connect(null, mapDispatchToProps)(Camera);
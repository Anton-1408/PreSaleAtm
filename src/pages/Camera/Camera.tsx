import React, { useRef, useCallback } from 'react';
import { connect } from 'react-redux';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { CameraKitCamera } from "react-native-camera-kit";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Pressable, View, StatusBar, Platform } from 'react-native';
import { iRootReducers } from '../../types/reduxTypes';
import { tNavigationProp,tRoutePropCamera } from '../../types/navigationTypes';
import { setPhotosAction } from '../../redux/actions/actions';
import { colors, base } from '../../styles';
import { iconSize } from '../../styles/constants';
import { styles } from './styles';

interface iProps{
    readonly route: tRoutePropCamera,
    readonly navigation: tNavigationProp,
    readonly setPhoto: Function
}

const mapDispatchToProps = (dispatch: ThunkDispatch<iRootReducers, unknown, Action<Object>>) => {
    return{
        setPhoto: (path: Object) => dispatch(setPhotosAction(path))
    };
};

const Camera: React.FC<iProps> = ({navigation, route, setPhoto}) => {
    const ref: any = useRef(null);
    const src = Platform.OS === 'ios' ? "ph://" : "file://";

    const makePhoto = useCallback(async () => {
        const image = await ref.current.capture(true)
        const data = {name: image.name, uri: src + image.uri, type: 'image/jpeg'}
        setPhoto(data);
        navigation.goBack();
    }, []);

    return(
        <View style={base.container}>
            <StatusBar backgroundColor={colors.color8}/>
            <CameraKitCamera
                ref={(cam: any) => ref.current = cam}
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

export default connect(null, mapDispatchToProps)(Camera);
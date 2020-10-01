import React, { useEffect, useCallback, useState } from 'react';
import { connect } from 'react-redux';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Pressable, View, StatusBar } from 'react-native';
import { iRootReducers } from '../types/reduxTypes';
import PhotoBrowser from 'react-native-photo-browser';
import { profileScreenNavigationPropStack, profileScreenRoutePropViewPhoto } from '../types/navigationTypes';
import { setPhotosAction } from '../redux/actions/actions';
import { style } from '../styles/style';
import { colorBlack, colorWhite, iconSize } from '../styles/constantStyle';
import { componentsStyle } from '../styles/componentsStyle';

interface iProps{
    navigation: profileScreenNavigationPropStack,
    route: profileScreenRoutePropViewPhoto,
    setPhoto: Function
}

const mapDispatchToProps = (dispatch: ThunkDispatch<iRootReducers, unknown, Action<Object>>) => {
    return{
        setPhoto: (path: Object) => dispatch(setPhotosAction(path))
    };
};

const ViewPhoto: React.FC<iProps> = ({navigation, route, setPhoto}) => {
    const [images, setImages]: any = useState({});
    const [initialIndex, setInitialIndex] = useState(0);

    useEffect(() => {
        const imgs = route.params.array.map((item: any) => {
            return {photo: item.uri}
        });
        const index = route.params.array.findIndex((item: any) => {
            return item.name === route.params.name
        });
        setImages(imgs);
        setInitialIndex(index);
    }, [route]);

    return(
        <View style={style.container}>
            <StatusBar backgroundColor={colorBlack}/>
            <PhotoBrowser
                mediaList={images}
                initialIndex={initialIndex}
                //displayNavArrows={displayNavArrows}
                //displaySelectionButtons={displaySelectionButtons}
                //displayActionButton={displayActionButton}
                //startOnGrid={startOnGrid}
                //enableGrid={enableGrid}
                useCircleProgress
                //onSelectionChanged={this.onSelectionChanged}
                //onActionButton={this.onActionButton}
                //alwaysDisplayStatusBar={alwaysDisplayStatusBar}
                //customTitle={(index, rowCount) => `${index} sur ${rowCount}`}
            />
            <Pressable
                style={[style.button, componentsStyle.imageGalleryButton, {right: "36%"}]}
                onPress={() => {

                }}
            >
                <Icon name="delete" size={iconSize} color={colorWhite}/>
            </Pressable>
        </View>
    );
};

export default connect(null, mapDispatchToProps)(ViewPhoto);
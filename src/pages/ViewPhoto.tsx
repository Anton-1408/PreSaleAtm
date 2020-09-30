import React, { useEffect, useCallback, useState } from 'react';
import { connect } from 'react-redux';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SmartGallery from "react-native-smart-gallery";
import { Pressable, View, StatusBar } from 'react-native';
import { iRootReducers } from '../types/reduxTypes';
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
    const [images, setImages]: any = useState([]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const imgs = route.params.array.map((item: any) => {
            return {uri: item.uri}
        });
        setImages(imgs);
        setIndex(route.params.index);
    }, []);
    console.warn(images);

    return(
        <View style={style.container}>
            <StatusBar backgroundColor={colorBlack}/>
            <SmartGallery
                images={images}
                loadMinimal={true}
                loadMinimalSize={2}
                //sensitiveScroll={false}
                index={index}
                renderIndicator={() => null}
                onChange={(i: number) => {
                    setIndex(i)
                }}
            />
        </View>
    );
};

export default connect(null, mapDispatchToProps)(ViewPhoto);
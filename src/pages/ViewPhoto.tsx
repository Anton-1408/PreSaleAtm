import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Pressable, View, StatusBar, Text } from 'react-native';
import ImageView from "react-native-image-viewing";
import { iRootReducers } from '../types/reduxTypes';
import { tNavigationProp, tRoutePropViewPhoto } from '../types/navigationTypes';
import { setPhotosAction } from '../redux/actions/actions';
import { style } from '../styles/style';
import { colorBlack, colorWhite, iconSize, iconSizeBar } from '../styles/constantStyle';
import { componentsStyle } from '../styles/componentsStyle';

interface iProps{
    readonly route: tRoutePropViewPhoto,
    readonly navigation: tNavigationProp,
    readonly setPhoto: Function
}

const mapDispatchToProps = (dispatch: ThunkDispatch<iRootReducers, unknown, Action<Object>>) => {
    return{
        setPhoto: (path: Object) => dispatch(setPhotosAction(path))
    };
};

const ViewPhoto: React.FC<iProps> = ({navigation, route, setPhoto}) => {
    const [images, setImages]: any = useState([]);
    const [initialIndex, setInitialIndex] = useState(0);

    useEffect(() => {
        const imgs: any = route.params.array;
        const index: number = route.params.array.findIndex((item: any) => {
            return item.name === route.params.name
        });
        setInitialIndex(index);
        setImages(imgs);
    }, []);

    return(
        <View style={style.container}>
            <StatusBar backgroundColor={colorBlack}/>
            <ImageView
                images={images}
                imageIndex={initialIndex}
                visible={true}
                presentationStyle="fullScreen"
                swipeToCloseEnabled={false}
                onRequestClose={() => {
                    navigation.goBack()
                }}
                HeaderComponent={(index) => (
                    <View style={componentsStyle.photoViewHeader}>
                        <Text style={componentsStyle.photoViewTitle}>
                            {images.length > 0 ? images[index.imageIndex].name : ''}
                        </Text>
                        <Pressable
                            style={componentsStyle.photoViewButtonClose}
                            onPress={() => {
                                navigation.goBack()
                            }}
                        >
                            <Icon name='close' size={iconSizeBar} color={colorWhite}/>
                        </Pressable>
                    </View>
                )}
                FooterComponent={(index) => (
                    <Pressable
                        style={componentsStyle.buttonDeletePhoto}
                        onPress={() => {
                            setPhoto(images[index.imageIndex]);
                            navigation.goBack();
                        }}
                    >
                        <Icon name="delete" size={iconSize} color={colorWhite}/>
                    </Pressable>
                )}
            />
        </View>
    );
};

export default connect(null, mapDispatchToProps)(ViewPhoto);
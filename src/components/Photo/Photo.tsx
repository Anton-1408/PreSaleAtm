import React, { useState, useEffect } from 'react';
import { View, Pressable, FlatList, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { iconSize } from '../../styles/constants';
import { colors, base } from '../../styles';
import { iRootReducers } from '../../types/reduxTypes';
import { useSelector, useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { styles } from './styles';
import { countImageRow } from '../../lib/galleryHelper';
import { tNavigationProp } from '../../types/navigationTypes';
import { selectorPhotoAction } from '../../redux/selectors/appStateSelectors';
import { setPhotosAction } from '../../redux/actions/actions';

interface iProps{
    readonly initialState: any,
    readonly setResult: Function,
};

const Photo: React.FC<iProps> = ({ initialState, setResult }) => {
    const navigation: tNavigationProp = useNavigation();
    const [images, setImages] = useState([]);
    const dispatch: Dispatch = useDispatch();
    const photoAction: any = useSelector(
        (state: iRootReducers) => selectorPhotoAction(state)
    );

    const removePhotosFromStore = () => {
        dispatch(setPhotosAction([]));
    };

    useEffect(() => {
        return removePhotosFromStore;
    }, [])

    useEffect(() => {
        setImages((prev: any) => {
            if(Array.isArray(photoAction)){
                const newState: any = [...prev, ...photoAction];
                return newState;
            }
            else{
                const arrImg: any = [...prev];
                const findeImg = arrImg.findIndex((item: any) => {
                    return item.name === photoAction.name;
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
                keyExtractor={ (item: any) => item.name }
                style={base.imagesList}
                numColumns={countImageRow()}
                renderItem={({item}) => (
                    <Pressable
                        style={base.imageContainer}
                        onPress={() => {
                            navigation.navigate('ViewPhoto', {
                                name: item.name,
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
                        navigation.navigate('Camera')
                    }}
                >
                    <Icon name='camera-enhance' size={iconSize} color={colors.color0}/>
                </Pressable>
            </View>
            <Pressable
                style={[base.button, styles.buttonGallery]}
                onPress={() => {
                    navigation.navigate('Gallery')
                }}
            >
                <Icon name='folder-image' size={iconSize} color={colors.color0}/>
            </Pressable>
        </View>
    );
};

export default Photo;
import React from 'react';
import { PermissionsAndroid,Dimensions } from 'react-native';
import CameraRoll from "@react-native-community/cameraroll";

export const getAccessGallery = async (): Promise<string> => {
    const granted: string = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE);
    return granted;
};

export const countImageRow = (): number =>{
    const screenWidth: number = Dimensions.get('window').width;
    const imegeWidth: number = 110;
    const countImage = Math.floor(screenWidth / imegeWidth);
    return countImage;
};

export const getPhotos = (setPhoto: Function): void => {
    CameraRoll.getPhotos({
        first: 50,
        assetType: 'Photos',
        include: ['filename']
    })
    .then((data) => {
        const assets = data.edges;
        const images = assets.map((item) => {
            const image = item.node;
            const photoData = {
                name: image.image.filename,
                uri: image.image.uri,
                type: image.type,
                check: false
            };
            return photoData;
        });
        setPhoto(images)
    });
};

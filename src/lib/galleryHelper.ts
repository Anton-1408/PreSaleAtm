import { PermissionsAndroid,Dimensions } from 'react-native';
import CameraRoll from "@react-native-community/cameraroll";
import { sizeImage } from '../styles/constantStyle';

export const getAccessGallery = async (): Promise<string> => {
    const granted: string = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE);
    return granted;
};

export const countImageRow = (): number =>{
    const screenWidth: number = Dimensions.get('window').width;
    const imegeWidth: number = sizeImage;
    const countImage: number = Math.floor(screenWidth / imegeWidth);
    return countImage;
};

export const getPhotos = (setImages: Function, countImages: number): void => {
    CameraRoll.getPhotos({
        first: countImages,
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
        setImages((prev: any) => {
            const list: any = images.map((item: any, index: number) => {
                return {...item, check: prev[index] ? prev[index].check : item.check}
            });
            return list;
        })
    });
};

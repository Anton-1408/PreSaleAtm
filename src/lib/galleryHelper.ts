import { PermissionsAndroid,Dimensions } from 'react-native';
import CameraRoll from "@react-native-community/cameraroll";

import { ElementGalleryPhoto } from 'types/elementType';
import { sizeImage } from 'styles/constants';

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
    const images: ElementGalleryPhoto[] = assets.map((item) => {
      const image = item.node;
      const photoData = {
        name: image.image.filename,
        uri: image.image.uri,
        type: image.type,
        check: false
      };
      return photoData;
    });
    setImages((prev: ElementGalleryPhoto[]) => {
      const list = images.map((image: ElementGalleryPhoto, index: number) => {
        return {...image, check: prev[index] ? prev[index].check : image.check}
      });
      return list;
    })
  });
};

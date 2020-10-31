import { StyleSheet } from 'react-native';
import { colorTitle, colorWhite, sizeImage } from './constants';

export const base = StyleSheet.create({
    buttonBarContainer:{
        marginRight: 15,
    },
    container:{
        flex: 1,
        backgroundColor: colorWhite,
    },
    button:{
        position: 'absolute',
        height: 80,
        width: 80,
        borderRadius: 40,
        bottom: 40,
        right: '5%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#4527A0",
    },
    containerData:{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderBottomColor: '#E0E0E0',
        borderBottomWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    containerText:{
        width: '85%',
    },
    title: {
        fontSize: 18,
        fontFamily: 'OpenSans-SemiBold',
        color: colorTitle,
    },
    comment:{
        fontSize: 15,
        fontFamily: 'OpenSans-Light',
    },
    percent:{
        fontSize: 20,
        fontFamily: 'OpenSans-ExtraBold',
        color: '#43A047',
    },
    imageStyle:{
        width: sizeImage,
        height: sizeImage
    },
    imageContainer:{
        marginVertical: 1,
        marginHorizontal: 1,
    },
    imagesList:{
        paddingRight: 1,
        paddingVertical: 1,
    }
});
import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';
import { colorTitle, colorWhite, sizeImage } from './constantStyle';

export const style = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colorWhite,
    },
    button:{
        position: 'absolute',
        height: normalize(80),
        width: normalize(80),
        borderRadius: normalize(40),
        bottom: normalize(40),
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
        paddingVertical: normalize(10),
        paddingHorizontal: normalize(10),
    },
    containerText:{
        width: '85%',
    },
    title: {
        fontSize: normalize(18),
        fontFamily: 'OpenSans-SemiBold',
        color: colorTitle,
    },
    comment:{
        fontSize: normalize(15),
        fontFamily: 'OpenSans-Light',
    },
    percent:{
        fontSize: normalize(20),
        fontFamily: 'OpenSans-ExtraBold',
        color: '#43A047',
    },
    headerTitle:{
        fontSize: normalize(20),
        fontFamily: 'OpenSans-SemiBold',
        color: colorWhite
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
        paddingHorizontal: normalize(5),
        paddingVertical: normalize(5),
    }
});
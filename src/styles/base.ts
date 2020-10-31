import { StyleSheet } from 'react-native';
import { colors } from '.';
import { sizeImage } from './constants';

export default StyleSheet.create({
    buttonBarContainer:{
        marginRight: 15,
    },
    container:{
        flex: 1,
        backgroundColor: colors.color0,
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
        backgroundColor: colors.color18,
    },
    containerData:{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderBottomColor: colors.color16,
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
        color: colors.color1,
    },
    comment:{
        fontSize: 15,
        fontFamily: 'OpenSans-Light',
    },
    percent:{
        fontSize: 20,
        fontFamily: 'OpenSans-ExtraBold',
        color: colors.color19,
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
import { StyleSheet } from 'react-native';
import { colorWhite, colorBlack } from './constantStyle';

export const componentsStyle =  StyleSheet.create({
    settingContainer:{
        marginTop: 40,
        marginHorizontal: 2,
        flexDirection: 'row',
        alignItems: 'center'
    },
    settingTextInput:{
        borderBottomWidth: 1,
        fontSize: 20,
        fontFamily: 'OpenSans-Regular',
        width: '80%',
        color: '#5E35B1',
        borderBottomColor: '#5E35B1',
    },
    settingText:{
        fontSize: 20,
        marginLeft: 5,
        fontFamily: 'OpenSans-Regular',
        color: '#5E35B1',
    },
    deviceContainer:{
        width: '70%',
    },
    deviceContainerId:{
        height: 70,
        width: 70,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    deviceId:{
        fontSize: 15,
        color: colorWhite,
        fontFamily: 'OpenSans-Bold',
    },
    deviceInformationContainer:{
        paddingLeft: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    deviceName:{
        fontSize: 14,
        color: '#424242',
        fontFamily: 'OpenSans-Bold',
    },
    deviceInformation:{
        marginLeft: 5,
        fontSize: 15,
        fontFamily: 'OpenSans-Italic',
    },
    stepDataContainer:{
        paddingVertical: 10,
        borderBottomWidth: 1,
        width: '100%',
        paddingHorizontal: '5%',
        borderBottomColor: '#E0E0E0',
    },
    stepDataInformation:{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    actionContainerComment:{
        backgroundColor: '#EDE7F6',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 60,
    },
    actionTypeContainer: {
        backgroundColor: colorWhite
    },
    imageGallery:{
        justifyContent: 'center',
        alignItems: 'center'
    },
    galleryContainer:{
        backgroundColor: colorBlack,
        alignItems: 'center',
    },
    imageGalleryButton:{
        backgroundColor: colorBlack
    },
    cameraStyle:{
        flex: 1,
        backgroundColor: colorBlack
    },
    buttonDeletePhoto:{
        alignSelf: 'center',
        marginBottom: 40
    },
    photoViewHeader:{
        width: '100%',
        flexDirection: 'row',
        paddingTop: 40,
        justifyContent: 'space-around',
    },
    photoViewTitle:{
        color: colorWhite,
        fontSize: 20,
        width: '60%',
        fontFamily: 'OpenSans-BoldItalic'
    },
    photoViewButtonClose:{
        backgroundColor: '#616161',
        borderRadius: 20,
        height: 40,
        width: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
});
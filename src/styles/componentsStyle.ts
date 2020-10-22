import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';
import { colorWhite, colorBlack } from './constantStyle';

export const componentsStyle =  StyleSheet.create({
    buttonBarContainer:{
        marginRight: normalize(15),
    },
    settingContainer:{
        marginTop: normalize(40),
        marginHorizontal: normalize(2),
        flexDirection: 'row',
        alignItems: 'center'
    },
    settingTextInput:{
        borderBottomWidth: 1,
        fontSize: normalize(20),
        fontFamily: 'OpenSans-Regular',
        width: '80%',
        color: '#5E35B1',
        borderBottomColor: '#5E35B1',
    },
    settingText:{
        fontSize: normalize(20),
        marginLeft: normalize(5),
        fontFamily: 'OpenSans-Regular',
        color: '#5E35B1',
    },
    searchContainer:{
        height: normalize(40),
        borderRadius: normalize(10),
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: '2%',
        backgroundColor: colorWhite,
        justifyContent: 'space-between',
    },
    searchInput:{
        fontSize: normalize(15),
        width: '80%',
        fontFamily: 'OpenSans-BoldItalic',
    },
    deviceContainer:{
        width: '70%',
    },
    deviceContainerId:{
        height: normalize(70),
        width: normalize(70),
        borderRadius: normalize(10),
        justifyContent: 'center',
        alignItems: 'center'
    },
    deviceId:{
        fontSize: normalize(15),
        color: colorWhite,
        fontFamily: 'OpenSans-Bold',
    },
    deviceInformationContainer:{
        paddingLeft: normalize(10),
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    deviceName:{
        fontSize: normalize(14),
        color: '#424242',
        fontFamily: 'OpenSans-Bold',
    },
    deviceInformation:{
        marginLeft: normalize(5),
        fontSize: normalize(15),
        fontFamily: 'OpenSans-Italic',
    },
    stepDataContainer:{
        paddingVertical: normalize(10),
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
    stepStatusContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    stepStatusText:{
        fontSize: normalize(15),
        fontFamily: 'OpenSans-Bold',
        color: '#37474F'
    },
    stepStatusTitle:{
        fontSize: normalize(15),
        fontFamily: 'OpenSans-BoldItalic',
    },
    stepStatusRequired:{
        color: '#7B1FA2'
    },
    stepStatusImportant:{
        color: '#DD2C00'
    },
    actionContainerComment:{
        backgroundColor: '#EDE7F6',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: normalize(60),
    },
    containerFilesContent:{
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    contentPanelComment:{
        marginHorizontal: normalize(10)
    },
    inputTypeStyle:{
        fontSize: normalize(20),
        fontFamily: 'OpenSans-Regular',
    },
    containerStyleCheckBox:{
        backgroundColor: colorWhite,
        borderColor: colorWhite
    },
    textBoxStyle:{
        fontSize: normalize(15),
        width: '80%',
        fontFamily: 'OpenSans-Regular'
    },
    checkBoxStyle:{
        backgroundColor: colorWhite,
        alignSelf: 'center',
        marginTop: '50%'
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
        alignItems: 'center'
    },
    imageGalleryButton:{
        backgroundColor: colorBlack
    },
    cameraStyle:{
        flex: 1,
        backgroundColor: colorBlack
    },
    photoTypeContainer:{
        height: '95%',
        width: '100%',
        alignItems: 'center'
    },
    buttonGallery:{
        bottom: normalize(230),
    },
    buttonCamera:{
        bottom: normalize(130)
    },
    buttonDeletePhoto:{
        alignSelf: 'center',
        marginBottom: normalize(40)
    },
    photoViewHeader:{
        width: '100%',
        flexDirection: 'row',
        paddingTop: normalize(40),
        justifyContent: 'space-around',
    },
    photoViewTitle:{
        color: colorWhite,
        fontSize: normalize(20),
        width: '60%',
        fontFamily: 'OpenSans-BoldItalic'
    },
    photoViewButtonClose:{
        backgroundColor: '#616161',
        borderRadius: normalize(20),
        height: normalize(40),
        width: normalize(40),
        justifyContent: 'center',
        alignItems: 'center'
    },
    noActionContainer:{
        alignSelf: 'center',
        marginTop: '50%'
    },
    noActionText:{
        fontSize: normalize(20),
        fontFamily: 'OpenSans-BoldItalic',
        color: '#9E9E9E'
    },
    extraPhotoText:{
        marginLeft: normalize(10)
    },
    imageConteinerPanel:{
        alignItems: 'center'
    }
});
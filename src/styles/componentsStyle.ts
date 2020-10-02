import { StyleSheet } from 'react-native';
import { colorWhite, colorBlack } from './constantStyle';

export const componentsStyle =  StyleSheet.create({
    buttonBarContainer:{
        marginRight: 15,
    },
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
    searchContainer:{
        height: 40,
        borderRadius: 10,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: '2%',
        backgroundColor: colorWhite,
        justifyContent: 'space-between',
    },
    searchInput:{
        fontSize: 15,
        width: '80%',
        fontFamily: 'OpenSans-BoldItalic',
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
        borderBottomColor: '#BDBDBD',
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
        fontSize: 15,
        fontFamily: 'OpenSans-Bold',
        color: '#37474F'
    },
    stepStatusTitle:{
        fontSize: 15,
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
        height: 60,
    },
    conteinerContentPanel: {
        paddingHorizontal: 10
    },
    containerFilesContent:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    },
    inputTypeStyle:{
        fontSize: 20,
        fontFamily: 'OpenSans-Regular',
    },
    containerStyleCheckBox:{
        backgroundColor: colorWhite,
        borderColor: colorWhite
    },
    textBoxStyle:{
        fontSize: 15,
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
    imagesContainer:{
        justifyContent: 'space-between'
    },
    imageGalleryContainer:{
        paddingVertical: 4
    },
    imageGalleryButton:{
        backgroundColor: colorBlack
    },
    cameraStyle:{
        flex: 1,
        backgroundColor: colorBlack
    },
    photoTypeContainer:{
        height: '100%',
        width: '100%'
    },
    buttonGallery:{
        bottom: 300,
    },
    buttonCamera:{
        bottom: 200
    },
    buttonDeletePhoto:{
        alignSelf: 'center',
        marginBottom: 40
    }
});
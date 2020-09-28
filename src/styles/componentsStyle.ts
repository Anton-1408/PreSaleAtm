import { StyleSheet } from 'react-native';
import { colorWhite } from './constantStyle';

export const componentsStyle =  StyleSheet.create({
    buttonBarContainer:{
        marginRight: 15,
    },
    settingContainer:{
        flexDirection: 'row',
        marginTop: 40,
        marginHorizontal: 2,
        alignItems: 'center'
    },
    settingTextInput:{
        width: '80%',
        borderBottomWidth: 1,
        borderBottomColor: '#5E35B1',
        fontSize: 20,
        fontFamily: 'OpenSans-Regular',
        color: '#5E35B1',
    },
    settingText:{
        fontSize: 20,
        fontFamily: 'OpenSans-Regular',
        color: '#5E35B1',
        marginLeft: 5
    },
    searchContainer:{
        backgroundColor: colorWhite,
        width: '100%',
        height: 40,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: '2%',
        justifyContent: 'space-between',
    },
    searchInput:{
        width: '80%',
        fontSize: 15,
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
        color: colorWhite,
        fontSize: 15,
        fontFamily: 'OpenSans-Bold',
    },
    deviceInformationContainer:{
        paddingLeft: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    deviceName:{
        color: '#424242',
        fontSize: 14,
        fontFamily: 'OpenSans-Bold',
    },
    deviceInformation:{
        marginLeft: 5,
        fontSize: 15,
        fontFamily: 'OpenSans-Italic',
    },
    stepDataContainer:{
        width: '100%',
        paddingHorizontal: '5%',
        paddingVertical: 10,
        borderBottomWidth: 1,
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
        width: "80%",
        fontSize: 15,
        fontFamily: 'OpenSans-Regular'
    },
    checkBoxStyle:{
        backgroundColor: colorWhite,
        alignSelf: 'center',
        marginTop: '50%'
    },
    actionTypeContainer: {
        backgroundColor: colorWhite
    }
});
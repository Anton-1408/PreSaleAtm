import { StyleSheet } from 'react-native';

export const componentsStyle =  StyleSheet.create({
    buttonSetting:{
        color: '#ffffff',
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
        backgroundColor: '#ffffff',
        width: '100%',
        height: 40,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: '2%'
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
        color: '#FFFFFF',
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
    }
});
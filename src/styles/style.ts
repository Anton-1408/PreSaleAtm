import { StyleSheet } from 'react-native';
import { colorTitle, colorWhite } from './constantStyle';

export const style = StyleSheet.create({
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
        borderBottomColor: '#9E9E9E',
        borderBottomWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    containerText:{
        width: '85%',
    },
    containerPercent:{

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
    headerTitle:{
        fontSize: 20,
        fontFamily: 'OpenSans-SemiBold',
        color: colorWhite
    },
    imageStyle:{
        width: 115,
        height: 115
    }
});
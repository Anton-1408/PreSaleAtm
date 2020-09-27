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
        backgroundColor: "#4527A0",
        bottom: 40,
        right: "5%",
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerData:{
        width: '100%',
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#BDBDBD',
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
        marginLeft: 5,
        fontFamily: 'OpenSans-Light',
    },
    percent:{
        fontSize: 17,
        fontFamily: 'OpenSans-ExtraBold',
        color: '#43A047',
    },
    headerTitle:{
        fontSize: 20,
        fontFamily: "OpenSans-SemiBold",
        color: colorWhite
    },
    imageStyle:{
        width: 110,
        height: 110
    }
});
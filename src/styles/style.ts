import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#ffffff",
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
        paddingHorizontal: '5%',
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
        color: '#F57C00',
    },
    comment:{
        fontSize: 15,
        marginLeft: 5,
        fontFamily: 'OpenSans-Light',
    },
    percent:{
        fontSize: 18,
        fontFamily: 'OpenSans-ExtraBold',
        color: '#43A047',
    },
    headerTitle:{
        fontSize: 20,
        fontFamily: "OpenSans-SemiBold",
        color: '#ffffff'
    }
});
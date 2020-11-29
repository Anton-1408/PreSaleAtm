import { StyleSheet } from 'react-native';
import { colors } from 'styles';

export const styles = StyleSheet.create({
  container:{
    width: '70%',
  },
  containerId:{
      height: 70,
      width: 70,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center'
  },
  deviceId:{
    fontSize: 15,
    color: colors.color0,
    fontFamily: 'OpenSans-Bold',
  },
  containerInformation:{
      paddingLeft: 10,
      flexDirection: 'row',
      flexWrap: 'wrap',
  },
  name:{
      fontSize: 14,
      color: colors.color20,
      fontFamily: 'OpenSans-Bold',
  },
  deviceInformation:{
      marginLeft: 5,
      fontSize: 15,
      fontFamily: 'OpenSans-Italic',
  },
});
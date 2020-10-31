import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

export const styles = StyleSheet.create({
  container:{
    height: 40,
    borderRadius: 10,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '2%',
    backgroundColor: colors.color0,
    justifyContent: 'space-between',
  },
  inputStyle:{
    fontSize: 15,
    width: '80%',
    fontFamily: 'OpenSans-BoldItalic',
  },
});
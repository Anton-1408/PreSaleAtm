import { StyleSheet } from 'react-native';
import { colorWhite } from '../../styles/constants';

export const styles = StyleSheet.create({
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
  buttonDeletePhoto:{
    alignSelf: 'center',
    marginBottom: 40
  },
});
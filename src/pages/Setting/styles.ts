import { StyleSheet } from 'react-native';
import { colors } from 'styles';

export const styles = StyleSheet.create({
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
    color: colors.color15,
    borderBottomColor: colors.color15,
  },
  settingText:{
      fontSize: 20,
      marginLeft: 5,
      fontFamily: 'OpenSans-Regular',
      color: colors.color15,
  },
});
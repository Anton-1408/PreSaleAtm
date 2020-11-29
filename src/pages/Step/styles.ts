import { StyleSheet } from 'react-native';
import { colors } from 'styles';

export const styles = StyleSheet.create({
  containerData:{
    paddingVertical: 10,
    borderBottomWidth: 1,
    width: '100%',
    paddingHorizontal: '5%',
    borderBottomColor: colors.color16,
  },
  dataInformation:{
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
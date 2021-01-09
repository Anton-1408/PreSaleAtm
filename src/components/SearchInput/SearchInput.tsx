import React, { useRef } from 'react';
import { View, TextInput, Pressable } from 'react-native';
import IconF from 'react-native-vector-icons/FontAwesome5';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import { Dispatch } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { routes } from 'navigation/routes'
import { styles } from './styles';
import { RootReducers } from 'types/reduxTypes';
import { colors } from 'styles';
import { NavigationProp } from 'types/navigationTypes';
import { colorPress } from 'styles/constants';
import { setSerialNumberDevice } from 'redux/actions/actions';
import { selectorSerialNumbDevice } from 'redux/selectors/appStateSelectors';
import { ClearInput } from 'components';

const SearchInput: React.FC<SearchInputProps> = ({}) => {
  const navigation: NavigationProp = useNavigation();
  const refInput = useRef<TextInput>(null);
  const dispatch = useDispatch();
  const serialNumber: string = useSelector(
    (state: RootReducers) => selectorSerialNumbDevice(state)
  );

  return(
    <View style={styles.container}>
      <IconF name='search' color={colors.color9} size={20}/>
      <TextInput
        ref={refInput}
        value={serialNumber}
        placeholder='Серийный номер'
        keyboardType={'numeric'}
        onChangeText={(text) => {
          dispatch(setSerialNumberDevice(text))
        }}
        style={styles.inputStyle}
      />
      <ClearInput
        focus={refInput.current?.isFocused()}
        serialNumber={serialNumber}
        onClear={() => {
          dispatch(setSerialNumberDevice(''))
        }}
      />
      <Pressable
        style={({ pressed }) => [colorPress(pressed)]}
        onPress={() => {
          navigation.navigate(routes.ScanBarCode);
        }}
      >
        <IconM name='barcode-scan' color={colors.color9} size={22}/>
      </Pressable>
    </View>
  );
}

interface SearchInputProps{ };

export default SearchInput;
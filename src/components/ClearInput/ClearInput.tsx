import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from 'styles';
import style from './styles';

const ClearInput: React.FC<ClearInputProps> = ({ focus, serialNumber, onClear }) => {
  if (serialNumber && focus) {
    return(
      <TouchableOpacity
        style={style.container}
        onPress={onClear.bind(this)}
      >
        <Icon name='close' size={15} color={colors.color0}/>
      </TouchableOpacity>
    )
  } else {
    return(
      <View style={style.emptyConteiner}>
      </View>
    );
  }
};

interface ClearInputProps {
  focus: boolean | undefined,
  serialNumber: string,
  onClear: Function
}

export default ClearInput;
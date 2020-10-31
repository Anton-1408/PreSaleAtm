import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import { tNavigationProp, tRoutePropSetting } from '../../types/navigationTypes';
import { iconSize } from '../../styles/constants';
import { saveSetting, getSetting } from '../../lib/settingHelper';
import { getVersion } from 'react-native-device-info';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors, base } from '../../styles';

interface iProps{
  readonly route: tRoutePropSetting,
  readonly navigation: tNavigationProp,
};

const Setting: React.FC<iProps> = ({navigation}) => {
  const [userId, setUserId] = useState<string>("");

  useEffect(() => {
    getSetting(setUserId);
  }, []);

  return(
    <View style={base.container}>
      <View style={styles.settingContainer}>
        <Icon name="account" size={iconSize} color={colors.color15}/>
        <TextInput
          value={userId}
          style={styles.settingTextInput}
          onChangeText={(text) => {
            setUserId(text);
          }}
          keyboardType={"numeric"}
        />
      </View>
      <View style={styles.settingContainer}>
        <Icon name="cellphone-information" size={iconSize} color={colors.color15}/>
        <Text style={styles.settingText}>{getVersion()}</Text>
      </View>
      <Pressable
          style={base.button}
          onPress={() => {
            saveSetting(userId).then(() => {
              navigation.goBack()
            })
          }}
      >
        <Icon name="content-save-cog-outline" size={iconSize} color={colors.color0}/>
      </Pressable>
    </View>
  )
};

export default Setting;

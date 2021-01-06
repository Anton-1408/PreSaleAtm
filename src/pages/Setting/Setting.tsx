import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { getVersion } from 'react-native-device-info';

import { NavigationProp, RoutePropSetting } from 'types/navigationTypes';
import { iconSize } from 'styles/constants';
import { saveSetting, getSetting } from 'lib/settingHelper';
import { styles } from './styles';
import { colors, base } from 'styles';

const Setting: React.FC<SettingProps> = ({navigation}) => {
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
          saveSetting(userId)
          .then(() => {
            navigation.goBack()
          })
        }}
      >
        <Icon name="content-save-cog-outline" size={iconSize} color={colors.color0}/>
      </Pressable>
    </View>
  )
};

interface SettingProps{
  route: RoutePropSetting,
  navigation: NavigationProp,
};

export default Setting;

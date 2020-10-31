import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import { tNavigationProp, tRoutePropSetting } from '../../types/navigationTypes';
import { base } from '../../styles/base';
import { iconSize, colorWhite } from '../../styles/constants';
import { saveSetting, getSetting } from '../../lib/settingHelper';
import { getVersion } from 'react-native-device-info';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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
        <Icon name="account" size={iconSize} color="#5E35B1"/>
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
        <Icon name="cellphone-information" size={iconSize} color="#5E35B1"/>
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
        <Icon name="content-save-cog-outline" size={iconSize} color={colorWhite}/>
      </Pressable>
    </View>
  )
};

export default Setting;

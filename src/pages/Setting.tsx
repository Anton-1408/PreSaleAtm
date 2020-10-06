import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { tNavigationProp, tRoutePropSetting } from '../types/navigationTypes';
import { style } from '../styles/style';
import { componentsStyle } from '../styles/componentsStyle';
import { iconSize, colorWhite } from '../styles/constantStyle';
import { saveSetting, getSetting } from '../lib/settingHelper';
import { getVersion } from 'react-native-device-info';

interface iProps{
  readonly route: tRoutePropSetting,
  readonly navigation: tNavigationProp,
};

const Setting: React.FC<iProps> = ({navigation}) => {
  const [userId, setUserId] = useState("");

  useEffect(() => {
    getSetting(setUserId);
  }, []);

  return(
    <View style={style.container}>
      <View style={componentsStyle.settingContainer}>
        <Icon name="account" size={iconSize} color="#5E35B1"/>
        <TextInput
          value={userId}
          style={componentsStyle.settingTextInput}
          onChangeText={(text) => {
            setUserId(text);
          }}
          keyboardType={"numeric"}
        />
      </View>
      <View style={componentsStyle.settingContainer}>
        <Icon name="cellphone-information" size={iconSize} color="#5E35B1"/>
        <Text style={componentsStyle.settingText}>{getVersion()}</Text>
      </View>
      <Pressable
          style={style.button}
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

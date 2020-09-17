import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import {profileScreenNavigationPropSetting, profileScreenRoutePropSetting} from '../types/navigationTypes';
import { style } from '../styles/style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { componentsStyle } from '../styles/componentsStyle';
import { iconSize } from '../styles/constantStyle';
import { saveSetting, getSetting } from '../lib/dbSetting';

interface iProps{
  navigation: profileScreenNavigationPropSetting,
  route: profileScreenRoutePropSetting,
};

const Setting: React.FC<iProps> = (props) => {
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
        <Text style={componentsStyle.settingText}>Версия: 1.0.0</Text>
      </View>
      <Pressable 
          style={style.button}
          onPress={() => {
            saveSetting(userId);
          }}
      >
        <Icon name="content-save-cog-outline" size={iconSize} color="#ffffff"/>
      </Pressable>
    </View>
  )
};

export default Setting;

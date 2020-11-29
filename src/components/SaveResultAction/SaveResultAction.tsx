import React, { useCallback } from 'react';
import { Pressable } from 'react-native';
import { useSelector } from 'react-redux';
import { useRoute, useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { RootReducers } from 'types/reduxTypes';
import { selectorActionResult } from 'redux/selectors/appStateSelectors';
import { typeAction } from 'types/typeAction';
import { saveResult, deletePhoto, savePhotoAction } from 'lib/actionHelper';
import { iconSize } from 'styles/constants';
import { colors, base } from 'styles';
import { RoutePropAction, NavigationProp } from 'types/navigationTypes';

const SaveResultAction: React.FC<SaveResultActionProps> = ({ actionKey, deviceKey }) => {
  const route: RoutePropAction = useRoute();
  const navigation: NavigationProp = useNavigation();
  const resultAction = useSelector(
    (state: RootReducers) => selectorActionResult(state)
  );

  const setResult = useCallback(() => {
    const type = route.params.type;
    if(type === typeAction.photo){
      deletePhoto(actionKey, deviceKey);
      saveResult(actionKey, deviceKey, resultAction.length);
      savePhotoAction(actionKey, deviceKey, resultAction);
    }
    else{
      saveResult(actionKey, deviceKey, resultAction);
    }
    navigation.goBack();
  }, [resultAction]);

  return(
    <Pressable
      style={base.button}
      onPress={setResult}
    >
      <Icon name='check' size={iconSize} color={colors.color0}/>
    </Pressable>
  );
};

interface SaveResultActionProps{
  deviceKey: number,
  actionKey: number,
};

export default SaveResultAction;
import React, { useCallback } from 'react';
import { Pressable } from 'react-native';
import { style } from '../../styles/style';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useRoute, useNavigation } from '@react-navigation/native';
import { iRootReducers } from '../../types/reduxTypes';
import { selectorActionResult } from '../../redux/selectors/appStateSelectors';
import { typeAction } from '../../types/typeAction';
import { saveResult, deletePhoto, savePhotoAction } from '../../lib/actionHelper';
import { iconSize, colorWhite } from '../../styles/constantStyle';
import { tRoutePropAction, tNavigationProp } from '../../types/navigationTypes';

interface iProps{
    readonly resultAction?: any,
    readonly deviceKey: number,
    readonly actionKey: number,
};

const mapStateToProps = (state: iRootReducers) => {
    return{
        resultAction: selectorActionResult(state),
    }
};

const SaveResult: React.FC<iProps> = ({resultAction, actionKey, deviceKey}) => {
    const route: tRoutePropAction = useRoute();
    const navigation: tNavigationProp = useNavigation();

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
            style={style.button}
            onPress={setResult}
        >
            <Icon name='check' size={iconSize} color={colorWhite}/>
        </Pressable>
    );
};

export default connect(mapStateToProps, null)(SaveResult);
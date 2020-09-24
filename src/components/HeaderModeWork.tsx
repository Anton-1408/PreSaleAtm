import React from 'react';
import { connect } from 'react-redux';
import { profileScreenNavigationPropStack } from '../types/navigationTypes';
import { iRootReducers } from '../types/reduxTypes';
import { HeaderTitle } from './HeaderTitle';
import { SearchInput } from './SearchInput';

interface iProps{
    navigation: profileScreenNavigationPropStack,
    modeWork?: string,
};

const mapStateToProps = (state: iRootReducers) => {
    return{
        modeWork: state.holderKeysReducer.modeWork
    }
};

const HeaderModeWork: React.FC<iProps> = ({navigation, modeWork}) => {
    if(modeWork === 'deviceMode'){
        return(
            <SearchInput
                navigation={navigation}
            />
        )
    }
    else{
        return(
            <HeaderTitle
                title='Чек-Листы'
            />
        )
    }
}

export default connect(mapStateToProps, null)(HeaderModeWork)
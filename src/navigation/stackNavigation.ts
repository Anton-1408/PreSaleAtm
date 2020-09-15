import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { rootStackParams } from '../types/navigationTypes';

export default createStackNavigator<rootStackParams>();
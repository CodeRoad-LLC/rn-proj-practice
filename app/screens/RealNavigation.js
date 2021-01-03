import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from '../navigation/AuthNavigator';
import navigationTheme from '../navigation/navigationTheme';


function RealNavigation(props) {
  return (
    <NavigationContainer theme={navigationTheme}>
        <StackNavigator/>
    </NavigationContainer>
  );
}


export default RealNavigation;
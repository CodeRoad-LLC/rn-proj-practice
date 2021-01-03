import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';


const Stack = createStackNavigator();
const StackNavigator = () => (
    <Stack.Navigator 
        initialRouteName="welcome"
        screenOptions={{headerShown: false}}
        > 
        <Stack.Screen name='welcome' 
            component={WelcomeScreen}
        />
        <Stack.Screen name='login' component={LoginScreen}/>
        <Stack.Screen name='register' component={RegisterScreen}/>
    </Stack.Navigator>
);

export default StackNavigator;
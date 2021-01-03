import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import Screen from '../components/Screen';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import ListingScreen from './ListingScreen';
import ListEditScreen from './ListEditScreen';
import AccountScreen from './AccountScreen';
import MainScreen from './MainScreen';
import MessageScreen from './MessageScreen';
import colors from '../config/colors';
import TabNavigator from '../navigation/AppNavigator';


function MainNavigation(props) {
  return (
    <NavigationContainer>
        <TabNavigator/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default MainNavigation;
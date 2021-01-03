import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import Screen from '../components/Screen';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import ListingScreen from '../screens/ListingScreen';
import ListEditScreen from '../screens/ListEditScreen';
import AccountScreen from '../screens/AccountScreen';
import MainScreen from '../screens/MainScreen';
import MessageScreen from '../screens/MessageScreen';
import colors from '../config/colors';
import NewListingButton from './NewListingButton';
import routes from './routes';

const Stack = createStackNavigator();
const StackNavigator = () => (
    <Stack.Navigator 
        mode="modal"
        initialRouteName="Listings"
        screenOptions={{headerShown: false}}
        > 
        <Stack.Screen name='Listings' component={MainScreen}/>
        <Stack.Screen 
            name='ListDetails' 
            component={ListingScreen}
            />
    </Stack.Navigator>
);

const StackAcount = () => (
    <Stack.Navigator 
        initialRouteName="account"
        screenOptions={{headerShown: false}}
        > 
        <Stack.Screen name='account' component={AccountScreen}/>
        <Stack.Screen 
            name='myMessage' 
            component={MessageScreen}
            />
    </Stack.Navigator>
);

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
    <Tab.Navigator
        tabBarOptions={{
            activeBackgroundColor: 'white',
            activeTintColor: colors.primary,
            inactiveBackgroundColor: 'white',
            inactiveTintColor: colors.grey,
        }}
    >
        <Tab.Screen 
            name ='home' 
            component={StackNavigator} 
            options={{tabBarIcon: ({size, color}) => (<MaterialCommunityIcons name='home' size={size} color={color}/>)}}/>

        <Tab.Screen 
            name ='ListEdit' 
            component={ListEditScreen} 
            options={({navigation, route}) => ({
                tabBarButton: () => 
                    <NewListingButton
                        onPress={
                            () => navigation.navigate(routes.LISTING_EDIT)
                        }
                    /> ,
                tabBarIcon: ({size, color}) => 
                                (<MaterialCommunityIcons name='plus-circle' size={size} color={color}/>
                                ),
                                })
            }/>

        <Tab.Screen 
            name ='account' 
            component={StackAcount}
            options={{tabBarIcon: ({size, color}) => (<MaterialCommunityIcons name='account' size={size} color={color}/>)}}
            />
    </Tab.Navigator>
);

export default TabNavigator;
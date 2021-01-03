import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import Screen from '../components/Screen';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

const Link = () => {
    const navigation = useNavigation();
    return(
        <Button
            title="go to TweetsDetail" 
            onPress={() => navigation.navigate('TweetDetails', {id: 1})}
        />
    );
}

const Tweets = () => (
    <Screen>
        <Text>Tweets</Text>
        <Link/>
    </Screen>
);

const TweetsDetails = ({route}) => (
    <Screen>
        <Text>Tweet Details {route.params.id}</Text>
    </Screen>
);

const Stack = createStackNavigator();
const StackNavigator = () => (
    <Stack.Navigator 
        initialRouteName="Tweets"
        screenOptions={{headerStyle: {backgroundColor: 'tomato'},
                        headerTintColor: 'white',
                        headerShown: true}}
        > 
        <Stack.Screen name='Tweets' component={Tweets}/>
        <Stack.Screen 
            name='TweetDetails' 
            component={TweetsDetails}
            options={({route}) => {return {title: route.params.id, headerTintColor: 'yellow'};}}
            />
    </Stack.Navigator>
);

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
    <Tab.Navigator
        tabBarOptions={{
            activeBackgroundColor: 'tomato',
            activeTintColor: 'white',
            inactiveBackgroundColor: '#eee',
            inactiveTintColor: 'black',
        }}
    >
        <Tab.Screen 
            name ='screen1' 
            component={StackNavigator} 
            options={{tabBarIcon: ({size, color}) => (<MaterialCommunityIcons name='home' size={size} color={color}/>)}}/>
        <Tab.Screen 
            name ='screen2' 
            component={Screen2}
            options={{tabBarIcon: ({size, color}) => (<MaterialCommunityIcons name='account' size={size} color={color}/>)}}/>
    </Tab.Navigator>
);
const Screen2 = () => (
    <Screen><Text>Hello Dear</Text></Screen>
);

export default function TestNavigation(props){
  return (
    <NavigationContainer>
        {/* <StackNavigator/> */}
        <TabNavigator/>
    </NavigationContainer>
  );
}

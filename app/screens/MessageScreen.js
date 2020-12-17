import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import PersonalProfile from '../components/PersonalProfile';
import Constants from 'expo-constants';
import Screen from '../components/Screen';
//console.log(Constants);

const messages = [
    {
        id: 1,
        title: "T1",
        description: "D1",
        image: require('../assets/mosh.jpg'),
    },
    {
        id: 2,
        title: "T2",
        description: "D2",
        image: require('../assets/mosh.jpg'),
    },
    {
        id: 3,
        title: "T3",
        description: "D3",
        image: require('../assets/mosh.jpg'),
    },
]

function MessageScreen(props) {
    return (
        <Screen>
          <FlatList 
            data={messages}
            keyExtractor={message => message.id.toString()}
            renderItem={({item}) => 
            <PersonalProfile
                name={item.title}
                num_list={item.description}
                avatar={item.image}
            />}
            />  
        </Screen>
        
    );
}

const styles = StyleSheet.create({
    
})

export default MessageScreen;
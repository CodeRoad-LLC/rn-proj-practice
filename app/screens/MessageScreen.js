import React, {useState} from 'react';
import { FlatList, SafeAreaView, StyleSheet, StatusBar, View } from 'react-native';
import PersonalProfile from '../components/PersonalProfile';
import Constants from 'expo-constants';
import Screen from '../components/Screen';
import ListItemSerparator from '../components/ListItemSerparator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';
//console.log(Constants);

const initialMessages = [
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
    const [refresh, setRefresh] = useState(false);
    const [messages, setMessages] = useState(initialMessages);
    
    const handleDelete = message => {
        // Delete the message from messages
        // deltet it from sever
        setMessages(messages.filter(m => m.id !== message.id));
    }

    return (
        <Screen>
          <FlatList 
            data={messages}
            keyExtractor={message => message.id.toString()}
            renderItem={({item}) => 
            <PersonalProfile
                showChevrons
                name={item.title}
                num_list={item.description}
                avatar={item.image}
                onPress={() => console.log("message Selected", item)}
                renderRightActions={() => <ListItemDeleteAction
                                                onPress={() => handleDelete(item)}
                                            />}
                
             

            />}
                //ItemSeparatorComponent={ListItemSerparator}
                ItemSeparatorComponent={() => <ListItemSerparator/>}
                refreshing={refresh}
                onRefresh={() => setMessages([                    
                    {
                        id: 2,
                        title: "T2",
                        description: "D2",
                        image: require('../assets/mosh.jpg'),
                    },                    
                ])}
            />  
        </Screen>
        
    );
}

const styles = StyleSheet.create({
    
});

export default MessageScreen;
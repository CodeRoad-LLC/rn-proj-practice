import React from 'react';
import {View, StyleSheet} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Card from '../components/Card';

const lists = [
    {   
        id: 1,
        title: "Red jacket for sale",
        subTitle: "$100",
        picAddress: require("../assets/jacket.jpg"),
    },
    {   
        id: 2,
        title: "Coach in great Condition",
        subTitle: "$1000",
        picAddress: require("../assets/couch.jpg"),
    },
];

function MainScreen(props) {
    return (
        <View style={[styles.container, {backgroundColor: "#f8f4f4"}]}>
          
          <FlatList 
            data={lists}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => 
                <Card 
                title= {item.title} 
                subTitle= {item.subTitle}
                image={item.picAddress}
                />}
            style={styles.flatList}
            ItemSeparatorComponent={() => <View style={{height: 25}}/>}
            /> 

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 50,
      },
    flatList: {
        width: '85%',
        //backgroundColor: 'black',
    }
})

export default MainScreen;
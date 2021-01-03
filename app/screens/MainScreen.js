import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Card from '../components/Card';
import {useNavigation} from '@react-navigation/native';

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
    const navi = useNavigation();
    return (
        <View style={[styles.container, {backgroundColor: "#f8f4f4"}]}>
          
          <FlatList 
            data={lists}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => 
                <TouchableOpacity onPress={() => 
                                            navi.navigate('ListDetails', 
                                            {
                                                title: item.title ,
                                                subTitle: item.subTitle,
                                                image: item.picAddress,
                                    
                                                avatar: require("../assets/mosh.jpg"),
                                                name: "Mosh Hamedani",
                                                num_list: "5 Listings",
                                            })}>
                    <Card 
                        title= {item.title} 
                        subTitle= {item.subTitle}
                        image={item.picAddress}
                    />
                </TouchableOpacity>
            }    
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
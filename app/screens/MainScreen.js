import React, { useEffect, useState } from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Card from '../components/Card';
import {useNavigation} from '@react-navigation/native';
import listingsApi from '../api/listings';
import ButtonComponent from '../components/ButtonComponent';
import ActivityIndicator from '../components/ActivityIndicator';
import useApi from '../hooks/useApi';

 
function MainScreen(props) {

   const {data:listings, error, loading, request: loadListings} = useApi(listingsApi.getListings);

    useEffect( () => {
        loadListings();
    }, []);

    const navi = useNavigation();
    return (
        <View style={[styles.container, {backgroundColor: "#f8f4f4"}]}>
          {error && (
              <>
                <Text> Couldn't retrieve the listings</Text>
                <ButtonComponent title="Retry" onPress={loadListings}/>
              </>
          )}
          <ActivityIndicator visible={loading} />
          <FlatList 
            data={listings}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => 
                <TouchableOpacity onPress={() => 
                                            navi.navigate('ListDetails', 
                                            {
                                                title: item.title ,
                                                subTitle: item.price,
                                                image: item.images[0].url,
                                    
                                                avatar: require("../assets/mosh.jpg"),
                                                name: "Mosh Hamedani",
                                                num_list: "5 Listings",
                                            })}>
                    <Card 
                        title= {item.title} 
                        subTitle= {item.price}
                        imageUrl={item.images[0].url}
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
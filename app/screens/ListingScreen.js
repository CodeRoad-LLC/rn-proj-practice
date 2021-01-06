import React from 'react';
import { Text, View, StyleSheet, ProgressViewIOSComponent } from 'react-native';
import PersonalProfile from '../components/PersonalProfile';
import colors from '../config/colors';
import {useRoute} from '@react-navigation/native';
import {Image} from 'react-native-expo-image-cache';

function ListingScreen(props) {
    const route = useRoute();
    return (
        <View style={styles.container}> 
            <Image
                uri= {route.params.image}
                preview={{uri: route.params.preview}}
                tint="light"
                style={styles.img}
            />
            <Text
                style={styles.title}
            >{route.params.title}</Text>
            <Text
                 style={styles.subTitle}
            >${route.params.subTitle}</Text>

           
            <PersonalProfile 
                avatar={route.params.avatar}
                name={route.params.name}
                num_list={route.params.num_list}
            />
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    img: {
        resizeMode: 'stretch',
        width: "100%",
        height: 250,
    },
    title: {
        margin: 10,
        marginLeft: 20,
        fontSize: 18,
        fontWeight: "bold",
    },
    subTitle: {
        marginLeft: 20,
        fontSize: 15,
        color: colors.secondary,
        fontWeight: 'bold',
    },
   
})

export default ListingScreen;
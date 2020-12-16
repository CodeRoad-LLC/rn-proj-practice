import React from 'react';
import { Text, View, StyleSheet, Image, ProgressViewIOSComponent } from 'react-native';
import PersonalProfile from '../components/PersonalProfile';
import colors from '../config/colors';

function ListingScreen(props) {
    return (
        <View style={styles.container}>
            <Image
                source={props.image}
                style={styles.img}
            />
            <Text
                style={styles.title}
            >{props.title}</Text>
            <Text
                 style={styles.subTitle}
            >{props.subTitle}</Text>

           
            <PersonalProfile 
                avatar={props.avatar}
                name={props.name}
                num_list={props.num_list}
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
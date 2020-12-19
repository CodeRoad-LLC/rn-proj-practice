import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import colors from '../config/colors';

function card(props) {
    return (
        <View style={styles.card}>
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
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.white,
        width: "100%",
        height: 290,
        borderRadius: 20,
        overflow: "hidden",
    },
    img: {
        resizeMode: 'stretch',
        width: "100%",
        height: 210,
    },
    title: {
        margin: 10,
    },
    subTitle: {
        marginLeft: 10,
        color: colors.secondary,
        fontWeight: 'bold',
    }
})
export default card;
import React from 'react';
import { Text, View, StyleSheet} from 'react-native';
import colors from '../config/colors';
import {Image} from 'react-native-expo-image-cache';

function card({imageUrl, title, subTitle, thumbnailUrl}) {
    return (
        <View style={styles.card}>
            <Image
                uri={ imageUrl}
                style={styles.img}
                preview={{uri: thumbnailUrl}}
                tint="light"
            />
            <Text
                numberOfLines={1}
                style={styles.title}
            >{title}</Text>
            <Text
                numberOfLines={1}
                style={styles.subTitle}
            >${subTitle}</Text>
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
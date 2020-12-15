import React from 'react';
import { Image, View, StyleSheet, SafeAreaView } from 'react-native';
import colors from '../config/colors';

function ViewImageScreen(props) {
    return (
        <SafeAreaView style={styles.background}>
                <View style={styles.block1}></View>
                <View style={styles.block2}></View>

           
                    
               <Image
                    resizeMode="contain"
                    style={styles.img}
                    source={require("../assets/chair.jpg")} 
                />
            
            
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: "#000",
        flex: 1,
    },
    block1: {
        width: 40,
        height: 40,
        backgroundColor: colors.primary,
        position: "absolute",
        top: 20,
        right: 20,
    },
    block2: {
        width: 40,
        height: 40,
        backgroundColor: colors.secondary,
        position: "absolute",
        top: 20,
        left: 20,
    },
    
    img: {
        height:'100%',
        width:'100%',
    }
})

export default ViewImageScreen;
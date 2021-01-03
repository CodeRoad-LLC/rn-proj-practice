import React from 'react';
import { Button, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import colors from '../config/colors';


function ButtonComponent(props) { 
   return (
        <TouchableOpacity
            style={[styles.button, props.style]} 
            onPress={() => props.onPress()}
        >
                <Text 
                    style={styles.text}
                    color={colors.white}
                > {props.title} </Text>
        </TouchableOpacity>   

    );
    
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        width: "100%",
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 40,
        marginBottom: 20,
    },

    text: {
        color: colors.white,
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    }
})

export default ButtonComponent;
import React from 'react';
import { View, StyleSheet, Text, ImagePropTypes} from 'react-native';
import {MaterialCommunityIcons, AntDesign} from '@expo/vector-icons';
import colors from '../config/colors';

function WideButton(props) {
    return (
        <View style={styles.container}>
            <View style={styles.inside}>
                <View style={[styles.icon, {backgroundColor: props.backgroundColor}]}>
                    <MaterialCommunityIcons
                        name={props.iconName} 
                        size={30}
                        color= "white"
                    /> 
                </View>
                <Text style={styles.text}>
                    {props.text}
                </Text> 
                <MaterialCommunityIcons 
                                name='chevron-right'
                                size={20}
                                color={colors.medium}
                                />
            </View>
           
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        width: '100%',
        height: 60,
        paddingRight: 10,
    },
    inside: {
        flex: 1,
        flexDirection: 'row',
        alignItems: "center",
    },
    icon: {
        marginLeft: 15,
        backgroundColor: colors.primary,
        borderRadius: 20,
        width: 40,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontWeight: 'bold',
        marginLeft: 15,
        flex:1,
    }
})

export default WideButton;
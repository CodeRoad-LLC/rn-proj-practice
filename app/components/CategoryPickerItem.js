import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Icon from './Icon';

const itemSub = {
    backgroundColor: "black",
    icon: 'account',
};

function CategoryPickerItem({item,  onPress}) {
    return (
    <View style={styles.container}>
           <Icon 
            backgroundColor={item.backgroundColor}
            name={item.icon}
            size={80}
            />
            <Text style={styles.label}>{item.label}</Text> 
    </View>)
    ;
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 23,
        paddingVertical: 15,
        alignItems: "center",
        width:"33%",
    },
    label:{
        marginTop: 5,
        textAlign: "center",
    }
})

export default CategoryPickerItem;
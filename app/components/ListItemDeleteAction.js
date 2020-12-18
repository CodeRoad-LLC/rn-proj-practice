import React from 'react';
import { View, StyleSheet} from 'react-native';
import colors from '../config/colors';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

function ListItemDeleteAction(props) {
    return (
        <TouchableWithoutFeedback onPress={props.onPress}>
            <View style={styles.container}>
            <MaterialCommunityIcons
                name="trash-can"
                size={35}
                color={colors.white}
            />
        </View>
        </TouchableWithoutFeedback>
        
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.danger,
        width: 70,
        justifyContent: "center",
        alignItems: "center",
        height: 78,
    }
})

export default ListItemDeleteAction;
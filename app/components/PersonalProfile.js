import React from 'react';
import { View , StyleSheet, Image, Text, TouchableOpacity, TouchableHighlight} from 'react-native';
import colors from '../config/colors';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {MaterialCommunityIcons} from '@expo/vector-icons';

function PersonalProfile(props) {
    return (
        <Swipeable 
            renderRightActions={props.renderRightActions}
        >
           <TouchableHighlight onPress={props.onPress} underlayColor={colors.light}> 
                <View style={styles.personInfo}>
                    <Image  
                        source={props.avatar}
                        style={styles.avatar}
                    />
                    <View style={styles.textContainer}>
                        <Text 
                            numberOfLines={1}
                            style={styles.name}>{props.name}</Text>
                        <Text 
                            numberOfLines={1}
                            style={styles.num_list}>{props.num_list}</Text>
                    </View>
                    {props.showChevrons && <MaterialCommunityIcons 
                        name='chevron-right'
                        size={18}
                        color={colors.medium}
                       />}
                </View>
            </TouchableHighlight> 
        </Swipeable>
        
        
    );
}

const styles = StyleSheet.create({
    personInfo:{
        //backgroundColor: "black",
        width: "100%",
        //marginTop: 30,
        padding: 15,
        flexDirection: "row",
        alignItems:'center',
    },
    avatar: {
        borderRadius: 50,
        width: 50,
        height: 50,
    },
    textContainer: {
        flexDirection: "column",
        paddingLeft: 10,
        flex: 1,
    },
    name: {
        fontWeight: "bold",
        paddingBottom: 3,
    },
    num_list: {
        color: colors.grey,
    }
})

export default PersonalProfile;
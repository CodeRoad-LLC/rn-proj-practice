import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import PersonalProfile from '../components/PersonalProfile';
import WideButton from '../components/WideButton';
import colors from '../config/colors';

function AccountScreen(props) {
    return(
           <View style={styles.background}>
                <View style={{backgroundColor: colors.white}}>
                    <PersonalProfile
                        name={"Martin Guo"}
                        num_list={"gfzlasonadora@gmail.com"}
                        avatar={require('../assets/mosh.jpg')}
                    />  
                </View> 

                <WideButton/>           
            </View> 
        
    );
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: colors.light,
        flex:1,
        paddingTop: 50,
    }
})

export default AccountScreen;
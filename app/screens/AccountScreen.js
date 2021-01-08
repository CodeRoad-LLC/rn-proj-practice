import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import authStorage from '../auth/authStorage';
import AuthContext from '../auth/context';
import useAuth from '../auth/useAuth';
import PersonalProfile from '../components/PersonalProfile';
import WideButton from '../components/WideButton';
import colors from '../config/colors';


function AccountScreen(props) {
    const navi = useNavigation();
    const {user, logOut} = useAuth();

  

    return(
           <View style={styles.background}>
                <View style={{backgroundColor: colors.white, marginBottom: 40}}>
                    <PersonalProfile
                        name={user.name}
                        num_list={user.email}
                        avatar={require('../assets/mosh.jpg')}
                    />  
                </View> 

                <WideButton
                    iconName={"format-list-bulleted"}
                    backgroundColor={colors.primary}
                    text={"My Listings"}
                />  

                <View style={styles.block1}></View>

                <TouchableOpacity onPress={() => navi.navigate('myMessage')}>
                   <WideButton
                        iconName={'email'}
                        backgroundColor={colors.secondary}
                        text={"My Messages"}
                        
                    />  
                </TouchableOpacity>
                 

                <View style={styles.block2}></View>

                <TouchableOpacity onPress={() => logOut()} >
                    <WideButton
                        iconName={'logout'}
                        backgroundColor={colors.yellow}
                        text={"Log Out"}
                    />  
                </TouchableOpacity>
                        
            </View> 
        
    );
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: colors.light,
        flex:1,
        paddingTop: 50,
    },
    block1: {
        width: '100%',
        height: 0,
    },
    block2: {
        width: '100%',
        height: 40,
    },
})

export default AccountScreen;
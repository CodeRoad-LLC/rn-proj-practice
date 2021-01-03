import React from 'react';
import { StyleSheet, View , Text, ImageBackground, Image} from 'react-native';
import ButtonComponent from '../components/ButtonComponent';
import {useNavigation} from '@react-navigation/native';
import colors from '../config/colors';

function WelcomeScreen(props) {
    const navigation = useNavigation();
    return (
        <ImageBackground
            blurRadius = {0.5}
            source={
                require("../assets/background.jpg")
            }
            style={styles.background}
        >
            <View  style={styles.logoContainer}>
                <Image 
                    source={require("../assets/logo-red.png")}
                    style={styles.logo}
                ></Image>
                <Text
                    style={styles.text}
                >Sell What You Don't Need</Text>
            </View>
            
            <ButtonComponent title="login"  style={{backgroundColor: colors.primary}} onPress={() => navigation.navigate('login')}/>
            <ButtonComponent title="register" style={{backgroundColor: colors.secondary}} onPress={() => navigation.navigate('register')}/>

        </ImageBackground>      
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        // width: "100%",
        // height: "100%",
        paddingHorizontal: 20,
    },
    logoContainer: {
        position: "absolute",
        alignItems: "center",
        top: "15%",
    },
    logo:{
        width: 100,
        height: 100,
       
    },
    text: {
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 15,
    }
})

export default WelcomeScreen;
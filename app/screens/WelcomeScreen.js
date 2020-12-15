import React from 'react';
import { StyleSheet, View , Text, ImageBackground, Image} from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground
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
            
            <View style={styles.loginButton}></View>
            <View style={styles.registerButton}></View>
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
    Text: {
    },
    loginButton: {
        width: '100%',
        height: 50,
        backgroundColor: "#fc5c65",
    },
    registerButton: {
        width: '100%',
        height: 50,
        backgroundColor: "#4ecdc4",
    }
})

export default WelcomeScreen;
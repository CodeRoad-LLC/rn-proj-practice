import React from 'react';
import { StyleSheet, View , Text, ImageBackground, Image} from 'react-native';
import ButtonComponent from '../components/ButtonComponent';

function WelcomeScreen(props) {
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
            
            <ButtonComponent title="login" color="primary"/>
            <ButtonComponent title="register" color="secondary"/>

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
    text: {
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 15,
    }
})

export default WelcomeScreen;
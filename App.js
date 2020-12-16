import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ButtonComponent from './app/components/ButtonComponent';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import Card from './app/components/Card';

export default function App() {
  return (
    
   
        //<WelcomeScreen/>

        //<ViewImageScreen/>

        // <View style={styles.container}>
        //   <ButtonComponent title="login" onPress={() => console.log("pressedx!")}/>
        // </View>
     
        <View style={[styles.container, {backgroundColor: "#f8f4f4"}]}>
          <Card 
            title="Red jacket for sale" 
            subTitle="$100"
            image={require("./app/assets/jacket.jpg")}
            />
        </View>
       
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  }
})


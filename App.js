import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ButtonComponent from './app/components/ButtonComponent';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import Card from './app/components/Card';
import ListingScreen from './app/screens/ListingScreen';
import MessageScreen from './app/screens/MessageScreen';
import AccountScreen from './app/screens/AccountScreen';
import MainScreen from './app/screens/MainScreen';
import InputScreen from './app/screens/InputScreen';
import LoginScreen from './app/screens/LoginScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import ListEditScreen from './app/screens/ListEditScreen';
import GetImageScreen from './app/screens/GetImageScreen';
import TestNavigation from './app/screens/TestNavigation';
import RealNavigation from './app/screens/RealNavigation';
import MainNavigation from './app/screens/MainNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNetInfo} from '@react-native-community/netinfo';
import OfflineNotice from './app/components/OfflineNotice';
import AuthContext from './app/auth/context';
import authStorage from './app/auth/authStorage';
import jwtDecode from 'jwt-decode';
import AppLoading from 'expo-app-loading';

export default function App() {
  // const netInfo = useNetInfo();

  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if( user ) setUser(user); 
  }

  if(!isReady) 
    return (<AppLoading 
              startAsync={restoreUser} 
              onFinish={() => setIsReady(true)}
              onError={() => {}}
              />);
  

  return (
        // <WelcomeScreen/>

        //<ViewImageScreen/>

        // <View style={styles.container}>
        //   <ButtonComponent title="login" onPress={() => console.log("pressedx!")}/>
        // </View>
     
        // <View style={[styles.container, {backgroundColor: "#f8f4f4"}]}>
        //   <Card 
        //     title="Red jacket for sale" 
        //     subTitle="$100"
        //     image={require("./app/assets/jacket.jpg")}
        //     />
        // </View>

        // <ListingScreen  
            // title="Red jacket for sale" 
            // subTitle="$100"
            // image={require("./app/assets/jacket.jpg")}

            // avatar={require("./app/assets/mosh.jpg")}
            // name="Mosh Hamedani"
            // num_list="5 Listings"
        // />
       
        // <MessageScreen/>

        // <AccountScreen/>

        // <MainScreen />

        // <InputScreen/>

        // <LoginScreen/>

        // <RegisterScreen/>

        // <ListEditScreen/>

        // <GetImageScreen/>

        // <TestNavigation/>

        // <RealNavigation/>


        // <>
        //   <OfflineNotice/>
        //   <MainNavigation/>
        // </>

        <AuthContext.Provider value={{user, setUser}}>
            <OfflineNotice/>

            {user ? <MainNavigation/> : <RealNavigation/>}

        </AuthContext.Provider>
        
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  }
})


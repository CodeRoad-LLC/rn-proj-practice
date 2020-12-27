import React from 'react';
import Constants from  'expo-constants';
import {StyleSheet, SafeAreaView} from 'react-native';

function Screen({children, myStyle}) {
    return (
        <SafeAreaView style={[styles.screen, myStyle]}  >
          {children}
        </SafeAreaView>
    
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingTop: Constants.statusBarHeight ,
        //paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    }
})

export default Screen;
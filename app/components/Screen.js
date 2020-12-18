import React from 'react';
import Constants from  'expo-constants';
import {StyleSheet, SafeAreaView} from 'react-native';

function Screen(props) {
    return (
        <SafeAreaView style={styles.screen}>
          {props.children}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        //paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    }
})

export default Screen;
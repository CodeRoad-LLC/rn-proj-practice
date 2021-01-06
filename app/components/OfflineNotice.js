import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import colors from '../config/colors';
import Constants from 'expo-constants';
import {useNetInfo} from '@react-native-community/netinfo';


function OfflineNotice(props) {

    const netInfo = useNetInfo();
    if(netInfo.type !== "unknown" && netInfo.isInternetReachable === false)
  return (
    <View style={styles.container}>
        <Text style={styles.text}>No Internet Connection</Text>
    </View>
  );

  return null;
}

const styles = StyleSheet.create({
  container: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.primary,
      height: 50,
      position: 'absolute',
      top: Constants.statusBarHeight,
      zIndex: 10,
      width: '100%',
  },
  text: {
      color: colors.white,
  }
});

export default OfflineNotice;
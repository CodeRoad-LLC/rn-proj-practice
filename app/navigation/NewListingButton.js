import React from 'react';
import { View, StyleSheet } from 'react-native';
import colors from '../config/colors';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Platform} from 'react-native';

function NewListingButton({onPress}) {
  return (
      <TouchableOpacity onPress={onPress}>
         <View style={styles.container}>
            <MaterialCommunityIcons 
                name = 'plus-circle'
                color={colors.white}
                size={33}/>
        </View> 
      </TouchableOpacity>
    
  );
}

const styles = StyleSheet.create({
  container: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.primary,
      height: Platform.OS === 'android' ? 60 : 60,
      width: 60,
      borderRadius: 30,
      bottom: Platform.OS === 'android' ? 5 :20,
      borderColor: colors.white,
      borderWidth: 8,
  }
});

export default NewListingButton;
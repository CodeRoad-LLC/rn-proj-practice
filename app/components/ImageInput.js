import React, { useState, useEffect} from 'react';
import { View, StyleSheet, Image, TouchableWithoutFeedback, Alert } from 'react-native';
import colors from '../config/colors';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

function ImageInput({imageUri, onChangeImage}) {

    //get permission when first time render
    useEffect(() => {
        requestPermission();
    }, []);

    //use imagePiker to get permission
    const requestPermission = async () => {
        const result = await ImagePicker.requestCameraPermissionsAsync()
        if(!result.granted)
            alert('you need to enable permissions!');
    }

    //fn to select the image
    const selectImage = async() => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync(
                {
                    mediaTypes: ImagePicker.MediaTypeOptions.Images,
                    quality: 0.8,
                }
            );
            if(!result.cancelled)
                onChangeImage(result.uri);
        } catch (error) {
            console.log("error!");
        }
    }

    //handle the press, if no uri, select a new one
    //if exist uri, set the uri to null
    const handlePress = () => {
      if(!imageUri) selectImage();
    //   else Alert.alert('Delete', 'Are you sure you want to delete this image?', [
    //       {text: 'yes', onPress: ()=>onChangeImage(null)},
    //       {text: 'no'},
    //   ]);
        if(imageUri) onChangeImage(null);
    }

  return (
      <TouchableWithoutFeedback onPress={handlePress}>
          <View style={styles.container}>
        {imageUri && <Image
                        style={styles.image} 
                        source={{uri: imageUri}} />}
        {!imageUri && <MaterialCommunityIcons 
                        color={colors.medium}
                        name='camera'
                        size={40}
                        />}
        </View>
      </TouchableWithoutFeedback>
    
  );
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: colors.light,
      borderRadius: 15,
      justifyContent: 'center',
      alignItems: 'center',
      height: 100,
      width: 100,
      overflow: 'hidden',
  },
  image: {
      height:'100%',
      width:'100%',
  }
});

export default ImageInput;
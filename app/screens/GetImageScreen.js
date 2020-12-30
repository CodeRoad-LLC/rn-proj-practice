import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Button, Image} from 'react-native';
import Screen from '../components/Screen';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions'; 
import ImageInput from '../components/ImageInput';
import ImageInputList from '../components/ImageInputList';

function GetImageScreen(props) {



    const [imageUris, setImageUris] = useState([]);

   const handleAdd = uri => {
       setImageUris([...imageUris, uri]);
   }

   const handleDelete = uri => {
       setImageUris(
           imageUris.filter(imageUri => imageUri !== uri)
       );
   }

   



  return (
    <Screen>

        <ImageInputList 
            imageUris={imageUris} 
            onAddImage={handleAdd}
            onRemoveImage={handleDelete}
        />

    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default GetImageScreen;
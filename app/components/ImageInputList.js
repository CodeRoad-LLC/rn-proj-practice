import React, { useState, useRef } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import ImageInput from './ImageInput';

function ImageInputList({imageUris = [], onRemoveImage, onAddImage}) {
  const scrollView = useRef();

  return (
    <View>
      <ScrollView 
        ref={scrollView}
        onContentSizeChange={() => scrollView.current.scrollToEnd()}
        horizontal={true}>
        <View style={styles.container}>
          {imageUris.map(
              uri => <View key={uri} style={{margin: 5}}>
                      <ImageInput                          
                          imageUri={uri}
                          onChangeImage={() => onRemoveImage(uri)}
                      />
                    </View>
          )}
          <ImageInput 
              onChangeImage={uri => onAddImage(uri)}
          />
        </View>
      </ScrollView>
    </View>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
      flexDirection: 'row',
  }
});

export default ImageInputList;
import React from 'react';
import { useState } from 'react';
import { View, Button, Text, Image, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Colors from '../constants/Colors';

const TakePicture = props => {
  const [chosenPicture, setChosenPicture] = useState();

  const takePictureHandler = async () => {
    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true, aspect: [16, 9], quality: 0.8
    });
    setChosenPicture(image.uri);
    props.onPictureTaken(image.uri);
  };

  return (
  <View style={styles.imagePicker}>
    <View style={styles.imagePreview}>
      {!chosenPicture ? (
      <Text>Take a picture</Text>
      ) : (
      <Image style={styles.image} source={{uri: chosenPicture }} />
      )}
    </View>
    <Button title='Take a picture' color={Colors.primary} onPress={takePictureHandler} />
  </View>
  );
};

const styles = StyleSheet.create({
  imagePicker: {
    
    margin: 15,
  },
  imagePreview: {
    width: '100%',
    height: 250,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
  },
  image: {
    width: '100%',
    height: '100%'
  },
});

export default TakePicture;
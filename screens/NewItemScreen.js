import React, { useState } from 'react';
import { Button, ScrollView, View, Text, TextInput, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import * as drinkActions from '../redux/actions';
import ImagePicker from '../components/TakePicture';
import Colors from '../constants/Colors';

const NewItemScreen = props => {

const [title, setTitle] = useState(''); 
const [brewery, setBrewery] = useState('') ;
const [rating, setRating] = useState('');
const [picture, setPicture] = useState();
const dispatch = useDispatch();

  const titleInputHandler = text => {
    setTitle(text);
  };
  const breweryInputHandler = text => {
    setBrewery(text);
  };
  const ratingInputHandler = text => {
    setRating(text);
  };

  const picTakenHandler = imagePath => {
    setPicture(imagePath);
  }

  const SaveBtnHandler = () => {
    dispatch(drinkActions.addDrink(title, brewery, rating, picture));
    props.navigation.navigate('ItemList');
  };

  return (
    <ScrollView>
      <View style={styles.form}>
        <Text style={styles.label}>Title</Text>
          <TextInput 
          style={styles.Input}
          onChangeText={titleInputHandler}
          value={title} />
        <Text style={styles.label}>Brewery</Text>
          <TextInput 
          style={styles.Input}
          onChangeText={breweryInputHandler}
          value={brewery} />
        <Text style={styles.label}>Rating</Text>
          <TextInput 
          style={styles.Input}
          onChangeText={ratingInputHandler}
          value={rating} />
          <ImagePicker onPictureTaken={picTakenHandler} />
        <Button title='Save the drink!' color={Colors.primary} onPress={SaveBtnHandler} />
      </View>
    </ScrollView>
  );
};

NewItemScreen.navigationOptions = {
  headerTitle: 'Add Drink'
};

const styles = StyleSheet.create({
  form: {
    margin: 30
  },
  label: {
    fontSize: 18,
    marginBottom: 15
  },
  Input: {
    borderBottomColor: 'light-green',
    borderBottomWidth: 1,
    marginBottom: 15,
    paddingVertical: 4,
    paddingHorizontal: 2
  }
})

export default NewItemScreen;

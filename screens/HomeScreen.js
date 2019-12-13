import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

const HomeScreen = props => {

const MoveToBrowsing = () => {
  props.navigation.navigate('ItemList');
};

  return (
    <View style={styles.screen}>
      <Text style={styles.header}>Sappolut</Text>
      <Text style={styles.content}>Tallenna haluamasi juomat ja voit selata niitä myöhemmin!</Text>
        <View style={styles.button}>
          <Button title='Browse Items' onPress={MoveToBrowsing} />
        </View>
    </View>
    
  );
};

HomeScreen.navigationOptions = {
    headerTitle: 'Home',
  };

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    textAlign: 'center',
    color: Colors.primary
  },
  content: {
    fontSize: 30,
    textAlign: 'center',
    color: 'black'
  },
	screen: {
		flex: 1,
    margin: 30
  },
  button: {
    marginTop: 30,
    flex: 1,
  }
});

export default HomeScreen;
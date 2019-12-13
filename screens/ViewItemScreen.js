import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Colors from '../constants/Colors';
import { useSelector } from 'react-redux';

const ViewItemsScreen = props => {
  
  const drinkId = props.navigation.getParam('drinkId');
  const viewItem = useSelector(state => state.drinks.drinks.find(drink => drink.id === drinkId));

  
  return (
    <ScrollView contentContainerStyle={{ alignItems: 'center'}}>
      <Image source={{uri: viewItem.imageUri}} style={styles.image} />
      <View style={styles.container}>
        <Text style={styles.text}>{viewItem.title}</Text>
        <Text style={styles.text}>{viewItem.brewery}</Text>
        <Text style={styles.text}>{viewItem.rating}</Text>
      </View>
    </ScrollView>
  );
};

ViewItemsScreen.navigationOptions = navigationData => {
  return {
    headerTitle: navigationData.navigation.getParam('itemTitle')
  };
};

const styles = StyleSheet.create({
  view: {
    alignItems: 'center'
  },
  image: {
    height: '35%',
    minHeight: 300,
    width: '100%',
    backgroundColor: Colors.secondary
  },
  container: {
    padding: 20
  },
  text: {
    color: Colors.primary,
    textAlign: 'center',
  }
});

export default ViewItemsScreen;
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors';

const DrinkItem = props => {
  return (
    <TouchableOpacity onPress={props.onSelect} style ={styles.drinkItem}>
      <Image style={styles.image} source={{ uri: props.image }} />
      <View style={styles.info}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.brewery}>{props.brewery}</Text>
        <Text style={styles.rating}>{props.rating}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  drinkItem: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 30,
    flexDirection: 'row',
    alignItems: 'center'
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: 'blue',
    borderColor: Colors.primary,
    borderWidth: 1
  },
  info : {
    marginLeft: 25,
    width: 250,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  title: {
    color: 'red',
    fontSize: 18,
  },
  brewery: {
    color: 'green',
    fontSize: 16
  }
});

export default DrinkItem;
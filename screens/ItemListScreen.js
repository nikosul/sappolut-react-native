import React from 'react';
import { useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import DrinkItem from '../components/DrinkItem';
import * as drinkActions from '../redux/actions';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderBtn from '../components/HeaderBtn';

const ItemListScreen = props => {
  const drinks = useSelector(state => state.drinks.drinks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(drinkActions.getDrinks());
  }, [dispatch]);

  return (
    <FlatList 
      data={drinks} 
      keyExtractor={item => item.id} 
      renderItem={itemData => (
        <DrinkItem 
          image={itemData.item.imageUri} 
          title={itemData.item.title} 
          brewery={itemData.item.brewery} 
          rating={itemData.item.rating}
            onSelect={() => {
              props.navigation.navigate('ViewDrinkItem', {
                drinkTitle: itemData.item.title, 
                drinkId: itemData.item.id
            }); 
          }}
        />
      )}
    />
  );
}

ItemListScreen.navigationOptions = nagivationData => {
  return {
    headerTitle: 'Browse Drinks',
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderBtn}>
        <Item 
          title='Add' 
          iconName={ 'md-add' }
          onPress={() => {
            nagivationData.navigation.navigate('NewItem');
          }}
        />
    </HeaderButtons> 
  )};
};
const styles = StyleSheet.create({
});
export default ItemListScreen;
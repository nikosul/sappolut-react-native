import * as FileSystem from 'expo-file-system';
import { insertDrink, fetchDrinks } from '../sqlitedb';

export const ADD_DRINK = 'ADD_DRINK';
export const SET_DRINKS = 'SET_DRINKS';


export const addDrink = (title, brewery, rating, image) => {
  return async dispatch => {
    const file = image.split('/').pop();
    const newPath = FileSystem.documentDirectory + file;

    try {
      await FileSystem.moveAsync({
        from: image,
        to: newPath
      });
      const dbResult = await insertDrink(title, brewery, rating, newPath);
        console.log(dbResult);
      dispatch({ type: ADD_DRINK, drinkData: { id: dbResult.insertId, title: title, brewery: brewery, rating: rating, image: newPath } });
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
};

export const getDrinks = () => {
  return async dispatch => {
    try {
      const dbReturn = await fetchDrinks();
      console.log(dbReturn);
      dispatch({ type: SET_DRINKS, drinks: dbReturn.rows._array });
    } catch (err) {
        throw err;
    }
  };
};
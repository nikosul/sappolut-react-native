import { ADD_DRINK, SET_DRINKS } from "./actions";
import Drink from '../models/drink';

const initialState = {
  drinks: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_DRINKS:
      return {
        drinks: action.drinks.map(dr => new Drink(dr.id.toString(), dr.title, dr.brewery, dr.rating, dr.imageUri)
        )
      };
    case ADD_DRINK:
      const newDrink = new Drink(action.drinkData.id.toString(), action.drinkData.title, action.drinkData.brewery, action.drinkData.rating, action.drinkData.image);
        return {
          drinks: state.drinks.concat(newDrink)
        };
      default:
        return state;
  }
};
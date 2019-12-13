import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import drinkReducer from './redux/reducer'; 
import { init } from './sqlitedb';
import MainNavigator from './navigation/MainNavigator';

init()
.then(() => {
    console.log('database ready');
  })
  .catch(err => {
    console.log('database failure');
    console.log(err);
  });

const rootReducer = combineReducers({
  drinks: drinkReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
}

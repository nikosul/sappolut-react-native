import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Colors from '../constants/Colors';
import HomeScreen from '../screens/HomeScreen';
import ItemListScreen from '../screens/ItemListScreen';
import NewItemScreen from '../screens/NewItemScreen';
import ViewItemScreen from '../screens/ViewItemScreen';

const MainNavigator = createStackNavigator({
  Home: HomeScreen,
  ItemList: ItemListScreen,
  NewItem: NewItemScreen,
  ViewDrinkItem: ViewItemScreen
},
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.primary
      },
      headerTintColor: 'white'
    }
  }
);

export default createAppContainer(MainNavigator);
import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import Colors from "../constants/Colors";
import ProductOverviewScreen from "../screen/shop/ProductOverviewScreen";

const ProductsNagivator = createStackNavigator({
  ProductsOverview: ProductOverviewScreen
}, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
  }
});
 
export default createAppContainer(ProductsNagivator);
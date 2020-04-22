import { createStackNavigator } from "react-navigation-stack";

import HomeScreen from "../screens/HomeScreen";

import { PRIMARY_COLOR } from "../constants/colors";
import AboutScreen from "../screens/AboutScreen";
import ContactScreen from "../screens/ContactScreen";

const AuthNavigation = createStackNavigator(
  {
    AboutScreen: { screen: AboutScreen },
    ContactScreen: { screen: ContactScreen },
    HomeScreen: { screen: HomeScreen },
  },
  {
    initialRouteName: "HomeScreen",
    navigationOptions: {
      headerStyle: {
        backgroundColor: PRIMARY_COLOR,
      },
      headerTintColor: "#fff",
    },
  }
);

export default AuthNavigation;

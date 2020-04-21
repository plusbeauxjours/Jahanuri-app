import { createStackNavigator } from "react-navigation-stack";

import HomeScreen from "../screens/HomeScreen";

import { PRIMARY_COLOR } from "../constants/colors";

const AuthNavigation = createStackNavigator(
  {
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

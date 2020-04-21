import { createStackNavigator } from "react-navigation-stack";
import { PRIMARY_COLOR } from "../constants/colors";

import MyProfileScreen from "../screens/MyProfileScreen";

const MyProfileNavigation = createStackNavigator(
  {
    MyProfileScreen,
  },
  {
    initialRouteName: "MyProfileScreen",
    navigationOptions: {
      headerStyle: {
        backgroundColor: PRIMARY_COLOR,
      },
      headerTintColor: "#fff",
    },
  }
);

export default MyProfileNavigation;

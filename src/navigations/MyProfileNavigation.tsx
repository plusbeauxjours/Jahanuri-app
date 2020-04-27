import { createStackNavigator } from "react-navigation-stack";
import { PRIMARY_COLOR } from "../constants/colors";

import MyProfileScreen from "../screens/MyProfileScreen";
import CheckListScreen from "../screens/CheckListScreen/CheckListScreen";

const MyProfileNavigation = createStackNavigator(
  {
    MyProfileScreen,
    CheckListScreen,
  },
  {
    initialRouteName: "CheckListScreen",
    navigationOptions: {
      headerStyle: {
        backgroundColor: PRIMARY_COLOR,
      },
      headerTintColor: "#fff",
    },
  }
);

export default MyProfileNavigation;

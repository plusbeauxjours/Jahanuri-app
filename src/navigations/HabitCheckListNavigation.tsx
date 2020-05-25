import { createStackNavigator } from "react-navigation-stack";
import HabitCheckListScreen from "../screens/HabitCheckListScreen";
import MyProfileScreen from "../screens/MyProfileScreen/MyProfileScreen";

const HabitCheckListNavigation = createStackNavigator(
  {
    MyProfileScreen,
    HabitCheckListScreen,
  },
  {
    initialRouteName: "HabitCheckListScreen",
    defaultNavigationOptions: {
      headerShown: false,
    },
  }
);

export default HabitCheckListNavigation;

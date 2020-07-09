import { createStackNavigator } from "react-navigation-stack";
import HabitCheckListScreen from "../screens/HabitCheckListScreen";
import HabitCheckListDetailScreen from "../screens/HabitCheckListDetailScreen";
import SubmitHabitCheckListScreen from "../screens/SubmitHabitCheckListScreen";
import MyProfileScreen from "../screens/MyProfileScreen/MyProfileScreen";

const HabitCheckListNavigation = createStackNavigator(
  {
    MyProfileScreen,
    HabitCheckListScreen,
    HabitCheckListDetailScreen,
    SubmitHabitCheckListScreen,
  },
  {
    initialRouteName: "HabitCheckListScreen",
    defaultNavigationOptions: {
      headerShown: false,
    },
  }
);

export default HabitCheckListNavigation;

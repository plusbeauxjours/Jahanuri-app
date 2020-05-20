import { createStackNavigator } from "react-navigation-stack";
import HabitCheckListScreen from "../screens/HabitCheckListScreen";

const HabitCheckListNavigation = createStackNavigator(
  {
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

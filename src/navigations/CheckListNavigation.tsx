import { createStackNavigator } from "react-navigation-stack";
import CheckListScreen from "../screens/CheckListScreen";

const CheckListNavigation = createStackNavigator(
  {
    CheckListScreen,
  },
  {
    initialRouteName: "CheckListScreen",
    defaultNavigationOptions: {
      header: null,
    },
  }
);

export default CheckListNavigation;

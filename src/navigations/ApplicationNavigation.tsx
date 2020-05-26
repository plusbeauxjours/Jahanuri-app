import ApplicationScreen from "../screens/ApplicationScreen";
import MyProfileScreen from "../screens/MyProfileScreen/MyProfileScreen";
import { createStackNavigator } from "react-navigation-stack";

const ApplicationNavigation = createStackNavigator(
  {
    MyProfileScreen,
    ApplicationScreen,
  },
  {
    initialRouteName: "ApplicationScreen",
    defaultNavigationOptions: {
      headerShown: false,
    },
  }
);

export default ApplicationNavigation;

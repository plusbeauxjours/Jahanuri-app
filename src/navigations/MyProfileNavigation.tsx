import { createStackNavigator } from "react-navigation-stack";

import MyProfileScreen from "../screens/MyProfileScreen";
import CheckListScreen from "../screens/CheckListScreen/CheckListScreen";
import ApplicationScreen from "../screens/ApplicationScreen";
import PaymentInformationScreen from "../screens/PaymentInformationScreen";

const MyProfileNavigation = createStackNavigator(
  {
    MyProfileScreen,
    CheckListScreen,
    ApplicationScreen,
    PaymentInformationScreen,
  },
  {
    initialRouteName: "MyProfileScreen",
    defaultNavigationOptions: {
      headerShown: false,
    },
  }
);

export default MyProfileNavigation;

import { createStackNavigator } from "react-navigation-stack";
import { PRIMARY_COLOR } from "../constants/colors";

import MyProfileScreen from "../screens/MyProfileScreen";
import CheckListScreen from "../screens/CheckListScreen/CheckListScreen";
import ApplicationScreen from "../screens/ApplicationScreen";
import PaymentInformationScreen from "../screens/ PaymentInformationScreen";

const MyProfileNavigation = createStackNavigator(
  {
    MyProfileScreen,
    CheckListScreen,
    ApplicationScreen,
    PaymentInformationScreen,
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

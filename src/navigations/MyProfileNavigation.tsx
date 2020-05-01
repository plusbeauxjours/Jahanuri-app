import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { PRIMARY_COLOR } from "../constants/colors";

import MyProfileScreen from "../screens/MyProfileScreen";
import CheckListScreen from "../screens/CheckListScreen/CheckListScreen";
import ApplicationScreen from "../screens/ApplicationScreen";
import PaymentInformationScreen from "../screens/ PaymentInformationScreen";
import BackCustomHeader from "../components/BackCustomHeader";

const MyProfileNavigation = createStackNavigator(
  {
    MyProfileScreen: {
      screen: MyProfileScreen,
      navigationOptions: {
        header: (props) => <BackCustomHeader />,
      },
    },
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

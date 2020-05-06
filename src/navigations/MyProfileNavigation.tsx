import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { PRIMARY_COLOR } from "../constants/colors";

import MyProfileScreen from "../screens/MyProfileScreen";
import CheckListScreen from "../screens/CheckListScreen/CheckListScreen";
import ApplicationScreen from "../screens/ApplicationScreen";
import PaymentInformationScreen from "../screens/PaymentInformationScreen";
import BackCustomHeader from "../components/BackCustomHeader";
import MenuCustomHeader from "../components/MenuCustomHeader";

const MyProfileNavigation = createStackNavigator(
  {
    MyProfileScreen: {
      screen: MyProfileScreen,
      navigationOptions: {
        header: (props) => <MenuCustomHeader title={"나의 프로필"} />,
      },
    },
    CheckListScreen: {
      screen: CheckListScreen,
      navigationOptions: {
        header: (props) => <BackCustomHeader title={"체크리스트"} />,
      },
    },
    ApplicationScreen: {
      screen: ApplicationScreen,
      navigationOptions: {
        header: (props) => <BackCustomHeader title={"신청서"} />,
      },
    },
    PaymentInformationScreen: {
      screen: PaymentInformationScreen,
      navigationOptions: {
        header: (props) => <BackCustomHeader title={"결제"} />,
      },
    },
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

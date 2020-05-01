import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { PRIMARY_COLOR } from "../constants/colors";

import ReportScreen from "../screens/ReportScreen";
import { Appbar } from "react-native-paper";
import PaymentInformationScreen from "../screens/ PaymentInformationScreen";
import ApplicationScreen from "../screens/ApplicationScreen";
import CheckListScreen from "../screens/CheckListScreen/CheckListScreen";
import MenuCustomHeader from "../components/MenuCustomHeader";
import BackCustomHeader from "../components/BackCustomHeader";

const ReportNavigation = createStackNavigator(
  {
    ReportScreen: {
      screen: ReportScreen,
      navigationOptions: {
        header: (props) => <MenuCustomHeader title={"일지"} />,
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
    initialRouteName: "ReportScreen",
    navigationOptions: {
      headerStyle: {
        backgroundColor: PRIMARY_COLOR,
      },
      headerTintColor: "#fff",
      headerLeft: ({ navigation }) => {
        return (
          <Appbar.Action
            icon="menu"
            onPress={() => {
              navigation.toggleDrawer();
            }}
          />
        );
      },
    },
  }
);

export default ReportNavigation;

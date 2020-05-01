import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { PRIMARY_COLOR } from "../constants/colors";

import CheckListScreen from "../screens/CheckListScreen";
import { Appbar } from "react-native-paper";
import MenuCustomHeader from "../components/MenuCustomHeader";

const CheckListNavigation = createStackNavigator(
  {
    CheckListScreen: {
      screen: CheckListScreen,
      navigationOptions: {
        header: (props) => <MenuCustomHeader title={"체크리스트"} />,
        title: "Check List",
      },
    },
  },
  {
    initialRouteName: "CheckListScreen",
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

export default CheckListNavigation;

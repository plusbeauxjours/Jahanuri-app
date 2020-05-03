import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { PRIMARY_COLOR } from "../constants/colors";

import AboutScreen from "../screens/AboutScreen";
import { Appbar } from "react-native-paper";
import MenuCustomHeader from "../components/MenuCustomHeader";

const AboutNavigation = createStackNavigator(
  {
    AboutScreen: {
      screen: AboutScreen,
      navigationOptions: {
        header: (props) => <MenuCustomHeader title={"몸공부에 대하여"} />,
      },
    },
  },
  {
    initialRouteName: "AboutScreen",
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

export default AboutNavigation;

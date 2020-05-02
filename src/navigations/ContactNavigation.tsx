import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { PRIMARY_COLOR } from "../constants/colors";

import ContactScreen from "../screens/ContactScreen";
import { Appbar } from "react-native-paper";
import MenuCustomHeader from "../components/MenuCustomHeader";

const ContactNavigation = createStackNavigator(
  {
    ContactScreen: {
      screen: ContactScreen,
      navigationOptions: {
        header: (props) => <MenuCustomHeader title={"자하누리 연락처"} />,
      },
    },
  },
  {
    initialRouteName: "ContactScreen",
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

export default ContactNavigation;

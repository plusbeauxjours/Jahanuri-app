import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { PRIMARY_COLOR } from "../constants/colors";

import EditProfileScreen from "../screens/EditProfileScreen";
import { Appbar } from "react-native-paper";
import MenuCustomHeader from "../components/MenuCustomHeader";

const EditProfileNavigation = createStackNavigator(
  {
    EditProfileScreen: {
      screen: EditProfileScreen,
      navigationOptions: {
        header: (props) => <MenuCustomHeader title={"나의 프로필"} />,
      },
    },
  },
  {
    initialRouteName: "EditProfileScreen",
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

export default EditProfileNavigation;

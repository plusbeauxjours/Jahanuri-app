import React from "react";
import { createDrawerNavigator, DrawerItems } from "react-navigation-drawer";
import MyProfileNavigation from "./MyProfileNavigation";
import ContactScreen from "../screens/ContactScreen";
import ReportScreen from "../screens/ReportScreen/ReportScreen";
import AboutScreen from "../screens/AboutScreen";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import CheckListScreen from "../screens/CheckListScreen/CheckListScreen";
import { AsyncStorage, SafeAreaView } from "react-native";
import { Button } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import EditProfileScreen from "../screens/EditProfileScreen/EditProfileScreen";

const DrawerWithLogoutButton = (props) => {
  const handleLogout = async () => {
    await AsyncStorage.clear();
    props.navigation.navigate("Auth");
  };
  return (
    <ScrollView>
      <SafeAreaView>
        <DrawerItems {...props} />
      </SafeAreaView>
      <Button title="Logout" onPress={() => handleLogout()} />
    </ScrollView>
  );
};

const MainDrawer = createDrawerNavigator(
  {
    Me: {
      screen: MyProfileNavigation,
      navigationOptions: {
        drawerLabel: "Me",
        drawerIcon: ({ tintColor }) => (
          <Ionicons name="ios-contact" size={24} color={tintColor} />
        ),
      },
    },
    CheckList: {
      screen: CheckListScreen,
      navigationOptions: {
        drawerLabel: "Check List",
        drawerIcon: ({ tintColor }) => (
          <Ionicons
            name={"ios-checkmark-circle-outline"}
            size={24}
            color={tintColor}
          />
        ),
      },
    },
    Report: {
      screen: ReportScreen,
      navigationOptions: {
        drawerLabel: "Daily Report",
        drawerIcon: ({ tintColor }) => (
          <MaterialIcons name="filter-none" size={20} color={tintColor} />
        ),
      },
    },
    About: {
      screen: AboutScreen,
      navigationOptions: {
        drawerLabel: "About",
        drawerIcon: ({ tintColor }) => (
          <Ionicons
            name="ios-information-circle-outline"
            size={24}
            color={tintColor}
          />
        ),
      },
    },
    Contact: {
      screen: ContactScreen,
      navigationOptions: {
        drawerLabel: "Contact",
        drawerIcon: ({ tintColor }) => (
          <Ionicons name="ios-at" size={24} color={tintColor} />
        ),
      },
    },
    EditProfile: {
      screen: EditProfileScreen,
      navigationOptions: {
        drawerLabel: "Edit Profile",
        drawerIcon: ({ tintColor }) => (
          <MaterialIcons name="edit" size={24} color={tintColor} />
        ),
      },
    },
  },
  {
    initialRouteName: "Me",
    contentComponent: DrawerWithLogoutButton,
  }
);

export default MainDrawer;

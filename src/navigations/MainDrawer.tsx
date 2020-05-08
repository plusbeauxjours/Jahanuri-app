import React from "react";
import { createDrawerNavigator, DrawerItems } from "react-navigation-drawer";
import MyProfileNavigation from "./MyProfileNavigation";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { AsyncStorage, SafeAreaView } from "react-native";
import { Button } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import ContactNavigation from "./ContactNavigation";
import AboutNavigation from "./AboutNavigation";
import EditProfileNavigation from "./EditProfileNavigation";
import ReportNavigation from "./ReportNavigation";
import CheckListNavigation from "./CheckListNavigation";

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
      screen: CheckListNavigation,
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
      screen: ReportNavigation,
      navigationOptions: {
        drawerLabel: "Daily Report",
        drawerIcon: ({ tintColor }) => (
          <MaterialIcons name="filter-none" size={20} color={tintColor} />
        ),
      },
    },
    EditProfile: {
      screen: EditProfileNavigation,
      navigationOptions: {
        drawerLabel: "Edit Profile",
        drawerIcon: ({ tintColor }) => (
          <MaterialIcons name="edit" size={24} color={tintColor} />
        ),
      },
    },
    About: {
      screen: AboutNavigation,
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
      screen: ContactNavigation,
      navigationOptions: {
        drawerLabel: "Contact",
        drawerIcon: ({ tintColor }) => (
          <Ionicons name="ios-at" size={24} color={tintColor} />
        ),
      },
    },
  },
  {
    initialRouteName: "Contact",
    contentComponent: DrawerWithLogoutButton,
  }
);

export default MainDrawer;

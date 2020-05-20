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
      <Button title="로그아웃" onPress={() => handleLogout()} />
    </ScrollView>
  );
};

const MainDrawer = createDrawerNavigator(
  {
    Me: {
      screen: MyProfileNavigation,
      navigationOptions: {
        drawerLabel: "나의 프로필",
        drawerIcon: ({ tintColor }) => (
          <Ionicons name="ios-contact" size={24} color={tintColor} />
        ),
      },
    },
    CheckList: {
      screen: CheckListNavigation,
      navigationOptions: {
        drawerLabel: "체크리스트",
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
        drawerLabel: "일지",
        drawerIcon: ({ tintColor }) => (
          <MaterialIcons name="filter-none" size={20} color={tintColor} />
        ),
      },
    },
    EditProfile: {
      screen: EditProfileNavigation,
      navigationOptions: {
        drawerLabel: "프로필 수정",
        drawerIcon: ({ tintColor }) => (
          <MaterialIcons name="edit" size={24} color={tintColor} />
        ),
      },
    },
    About: {
      screen: AboutNavigation,
      navigationOptions: {
        drawerLabel: "직관의 몸공부란",
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
        drawerLabel: "고마센터 알아가기",
        drawerIcon: ({ tintColor }) => (
          <Ionicons name="ios-at" size={24} color={tintColor} />
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

import React from "react";
import { createDrawerNavigator, DrawerItems } from "react-navigation-drawer";
import MyProfileNavigation from "./MyProfileNavigation";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { AsyncStorage, SafeAreaView } from "react-native";
import { Button } from "react-native-elements";
import ContactNavigation from "./ContactNavigation";
import AboutNavigation from "./AboutNavigation";
import EditProfileNavigation from "./EditProfileNavigation";
import ReportNavigation from "./ReportNavigation";
import CheckListNavigation from "./CheckListNavigation";
import SurveyNavigation from "./SurveyNavigation";
import ApplicationNavigation from "./ApplicationNavigation";
import HabitCheckListNavigation from "./HabitCheckListNavigation";
import styled from "styled-components";

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`;
const Text = styled.Text`
  text-align: right;
  margin-right: 5px;
  color: #999;
  font-size: 10px;
`;
const View = styled.View`
  height: 70px;
`;
const DrawerWithLogoutButton = (props) => {
  const handleLogout = async () => {
    await AsyncStorage.clear();
    props.navigation.navigate("Auth");
  };
  return (
    <Container>
      <SafeAreaView>
        <DrawerItems {...props} />
      </SafeAreaView>
      <View>
        <Button title="로그아웃" onPress={() => handleLogout()} />
        <Text>Handcrafted by plusbeauxjours © twentytwenty</Text>
      </View>
    </Container>
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
        drawerLabel: "체크 리스트",
        drawerIcon: ({ tintColor }) => (
          <Ionicons
            name={"ios-checkmark-circle-outline"}
            size={24}
            color={tintColor}
          />
        ),
      },
    },
    HabitCheckListNavigation: {
      screen: HabitCheckListNavigation,
      navigationOptions: {
        drawerLabel: "나의 습관",
        drawerIcon: ({ tintColor }) => (
          <MaterialIcons name="filter-none" size={20} color={tintColor} />
        ),
      },
    },
    Report: {
      screen: ReportNavigation,
      navigationOptions: {
        drawerLabel: "일지",
        drawerIcon: ({ tintColor }) => (
          <Ionicons name={"ios-calendar"} size={24} color={tintColor} />
        ),
      },
    },
    Survey: {
      screen: SurveyNavigation,
      navigationOptions: {
        drawerLabel: "설문지",
        drawerIcon: ({ tintColor }) => (
          <Ionicons name={"ios-paper"} size={24} color={tintColor} />
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
    Application: {
      screen: ApplicationNavigation,
      navigationOptions: {
        drawerLabel: "신청서",
        drawerIcon: ({ tintColor }) => (
          <Ionicons name={"ios-document"} size={24} color={tintColor} />
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
    initialRouteName: "HabitCheckListNavigation",
    contentComponent: DrawerWithLogoutButton,
  }
);

export default MainDrawer;

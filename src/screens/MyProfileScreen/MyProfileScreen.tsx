import React from "react";
import { Query } from "react-apollo";
import {
  NavigationScreenProp,
  NavigationParams,
  NavigationState,
} from "react-navigation";
import { ActivityIndicator, AsyncStorage } from "react-native";
import { Appbar } from "react-native-paper";

import { ME } from "./MyProfileScreenQueries";
import { Me } from "../../types/api";
import MyProfileHeader from "../../components/MyProfileHeader";
import styled from "styled-components";

const View = styled.View`
  flex-direction: row;
`;
const Text = styled.Text``;
interface IProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

class MyProfileScreen extends React.Component<IProps> {
  static navigationOptions = ({ navigation }) => ({
    title: "Me",
    headerLeft: () => (
      <Appbar.Action
        icon="menu"
        onPress={() => {
          navigation.toggleDrawer();
        }}
      />
    ),
    headerRight: () => (
      <View>
        <Appbar.Action
          icon="square-edit-outline"
          onPress={() => {
            navigation.navigate("EditProfileScreen");
          }}
        />
        <Appbar.Action
          icon="exit-to-app"
          onPress={navigation.getParam("logout")}
        />
      </View>
    ),
  });

  public componentDidMount = () => {
    this.props.navigation.setParams({
      logout: this.handleLogout,
    });
  };

  public handleLogout = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate("Auth");
  };

  public render() {
    return (
      <View>
        <Text>jiji</Text>
      </View>
      // <Query<Me> query={ME}>
      //   {({ data: { me: { user: me = null } = {} } = {}, loading }) => {
      //     if (loading) {
      //       return (
      //         <ActivityIndicator
      //           size="large"
      //           style={{
      //             margin: 20,
      //           }}
      //         />
      //       );
      //     }
      //     return (
      //       <MyProfileHeader
      //         userImg={me.userImg}
      //         name={`${me.firstName} ${me.lastName}`}
      //         username={me.username}
      //         bio={me.bio}
      //       />
      //     );
      //   }}
      // </Query>
    );
  }
}

export default MyProfileScreen;

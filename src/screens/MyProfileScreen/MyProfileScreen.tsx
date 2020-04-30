import React from "react";
import { Query } from "react-apollo";
import {
  NavigationScreenProp,
  NavigationParams,
  NavigationState,
} from "react-navigation";
import { ActivityIndicator, AsyncStorage, RefreshControl } from "react-native";

import { ME } from "./MyProfileScreenQueries";
import { Me } from "../../types/api";
import MyProfileHeader from "../../components/MyProfileHeader";
import styled from "styled-components";
import UserStateController from "../../components/UserStateController";

const View = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const Text = styled.Text``;
const ScrollView = styled.ScrollView``;
const Touchable = styled.TouchableOpacity``;

interface IProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}
interface IState {
  refreshing: boolean;
}

class MyProfileScreen extends React.Component<IProps, IState> {
  public refetch: any;
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
    };
  }
  static navigationOptions = () => ({
    title: "Me",
  });

  public onRefresh = async () => {
    try {
      this.setState({ refreshing: true });
      await this.refetch();
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({ refreshing: false });
    }
  };
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
      <Query<Me> query={ME}>
        {({
          data: { me: { user: me = null } = {} } = {},
          loading,
          refetch,
        }) => {
          this.refetch = refetch;
          if (loading) {
            return (
              <ActivityIndicator
                size="large"
                style={{
                  margin: 20,
                }}
              />
            );
          } else {
            return (
              <ScrollView
                refreshControl={
                  <RefreshControl
                    refreshing={this.state.refreshing}
                    onRefresh={this.onRefresh}
                    tintColor={"#999"}
                  />
                }
                showsVerticalScrollIndicator={false}
              >
                <MyProfileHeader
                  userImg={me.userImg}
                  name={`${me.firstName} ${me.lastName}`}
                  username={me.username}
                  bio={me.bio}
                />
                {me.hasPreviousCheckListSubmitted &&
                me.hasSubmitedApplication &&
                me.hasPaid ? (
                  <View>
                    <Text>FEED</Text>
                  </View>
                ) : (
                  <UserStateController />
                )}
              </ScrollView>
            );
          }
        }}
      </Query>
    );
  }
}

export default MyProfileScreen;

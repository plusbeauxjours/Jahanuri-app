import React, { useState } from "react";
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
import MenuCustomHeader from "../../components/MenuCustomHeader";
import { NavigationStackScreenComponent } from "react-navigation-stack";
import { useQuery } from "react-apollo-hooks";

const View = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const Text = styled.Text``;
const ScrollView = styled.ScrollView``;

const MyProfileScreen: NavigationStackScreenComponent = () => {
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const {
    data: { me: { user: me = null } = {} } = {},
    loading,
    refetch,
  } = useQuery<Me>(ME);
  const onRefresh = async () => {
    try {
      setRefreshing(true);
      await refetch();
    } catch (e) {
      console.log(e);
    } finally {
      setRefreshing(false);
    }
  };

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
      <>
        <MenuCustomHeader title={"나의 프로필"} />
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
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
      </>
    );
  }
};
MyProfileScreen.navigationOptions = () => ({});

export default MyProfileScreen;

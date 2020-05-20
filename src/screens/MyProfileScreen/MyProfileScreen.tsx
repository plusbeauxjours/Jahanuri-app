import React, { useState } from "react";
import { Query } from "react-apollo";
import {
  NavigationScreenProp,
  NavigationParams,
  NavigationState,
} from "react-navigation";
import { ActivityIndicator, AsyncStorage, RefreshControl } from "react-native";

import { ME, GET_FEED_LIST } from "./MyProfileScreenQueries";
import { Me, GetFeedList } from "../../types/api";
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
    loading: meLoading,
    refetch: meRefetch,
  } = useQuery<Me>(ME);
  const {
    data: { getFeedList: { feeds = null } = {} } = {},
    loading: getFeedLoading,
    refetch: getFeedRefetch,
  } = useQuery<GetFeedList>(GET_FEED_LIST);
  const onRefresh = async () => {
    try {
      setRefreshing(true);
      await meRefetch();
      await getFeedRefetch();
    } catch (e) {
      console.log(e);
    } finally {
      setRefreshing(false);
    }
  };
  if (meLoading || getFeedLoading) {
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
              {feeds.map((feed: any) => (
                <>
                  <Text>{feed.text}</Text>
                  <Text>{feed.uuid}</Text>
                </>
              ))}
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

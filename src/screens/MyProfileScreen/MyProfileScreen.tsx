import React, { useState } from "react";
import Moment from "moment";
import { ActivityIndicator, RefreshControl } from "react-native";

import {
  ME,
  GET_FEED_LIST,
  GET_CLASS_LIST,
  GET_FEED_LIST_STAFF,
} from "./MyProfileScreenQueries";
import {
  Me,
  GetFeedList,
  GetClassList,
  GetFeedListStaff,
} from "../../types/api";
import MyProfileHeader from "../../components/MyProfileHeader";
import styled from "styled-components";
import UserStateController from "../../components/UserStateController";
import MenuCustomHeader from "../../components/MenuCustomHeader";
import { NavigationStackScreenComponent } from "react-navigation-stack";
import { useQuery } from "react-apollo-hooks";
import { GetFeedListStaffVariables } from "../../types/api";

const View = styled.View`
  flex: 1;
  min-height: 100px;
  align-items: center;
  justify-content: center;
  padding: 10px 20px 20px 20px;
`;
const GreyLine = styled.View`
  margin: 0 20px;
  border-bottom-width: 0.5px;
  border-bottom-color: #999;
`;
const Row = styled.View`
  flex: 1;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;
const FeedHeader = styled.Text`
  font-weight: 600;
`;
const DateFont = styled.Text`
  font-size: 10px;
`;
const Text = styled.Text`
  font-size: 16px;
`;
const ScrollView = styled.ScrollView``;
const Circle = styled.Text`
  text-align: center;
  margin-top: 10px;
  font-size: 8px;
  color: #999;
  margin-bottom: 50px;
`;
const Touchable = styled.TouchableOpacity``;

const MyProfileScreen: NavigationStackScreenComponent = () => {
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [classOrderUuid, setClassOrderUuid] = useState<string>("");
  const {
    data: { me: { user: me = null } = {} } = {},
    loading: meLoading,
    refetch: meRefetch,
  } = useQuery<Me>(ME);
  const {
    data: { getFeedList: { feeds = null } = {} } = {},
    loading: getFeedListLoading,
    refetch: getFeedListRefetch,
  } = useQuery<GetFeedList>(GET_FEED_LIST, {});
  const {
    data: { getFeedListStaff: { feeds: feedsStaff = null } = {} } = {},
    loading: getFeedListStaffLoading,
    refetch: getFeedListStaffRefetch,
  } = useQuery<GetFeedListStaff, GetFeedListStaffVariables>(
    GET_FEED_LIST_STAFF,
    {
      variables: { classOrderUuid: "01ed026e-4f52-406a-a640-eb491fa2875a" },
    }
  );
  const {
    data: { getClassList: { classes = null } = {} } = {},
    loading: getClassListLoading,
  } = useQuery<GetClassList>(GET_CLASS_LIST);
  const onRefresh = async () => {
    try {
      setRefreshing(true);
      await meRefetch();
      await getFeedListRefetch();
      await getFeedListStaffRefetch();
    } catch (e) {
      console.log(e);
    } finally {
      setRefreshing(false);
    }
  };

  if (
    meLoading ||
    getFeedListLoading ||
    getFeedListStaffLoading ||
    getClassListLoading
  ) {
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
          {console.log(feedsStaff)}
          <MyProfileHeader
            order={me.classOrder.order}
            startDate={me.classOrder.startDate}
            endDate={me.classOrder.endDate}
            isStaff={me.isStaff}
            userImg={me.userImg}
            name={`${me.lastName} ${me.firstName}`}
            username={me.username}
          />
          {(() => {
            switch (me.isStaff) {
              case true:
                return (
                  <>
                    <View>
                      <Touchable>
                        <Text>몸공부 기수 검색</Text>
                      </Touchable>
                    </View>
                    {feedsStaff &&
                      feedsStaff.length !== 0 &&
                      feedsStaff.map((feed: any) => (
                        <React.Fragment key={feed.uuid}>
                          <View>
                            <Row>
                              <FeedHeader>{feed.user.username}</FeedHeader>
                              <DateFont>
                                {Moment(feed.createdAt).format("Y년 M월 D일")}
                              </DateFont>
                            </Row>
                            <Text>{feed.text}</Text>
                          </View>
                          <GreyLine />
                        </React.Fragment>
                      ))}
                  </>
                );
              default:
                return (
                  <>
                    {me.hasPreviousCheckListSubmitted &&
                    me.hasSubmitedApplication &&
                    me.hasPaid ? (
                      <>
                        {feeds &&
                          feeds.length !== 0 &&
                          feeds.map((feed: any) => (
                            <React.Fragment key={feed.uuid}>
                              <View>
                                <Row>
                                  <FeedHeader>{feed.user.username}</FeedHeader>
                                  <DateFont>
                                    {Moment(feed.createdAt).format(
                                      "Y년 M월 D일"
                                    )}
                                  </DateFont>
                                </Row>
                                <Text>{feed.text}</Text>
                              </View>
                              <GreyLine />
                            </React.Fragment>
                          ))}
                      </>
                    ) : (
                      <UserStateController />
                    )}
                  </>
                );
            }
          })()}
          <Circle>●</Circle>
        </ScrollView>
      </>
    );
  }
};
MyProfileScreen.navigationOptions = () => ({});

export default MyProfileScreen;

import React, { useState } from "react";
import { ActivityIndicator, RefreshControl } from "react-native";
import Moment from "moment";
import styled from "styled-components";
import { useQuery } from "react-apollo-hooks";
import { NavigationStackScreenComponent } from "react-navigation-stack";
import { GetHabitCheckListList } from "../../types/api";
import MenuCustomHeader from "../../components/MenuCustomHeader";
import { GET_HABIT_CHECK_LIST_LIST } from "./HabitCheckListScreenQueries";

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const View = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const Text = styled.Text`
  font-weight: 100;
  font-size: 16px;
`;
const ScrollView = styled.ScrollView``;
const Touchable = styled.TouchableOpacity``;
const Row = styled.View`
  width: 240px;
  height: 80px;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 20px;
`;
const CenterRow = styled(Row)`
  width: 240px;
  height: 80px;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  padding: 20px;
`;
const GreyLine = styled.View`
  width: 260px;
  border-bottom-width: 1px;
  border-bottom-color: #999;
`;
const Circle = styled.Text`
  text-align: center;
  margin-top: 20px;
  font-size: 8px;
  color: #999;
  margin-bottom: 50px;
`;

const HabitCheckListScreen: NavigationStackScreenComponent = ({
  navigation,
}) => {
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const {
    data: { getHabitCheckListList: { habitCheckLists = null } = {} } = {},
    loading: getHabitCheckListLoading,
    refetch: getHabitCheckListRefetch,
  } = useQuery<GetHabitCheckListList>(GET_HABIT_CHECK_LIST_LIST);
  const onRefresh = async () => {
    try {
      setRefreshing(true);
      await getHabitCheckListRefetch();
    } catch (e) {
      console.log(e);
    } finally {
      setRefreshing(false);
    }
  };
  if (getHabitCheckListLoading) {
    return (
      <Container>
        <ActivityIndicator />
      </Container>
    );
  } else {
    return (
      <>
        <MenuCustomHeader title={"나의 습관"} />
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              tintColor={"#999"}
            />
          }
          contentContainerStyle={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
          showsVerticalScrollIndicator={false}
        >
          <View>
            <Touchable
              onPress={() => navigation.navigate("SubmitHabitCheckListScreen")}
            >
              <CenterRow>
                <Text>나의 습관 제출하기</Text>
              </CenterRow>
            </Touchable>
            {habitCheckLists && habitCheckLists.length !== 0 && (
              <>
                <GreyLine />
                {habitCheckLists?.map((habitCheckList) => (
                  <React.Fragment key={habitCheckList.uuid}>
                    <Touchable
                      onPress={() =>
                        navigation.navigate("HabitCheckListDetailScreen", {
                          habitCheckListUuid: habitCheckList.uuid,
                        })
                      }
                    >
                      <CenterRow>
                        <Text>
                          {Moment(habitCheckList.createdAt).format("MM월 DD일")}
                          &nbsp;나의 습관
                        </Text>
                      </CenterRow>
                    </Touchable>
                    <GreyLine />
                  </React.Fragment>
                ))}
                <Circle>●</Circle>
              </>
            )}
          </View>
        </ScrollView>
      </>
    );
  }
};

export default HabitCheckListScreen;

import React, { useState } from "react";
import styled from "styled-components";
import { useQuery } from "react-apollo-hooks";
import { NavigationStackScreenComponent } from "react-navigation-stack";
import { ActivityIndicator, RefreshControl } from "react-native";
import { GetReportList, GetReportListVariables, Me } from "../../types/api";
import { GET_REPORT_LIST } from "./ReportListScreenQueries";
import MenuCustomHeader from "../../components/MenuCustomHeader";
import Moment from "moment";
import { ME } from "../MyProfileScreen/MyProfileScreenQueries";

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
const SmallText = styled.Text`
  font-weight: 100;
  font-size: 12px;
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

const ReportListScreen: NavigationStackScreenComponent = ({ navigation }) => {
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const {
    data: { me: { user: me = null } = {} } = {},
    loading: meLoading,
    refetch: meRefetch,
  } = useQuery<Me>(ME);
  const {
    data: { getReportList: { reports = null } = {} } = {},
    loading: getReportListLoading,
  } = useQuery<GetReportList, GetReportListVariables>(GET_REPORT_LIST, {
    variables: { userUuid: me && me.uuid },
  });
  const onRefresh = async () => {
    try {
      setRefreshing(true);
      await meRefetch();
    } catch (e) {
      console.log(e);
    } finally {
      setRefreshing(false);
    }
  };
  if (meLoading || getReportListLoading) {
    return (
      <Container>
        <ActivityIndicator />
      </Container>
    );
  } else {
    return (
      <>
        <MenuCustomHeader title={"일지"} />
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
            {me && me.hasPaid ? (
              <Touchable
                onPress={() =>
                  navigation.navigate("CreateReportScreen", {
                    reportCoverUuid: me.reportCoverUuid,
                    reports: reports,
                  })
                }
              >
                <CenterRow>
                  <Text>새일지 제출하기</Text>
                </CenterRow>
              </Touchable>
            ) : (
              <Touchable
                onPress={() => navigation.navigate("CreateReportScreen")}
              >
                <CenterRow>
                  <Text>새일지 제출하기</Text>
                </CenterRow>
              </Touchable>
            )}
            {reports && reports.length !== 0 && (
              <>
                <GreyLine />
                {reports.map((report: any) => (
                  <React.Fragment key={report.uuid}>
                    <Touchable
                      onPress={() =>
                        navigation.navigate("ReportDetailScreen", {
                          reportUuid: report.uuid,
                        })
                      }
                    >
                      {report?.reportCover?.classOrder ? (
                        <Row>
                          <Text>
                            {Moment(report.reportDate).diff(
                              Moment(report.reportCover.classOrder.startDate),
                              "day"
                            )}
                            일차 일지
                          </Text>
                          <SmallText>
                            ({Moment(report.reportDate).format("MM월 DD일")})
                          </SmallText>
                        </Row>
                      ) : (
                        <CenterRow>
                          <Text>
                            {Moment(report.reportDate).format("MM월 DD일")} 일지
                          </Text>
                        </CenterRow>
                      )}
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
ReportListScreen.navigationOptions = () => ({});
export default ReportListScreen;

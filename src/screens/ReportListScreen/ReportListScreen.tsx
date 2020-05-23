import React, { useState } from "react";
import styled from "styled-components";
import { useQuery } from "react-apollo-hooks";
import { NavigationStackScreenComponent } from "react-navigation-stack";
import { useMe } from "../../context/meContext";
import { ActivityIndicator, RefreshControl, Platform } from "react-native";
import { GetReportList, GetReportListVariables } from "../../types/api";
import { GET_REPORT_LIST } from "./ReportListScreenQueries";
import MenuCustomHeader from "../../components/MenuCustomHeader";
import Moment from "moment";

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
  font-weight: 400;
  font-size: 20px;
`;
const SmallText = styled.Text`
  font-weight: 400;
  font-size: 12px;
`;
const ScrollView = styled.ScrollView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const Touchable = styled.TouchableOpacity``;
const Row = styled.View`
  width: 240px;
  height: 80px;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 20px;
`;
const FirstRow = styled(Row)`
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
  const { me, loading, refetch } = useMe();
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const {
    data: { getReportList: { reports = null } = {} } = {},
    loading: getReportListLoading,
  } = useQuery<GetReportList, GetReportListVariables>(GET_REPORT_LIST, {
    variables: { userUuid: me && me.user.uuid },
  });
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
  if (loading || getReportListLoading) {
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
          showsVerticalScrollIndicator={false}
        >
          <View>
            {me && me.user.hasPaid ? (
              <>
                <Touchable
                  onPress={() =>
                    navigation.navigate("CreateReportScreen", {
                      reportCoverUuid: me.user.reportCoverUuid,
                      reports: reports,
                    })
                  }
                >
                  <FirstRow>
                    <Text>새일지 제출하기</Text>
                  </FirstRow>
                </Touchable>
                <GreyLine />
              </>
            ) : (
              <>
                <Touchable
                  onPress={() => navigation.navigate("CreateReportScreen")}
                >
                  <FirstRow>
                    <Text>새일지 제출하기</Text>
                  </FirstRow>
                </Touchable>
                <GreyLine />
              </>
            )}
            {reports &&
              reports.length !== 0 &&
              reports.map((report: any) => (
                <>
                  <Touchable
                    key={report.uuid}
                    onPress={() =>
                      navigation.navigate("ReportDetailScreen", {
                        reportUuid: report.uuid,
                      })
                    }
                  >
                    <Row>
                      <Text>
                        {report.reportCover.classOrder &&
                          Moment(report.reportDate).diff(
                            Moment(report.reportCover.classOrder.startDate),
                            "day"
                          )}
                        일차 일지
                      </Text>
                      <SmallText>
                        ({Moment(report.reportDate).format("MM월 DD일")})
                      </SmallText>
                    </Row>
                  </Touchable>
                  <GreyLine />
                </>
              ))}
          </View>
          <Circle>●</Circle>
        </ScrollView>
      </>
    );
  }
};
ReportListScreen.navigationOptions = () => ({});
export default ReportListScreen;

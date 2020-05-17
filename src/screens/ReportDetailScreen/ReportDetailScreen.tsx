import React from "react";
import styled from "styled-components";
import { NavigationStackScreenComponent } from "react-navigation-stack";
import { ActivityIndicator } from "react-native";
import MenuCustomHeader from "../../components/MenuCustomHeader";
import { GetReportDetail, GetReportDetailVariables } from "../../types/api";
import { GET_REPORT_DETAIL } from "./ReportDetailScreenQueries";
import { useQuery } from "react-apollo-hooks";
import Divider from "../../components/Divider";

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const Line = styled.View`
  flex-direction: row;
`;
const View = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const MainTitle = styled.Text``;
const Title = styled.Text``;
const Text = styled.Text``;
const ScrollView = styled.ScrollView``;

const ReportDetailScreen: NavigationStackScreenComponent = ({ navigation }) => {
  console.log("uuid", navigation.state.params.reportUuid);
  const {
    data: { getReportDetail: { report = null } = {} } = {},
    loading: getReportDetailLoading,
  } = useQuery<GetReportDetail, GetReportDetailVariables>(GET_REPORT_DETAIL, {
    fetchPolicy: "network-only",
    variables: {
      reportUuid: navigation.state.params && navigation.state.params.reportUuid,
    },
  });
  if (getReportDetailLoading) {
    return (
      <Container>
        <ActivityIndicator />
      </Container>
    );
  } else {
    return (
      <>
        <MenuCustomHeader title={"일지"} />
        <ScrollView>
          <View>
            <Text>{report.uuid}</Text>
            <Divider text={"기수"} color={"dark"} />
            <Line>
              {report.reportCover.classOrder && (
                <Text>{report.reportCover.classOrder.order}</Text>
              )}
              {report.reportCover.classOrder && (
                <Text>{report.reportCover.classOrder.startDate}</Text>
              )}
              {report.reportCover.classOrder && (
                <Text>report.reportCover.classOrder.endDate}</Text>
              )}
              <Text>{report.reportCover.reportType}</Text>
            </Line>
            <Divider text={"영양습관"} color={"dark"} />
            <Line>
              <MainTitle>주식</MainTitle>
              <Title>섭생식</Title>
              <Text>{report.saengSik}</Text>
            </Line>
            <Line>
              <MainTitle>부식</MainTitle>
              <Title>아미노</Title>
              <Text>{report.amino}</Text>
              <Title>생기소</Title>
              <Text>{report.sangiSo}</Text>
            </Line>
            <Line>
              <Title>전해질 보충</Title>
              <Text>{report.jeunHaeJil}</Text>
            </Line>
            <Line>
              <Title>일반 식사</Title>
              <Text>{report.meal}</Text>
            </Line>
            <Line>
              <Title>식사 습관 체크</Title>
              <Text>{report.mealCheck}</Text>
            </Line>
            <Divider text={"생활습관"} color={"dark"} />
            <Line>
              <Title>잠</Title>
              <Text>{report.sleeping}</Text>
            </Line>
            <Line>
              <Title>변</Title>
              <Text>{report.stool}</Text>
            </Line>
            <Line>
              <Title>곡식 찜질</Title>
              <Text>{report.hotGrain}</Text>
            </Line>
            <Line>
              <Title>따뜻한 물</Title>
              <Text>{report.hotWater}</Text>
            </Line>
            <Line>
              <Title>걷기</Title>
              <Text>{report.strolling}</Text>
            </Line>
            <Divider text={"오늘의 숙제 (운동 / 강의)"} color={"dark"} />
            <Line>
              <Title>운동</Title>
              <Text>{report.workout}</Text>
            </Line>
            <Line>
              <Title>강의</Title>
              <Text>{report.lecture}</Text>
            </Line>
            <Line>
              <Title>기타</Title>
              <Text>{report.etc}</Text>
            </Line>
            <Divider text={"세줄 일기"} color={"dark"} />
            <Line>
              <Text>{report.diary}</Text>
            </Line>
          </View>
        </ScrollView>
      </>
    );
  }
};
ReportDetailScreen.navigationOptions = () => ({});
export default ReportDetailScreen;

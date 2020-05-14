import React, { useState } from "react";
import styled from "styled-components";
import { NavigationStackScreenComponent } from "react-navigation-stack";
import { useMe } from "../../context/meContext";
import { ActivityIndicator } from "react-native";
import MenuCustomHeader from "../../components/MenuCustomHeader";
import { GetReportDetail, GetReportDetailVariables } from "../../types/api";
import { GET_REPORT_DETAIL } from "./ReportDetailScreenQueries";
import { useQuery } from "react-apollo-hooks";

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
const Text = styled.Text``;
const ScrollView = styled.ScrollView``;
const Touchable = styled.TouchableOpacity``;

const ReportDetailScreen: NavigationStackScreenComponent = ({ navigation }) => {
  const { me, loading, refetch } = useMe();
  console.log(navigation.state.params.reportUuid);
  const {
    data: { getReportDetail: { report = null } = {} } = {},
    loading: getReportDetailLoading,
  } = useQuery<GetReportDetail, GetReportDetailVariables>(GET_REPORT_DETAIL, {
    variables: { reportUuid: navigation.state.params.reportUuid },
  });
  console.log(report);
  if (getReportDetailLoading || loading) {
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
            <Text>{report.reportCover.classOrder.order}</Text>
            <Text>{report.reportCover.classOrder.startDate}</Text>
            <Text>{report.reportCover.classOrder.endDate}</Text>
            <Text>{report.reportCover.uuid}</Text>
            <Text>{report.reportCover.reportType}</Text>
            <Text>{report.saengSik}</Text>
            <Text>{report.amino}</Text>
            <Text>{report.sangiSo}</Text>
            <Text>{report.jeunHaeJil}</Text>
            <Text>{report.jeunHaeJilTime}</Text>
            <Text>{report.meal}</Text>
            <Text>{report.mealCheck}</Text>
            <Text>{report.sleeping}</Text>
            <Text>{report.stool}</Text>
            <Text>{report.hotGrain}</Text>
            <Text>{report.hotWater}</Text>
            <Text>{report.strolling}</Text>
            <Text>{report.workout}</Text>
            <Text>{report.lecture}</Text>
            <Text>{report.etc}</Text>
            <Text>{report.diary}</Text>
          </View>
        </ScrollView>
      </>
    );
  }
};
ReportDetailScreen.navigationOptions = () => ({});
export default ReportDetailScreen;

import React, { useState } from "react";
import styled from "styled-components";
import { useQuery } from "react-apollo-hooks";
import { NavigationStackScreenComponent } from "react-navigation-stack";
import { useMe } from "../../context/meContext";
import { ActivityIndicator, RefreshControl } from "react-native";
import { GetReportList, GetReportListVariables } from "../../types/api";
import { GET_REPORT_LIST } from "./ReportListScreenQueries";
import MenuCustomHeader from "../../components/MenuCustomHeader";

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
            {reports &&
              reports.length !== 0 &&
              reports.map((report: any) => (
                <Touchable
                  key={report.uuid}
                  onPress={() =>
                    navigation.push("ReportDetailScreen", {
                      reportUuid: report.uuid,
                    })
                  }
                >
                  <Text>{report.uuid}</Text>
                </Touchable>
              ))}
          </View>
        </ScrollView>
      </>
    );
  }
};
ReportListScreen.navigationOptions = () => ({});
export default ReportListScreen;

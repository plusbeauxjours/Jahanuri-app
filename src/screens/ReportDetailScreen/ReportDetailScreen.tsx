import React, { useState } from "react";
import styled from "styled-components";
import { NavigationStackScreenComponent } from "react-navigation-stack";
import { useMe } from "../../context/meContext";
import { ActivityIndicator, RefreshControl } from "react-native";
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
  const [refreshing, setRefreshing] = useState<boolean>(false);
  console.log(navigation);
  const {
    data: { getReportDetail: { report = null } = {} } = {},
    loading: getReportDetailLoading,
  } = useQuery<GetReportDetail, GetReportDetailVariables>(GET_REPORT_DETAIL);
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
        <View>
          <Text>Report Screen</Text>
        </View>
      </>
    );
  }
};
ReportDetailScreen.navigationOptions = () => ({});
export default ReportDetailScreen;

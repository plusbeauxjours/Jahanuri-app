import React, { useState } from "react";
import styled from "styled-components";
import { NavigationStackScreenComponent } from "react-navigation-stack";
import { useMe } from "../../context/meContext";
import { ActivityIndicator, RefreshControl } from "react-native";

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
      <Container>
        <ActivityIndicator />
      </Container>
    );
  } else {
    return (
      <View>
        <Text>Report Screen</Text>
      </View>
    );
  }
};
ReportListScreen.navigationOptions = () => ({});
export default ReportListScreen;

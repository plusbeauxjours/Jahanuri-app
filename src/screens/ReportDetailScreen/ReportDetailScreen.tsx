import React, { useState } from "react";
import styled from "styled-components";
import { NavigationStackScreenComponent } from "react-navigation-stack";
import { useMe } from "../../context/meContext";
import { ActivityIndicator, RefreshControl } from "react-native";
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

const ReportDetailScreen: NavigationStackScreenComponent = ({ navigation }) => {
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
    if (!me.user.hasPreviousCheckListSubmitted) {
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
              <Text>
                You didn't submit check list yet, please submit checklist
              </Text>
              <Touchable onPress={() => navigation.navigate("CheckListScreen")}>
                <Text>go to check list</Text>
              </Touchable>
            </View>
          </ScrollView>
        </>
      );
    } else if (!me.user.hasSubmitedApplication) {
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
              <Text>
                You didn't submit application yet, please submit application
              </Text>
              <Touchable
                onPress={() => navigation.navigate("ApplicationScreen")}
              >
                <Text>go to application</Text>
              </Touchable>
            </View>
          </ScrollView>
        </>
      );
    } else if (!me.user.hasPaid) {
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
              <Text>You didn't pay yet, please pay</Text>
              <Touchable
                onPress={() => navigation.navigate("PaymentInformationScreen")}
              >
                <Text>go to payment information</Text>
              </Touchable>
            </View>
          </ScrollView>
        </>
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
  }
};
ReportDetailScreen.navigationOptions = () => ({});
export default ReportDetailScreen;

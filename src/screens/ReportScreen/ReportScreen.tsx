import React from "react";
import styled from "styled-components";
import { NavigationStackScreenComponent } from "react-navigation-stack";

const View = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const Text = styled.Text``;

const ReportScreen: NavigationStackScreenComponent = () => (
  <View>
    <Text>Report Screen</Text>
  </View>
);
ReportScreen.navigationOptions = () => ({
  title: "Daily Report",
});
export default ReportScreen;

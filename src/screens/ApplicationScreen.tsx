import React from "react";
import styled from "styled-components";
import { NavigationStackScreenComponent } from "react-navigation-stack";

const View = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const Text = styled.Text``;

const ApplicationScreen: NavigationStackScreenComponent = () => (
  <View>
    <Text>신청서</Text>
  </View>
);
ApplicationScreen.navigationOptions = () => ({
  title: "신청서",
});

export default ApplicationScreen;

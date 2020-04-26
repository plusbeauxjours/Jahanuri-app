import React from "react";
import styled from "styled-components";
import { NavigationStackScreenComponent } from "react-navigation-stack";

const View = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const Text = styled.Text``;

const CheckListScreen: NavigationStackScreenComponent = () => (
  <View>
    <Text>CheckListScreen</Text>
  </View>
);
CheckListScreen.navigationOptions = () => ({
  title: "Check List",
});

export default CheckListScreen;

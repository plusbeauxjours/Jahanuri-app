import React from "react";
import styled from "styled-components";
import { NavigationStackScreenComponent } from "react-navigation-stack";

const View = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const Text = styled.Text``;

const AboutScreen: NavigationStackScreenComponent = () => (
  <View>
    <Text>About Jahanuri</Text>
  </View>
);
AboutScreen.navigationOptions = () => ({
  title: "About Jahanuri",
});

export default AboutScreen;

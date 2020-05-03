import React from "react";
import styled from "styled-components";
import { NavigationStackScreenComponent } from "react-navigation-stack";

const View = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const Text = styled.Text``;

const ContactScreen: NavigationStackScreenComponent = () => (
  <View>
    <Text>Contact</Text>
    <Text>Contact</Text>
    <Text>Contact</Text>
    <Text>Contact</Text>
    <Text>Contact</Text>
    <Text>Contact</Text>
  </View>
);
ContactScreen.navigationOptions = () => ({});

export default ContactScreen;

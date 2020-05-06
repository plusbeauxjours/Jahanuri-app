import React from "react";
import { ImageBackground } from "react-native";
import styled from "styled-components";
import { NavigationStackScreenComponent } from "react-navigation-stack";

const View = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const Text = styled.Text``;

const PaymentInformationScreen: NavigationStackScreenComponent = () => (
  <View>
    <ImageBackground
      style={{ width: "100%", height: "100%" }}
      source={require("../images/AboutImages/FifthPage.jpg")}
      resizeMode="stretch"
    />
  </View>
);
PaymentInformationScreen.navigationOptions = () => ({
  title: "결제",
});

export default PaymentInformationScreen;

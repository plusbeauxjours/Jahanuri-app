import React from "react";
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
    <Text>결제</Text>
  </View>
);
PaymentInformationScreen.navigationOptions = () => ({
  title: "결제",
});

export default PaymentInformationScreen;

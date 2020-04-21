import React from "react";
import styled from "styled-components";

const View = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const Text = styled.Text``;

const HomeScreen: React.FC = () => (
  <View>
    <Text>ABOUT JAHANURI</Text>
    <Text>CONTACT</Text>
    <Text>LOGIN</Text>
  </View>
);

export default HomeScreen;

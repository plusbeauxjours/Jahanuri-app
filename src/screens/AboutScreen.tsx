import React from "react";
import styled from "styled-components";

const View = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const Text = styled.Text``;

const AboutScreen: React.FC = () => (
  <View>
    <Text>About Jahanuri</Text>
  </View>
);

export default AboutScreen;

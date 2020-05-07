import React from "react";
import styled from "styled-components";

const View = styled.View`
  flex-direction: row;
  padding: 15px;
`;
const Container = styled.View`
  background-color: #ffffff;
  height: 1px;
  flex: 1;
  opacity: 0.4;
  align-self: center;
`;

const Text = styled.Text`
  align-self: center;
  padding: 0 5px;
  color: #ffffff;
  opacity: 0.7;
`;

interface IProps {
  text: string;
}

const Divider: React.FC<IProps> = ({ text }) => {
  return (
    <View>
      <Container />
      <Text>{text}</Text>
      <Container />
    </View>
  );
};

export default Divider;

import React from "react";
import styled from "styled-components";

const View = styled.View`
  flex-direction: row;
  padding: 15px;
`;
const Container = styled.View<ITheme>`
  background-color: ${(props) =>
    props.color === "dark" ? "#000000" : "#ffffff"};
  height: 1px;
  flex: 1;
  opacity: 0.4;
  align-self: center;
`;

const Text = styled.Text<ITheme>`
  align-self: center;
  padding: 0 5px;
  color: ${(props) => (props.color === "dark" ? "#000000" : "#ffffff")};
`;

interface IProps {
  text: string;
  color?: string;
}
interface ITheme {
  color: string;
}
const Divider: React.FC<IProps> = ({ text, color }) => {
  return (
    <View>
      <Container color={color} />
      <Text color={color}>{text}</Text>
      <Container color={color} />
    </View>
  );
};

export default Divider;

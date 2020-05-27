import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import styled from "../styles/typed-components";

const Container = styled.View`
  margin-left: 20px;
  flex-direction: row;
  align-items: center;
  height: 55px;
`;
const Text = styled.Text`
  font-weight: 100;
  font-size: 16px;
  margin-left: 15px;
`;
interface IProps {
  checked?: boolean;
  text: string;
}
const CheckBoxRow: React.FC<IProps> = ({ checked, text }) => {
  if (checked) {
    return (
      <Container>
        <FontAwesome name="check-square-o" color={"#999"} size={24} />
        <Text>{text}</Text>
      </Container>
    );
  } else {
    return (
      <Container>
        <FontAwesome name="square-o" color={"#999"} size={24} />
        <Text>{text}</Text>
      </Container>
    );
  }
};

export default CheckBoxRow;

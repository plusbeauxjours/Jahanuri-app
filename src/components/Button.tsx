import React from "react";
import styled from "../styles/typed-components";
import { ActivityIndicator } from "react-native";

const Container = styled.View`
  justify-content: center;
  align-items: center;
`;
const Text = styled.Text<ITheme>`
  color: ${(props) => props.color};
  font-size: 20px;
  font-weight: 400;
`;
const Touchable = styled.TouchableOpacity<ITheme>`
  border-width: 0.5px;
  border-color: black;
  border-radius: 5px;
  padding: 10px 20px;
`;
const DialogTouchable = styled.TouchableOpacity``;
interface IProps {
  loading?: boolean;
  text: string;
  disabled?: boolean;
  onPress: () => void;
  color?: string;
  border?: boolean;
}
interface ITheme {
  color?: string;
  border?: boolean;
}
const Button: React.FC<IProps> = ({
  loading,
  text,
  disabled,
  onPress,
  color = "black",
  border = false,
}) => {
  if (!loading) {
    if (border) {
      return (
        <Touchable disabled={disabled} onPress={onPress} border={border}>
          <Container>
            {disabled ? (
              <Text color={"#ccc"}>{text}</Text>
            ) : (
              <Text color={color}>{text}</Text>
            )}
          </Container>
        </Touchable>
      );
    } else {
      return (
        <DialogTouchable disabled={disabled} onPress={onPress}>
          <Container>
            {disabled ? (
              <Text color={"#ccc"}>{text}</Text>
            ) : (
              <Text color={color}>{text}</Text>
            )}
          </Container>
        </DialogTouchable>
      );
    }
  } else {
    return (
      <Container>
        <ActivityIndicator />
      </Container>
    );
  }
};
export default Button;

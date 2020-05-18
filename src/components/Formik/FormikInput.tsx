import React from "react";
import styled from "styled-components";
import { TextInput, HelperText } from "react-native-paper";
import { KeyboardTypeOptions } from "react-native";

const Container = styled.View<ITheme>`
  width: ${(props) => (props.type === "row" ? "25%" : "90%")};
  align-self: center;
`;

interface ITheme {
  type?: string;
}
interface IProps {
  type?: string;
  label: string;
  error: any;
  value: string;
  name: string;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
  placeholder?: string;
  onChange: (name: string, value: string) => void;
  onTouch: (name: string) => void;
}

const FormikInput: React.FC<IProps> = ({
  type,
  label,
  error,
  name,
  onChange,
  onTouch,
  autoCapitalize,
  placeholder,
  ...rest
}) => {
  const handleChange = (value) => {
    onChange(name, value);
  };

  const handleBlur = () => {
    onTouch(name);
  };
  return (
    <Container type={type}>
      <TextInput
        label={label}
        autoCapitalize={autoCapitalize}
        onChangeText={handleChange}
        onBlur={handleBlur}
        error={error}
        placeholder={placeholder}
        {...rest}
      />
      <HelperText type="error" visible={error}>
        {error}
      </HelperText>
    </Container>
  );
};

export default FormikInput;

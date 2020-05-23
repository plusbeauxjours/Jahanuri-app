import React from "react";
import styled from "styled-components";
import { TextInput, HelperText } from "react-native-paper";
import { KeyboardTypeOptions } from "react-native";

const View = styled.View<ITheme>`
  width: ${(props) => (props.type === "row" ? "25%" : "90%")};
  padding-right: ${(props) => (props.type === "row" ? "5px" : "0")};
  padding-left: ${(props) => (props.type === "row" ? "5px" : "0")};
  align-self: center;
`;

interface ITheme {
  type?: string;
}
interface IProps {
  type?: string;
  label: string;
  error?: any;
  value: string;
  name: string;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
  placeholder?: string;
  multiline?: boolean;
  editable?: boolean;
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
  multiline = false,
  editable = true,
  ...rest
}) => {
  const handleChange = (value) => {
    onChange(name, value);
  };

  const handleBlur = () => {
    onTouch(name);
  };
  return (
    <View type={type}>
      <TextInput
        mode="outlined"
        label={label}
        autoCapitalize={"none"}
        autoCompleteType={"off"}
        autoCorrect={false}
        onChangeText={handleChange}
        onBlur={handleBlur}
        error={error}
        placeholder={placeholder}
        multiline={multiline}
        style={{ backgroundColor: "#fff" }}
        editable={editable}
        {...rest}
      />
      <HelperText type="error" visible={error}>
        {error}
      </HelperText>
    </View>
  );
};

export default FormikInput;

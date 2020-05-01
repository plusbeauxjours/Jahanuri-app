import React from "react";
import styled from "styled-components";
import { Header } from "react-native-elements";
import { withNavigation } from "react-navigation";
import { Ionicons } from "@expo/vector-icons";

const IconContainer = styled.TouchableOpacity`
  width: 50px;
`;

const BackArrow = withNavigation(({ navigation }) => {
  return (
    <IconContainer onPress={() => navigation.goBack(null)}>
      <Ionicons size={24} name={"ios-arrow-back"} />
    </IconContainer>
  );
});

const BackCustomHeader = () => {
  return (
    <Header
      placement="left"
      leftComponent={<BackArrow />}
      containerStyle={{
        alignItems: "center",
        borderBottomColor: "#999",
        borderBottomWidth: 0.5,
      }}
      barStyle={"light-content"}
    />
  );
};

export default BackCustomHeader;

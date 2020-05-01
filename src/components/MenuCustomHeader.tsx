import React from "react";
import styled from "styled-components";
import { Header } from "react-native-elements";
import { withNavigation } from "react-navigation";
import { Ionicons } from "@expo/vector-icons";

const IconContainer = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  width: 40px;
`;

interface IProps {
  title: string;
}
const Menu = withNavigation(({ navigation }) => {
  return (
    <IconContainer onPress={() => navigation.toggleDrawer()}>
      <Ionicons size={24} name={"ios-menu"} />
    </IconContainer>
  );
});

const MenuCustomHeader: React.FC<IProps> = ({ title }) => {
  return (
    <Header
      placement="left"
      leftComponent={<Menu />}
      containerStyle={{
        backgroundColor: "#ffffff",
        borderBottomColor: "#999",
        justifyContent: "space-around",
        alignItems: "center",
        borderBottomWidth: 0.5,
      }}
      centerComponent={{ text: title, style: { alignItems: "center" } }}
      barStyle={"light-content"}
    />
  );
};

export default MenuCustomHeader;

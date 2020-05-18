import React from "react";
import styled from "styled-components";
import { Header } from "react-native-elements";
import { withNavigation } from "react-navigation";
import { Ionicons } from "@expo/vector-icons";

const IconContainer = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 40px;
`;
const View = styled.View`
  align-items: center;
  justify-content: center;
`;
const Text = styled.Text``;

interface IProps {
  title: string;
}

const LeftComponent = withNavigation(({ navigation }) => {
  return (
    <IconContainer onPress={() => navigation.goBack(null)}>
      <Ionicons size={24} name={"ios-arrow-back"} />
    </IconContainer>
  );
});

const CenterComponent = ({ title }) => {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};

const BackCustomHeader: React.FC<IProps> = ({ title }) => {
  return (
    <Header
      placement="left"
      leftComponent={<LeftComponent />}
      centerComponent={<CenterComponent title={title} />}
      containerStyle={{
        backgroundColor: null,
        borderBottomColor: "#999",
        alignItems: "center",
        borderBottomWidth: 0.5,
      }}
      barStyle={"dark-content"}
    />
  );
};

export default BackCustomHeader;

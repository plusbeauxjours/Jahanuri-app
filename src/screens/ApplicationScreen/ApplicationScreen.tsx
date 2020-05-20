import React from "react";
import styled from "styled-components";
import { NavigationStackScreenComponent } from "react-navigation-stack";
import MenuCustomHeader from "../../components/MenuCustomHeader";

const View = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const Text = styled.Text``;

const ApplicationScreen: NavigationStackScreenComponent = ({ navigation }) => {
  return (
    <>
      <MenuCustomHeader title={"신청서"} />
      <View>
        <Text>Application</Text>
      </View>
    </>
  );
};
ApplicationScreen.navigationOptions = () => ({});
export default ApplicationScreen;

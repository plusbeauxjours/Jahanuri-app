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

const SurveyScreen: NavigationStackScreenComponent = ({ navigation }) => {
  return (
    <>
      <MenuCustomHeader title={"설문지"} />
      <View>
        <Text>SurveyScreen</Text>
      </View>
    </>
  );
};
SurveyScreen.navigationOptions = () => ({});
export default SurveyScreen;

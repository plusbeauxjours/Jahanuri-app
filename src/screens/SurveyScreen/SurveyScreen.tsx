import React from "react";
import styled from "styled-components";
import { NavigationStackScreenComponent } from "react-navigation-stack";

const View = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const Text = styled.Text``;

const SurveyScreen: NavigationStackScreenComponent = ({ navigation }) => {
  return (
    <View>
      <Text>SurveyScreen</Text>
    </View>
  );
};
SurveyScreen.navigationOptions = () => ({
  title: "SurveyScreen",
});
export default SurveyScreen;

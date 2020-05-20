import React from "react";
import styled from "styled-components";
import { NavigationStackScreenComponent } from "react-navigation-stack";

const View = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const Text = styled.Text``;

const HabitCheckListScreen: NavigationStackScreenComponent = ({
  navigation,
}) => {
  return (
    <View>
      <Text>HabitCheckListScreen</Text>
    </View>
  );
};
HabitCheckListScreen.navigationOptions = () => ({
  title: "HabitCheckListScreen",
});
export default HabitCheckListScreen;

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

const HabitCheckListScreen: NavigationStackScreenComponent = ({
  navigation,
}) => {
  return (
    <>
      <MenuCustomHeader title={"나의 습관"} />
      <View>
        <Text>HabitCheckListScreen</Text>
      </View>
    </>
  );
};
HabitCheckListScreen.navigationOptions = () => ({});
export default HabitCheckListScreen;

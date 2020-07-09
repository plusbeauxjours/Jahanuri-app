import React from "react";
import { useQuery } from "react-apollo-hooks";
import { Me } from "../../types/api";
import { ActivityIndicator } from "react-native";
import { ME } from "../MyProfileScreen/MyProfileScreenQueries";
import styled from "styled-components";
import HabitCheckListDetailScreen from "./HabitCheckListDetailScreen";

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const HabitCheckListScreen: React.FC = () => {
  const {
    data: { me: { user: me = null } = {} } = {},
    loading: meLoading,
  } = useQuery<Me>(ME);
  if (meLoading) {
    return (
      <Container>
        <ActivityIndicator />
      </Container>
    );
  } else {
    if (me.hasSubmittedHabitCheckList) {
      return <HabitCheckListDetailScreen />;
    } else {
      return <SubmitHabitCheckListScreen />;
    }
  }
};
export default HabitCheckListScreen;

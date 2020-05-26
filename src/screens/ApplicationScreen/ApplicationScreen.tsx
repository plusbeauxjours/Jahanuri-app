import React from "react";
import { useQuery } from "react-apollo-hooks";
import { Me } from "../../types/api";
import { ActivityIndicator } from "react-native";
import { ME } from "../MyProfileScreen/MyProfileScreenQueries";
import styled from "styled-components";
import SubmitApplicationScreen from "./SubmitApplicationScreen";
import ApplicationDetailScreen from "./ApplicationDetailScreen";

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const ApplicationScreen: React.FC = () => {
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
    if (me.hasSubmittedApplication) {
      return <ApplicationDetailScreen />;
    } else {
      return <SubmitApplicationScreen />;
    }
  }
};
export default ApplicationScreen;

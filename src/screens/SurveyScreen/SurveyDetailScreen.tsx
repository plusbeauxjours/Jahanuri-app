import React from "react";
import { useQuery } from "react-apollo-hooks";
import { Me } from "../../types/api";
import { ActivityIndicator } from "react-native";
import { ME } from "../MyProfileScreen/MyProfileScreenQueries";
import styled from "styled-components";
import SurveyDetailScreen from "./SurveyDetailScreen";
import SubmitSurveyScreen from "./SubmitSurveyScreen";

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const SurveyDetailScreen: React.FC = () => {};
export default SurveyDetailScreen;

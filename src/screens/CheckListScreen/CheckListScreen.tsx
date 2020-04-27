import React from "react";
import styled from "styled-components";
import { NavigationStackScreenComponent } from "react-navigation-stack";
import { GET_CHECK_LIST_QUESTIONS } from "./CheckListScreenQueries";
import { GetCheckListQuestions } from "../../types/api";
import CheckListRow from "../../components/CheckListRow";
import { ActivityIndicator } from "react-native";
import { useQuery } from "react-apollo-hooks";

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const CheckListScreen: NavigationStackScreenComponent = () => {
  const {
    data: { getCheckListQuestions: { checkListQuestions = null } = {} } = {},
    loading,
  } = useQuery<GetCheckListQuestions>(GET_CHECK_LIST_QUESTIONS);
  if (loading) {
    return (
      <Container>
        <ActivityIndicator />
      </Container>
    );
  } else if (!loading) {
    return (
      <React.Fragment>
        {checkListQuestions &&
          checkListQuestions.length !== 0 &&
          checkListQuestions.map((checkListQuestion: any) => (
            <CheckListRow
              key={checkListQuestion.uuid}
              uuid={checkListQuestion.uuid}
              question={checkListQuestion.question}
              checkListCoverUuid={
                checkListQuestion.questionSet[0].checkListCover.uuid
              }
              previousAnswer={checkListQuestion.questionSet[0].previousAnswer}
              laterAnswer={checkListQuestion.questionSet[0].laterAnswer}
              haspreviousSubmited={
                checkListQuestion.questionSet[0].checkListCover.previousSubmit
              }
              haslaterSubmited={
                checkListQuestion.questionSet[0].checkListCover.laterSubmit
              }
            />
          ))}
      </React.Fragment>
    );
  } else {
    return null;
  }
};
CheckListScreen.navigationOptions = () => ({
  title: "Check List",
});

export default CheckListScreen;

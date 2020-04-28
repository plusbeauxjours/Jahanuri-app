import React, { useState } from "react";
import styled from "styled-components";
import { NavigationStackScreenComponent } from "react-navigation-stack";
import {
  GET_CHECK_LIST_ANSWERS,
  SUBMIT_CHECK_LIST,
} from "./CheckListScreenQueries";
import {
  GetCheckListAnswers,
  SubmitCheckList,
  SubmitCheckListVariables,
} from "../../types/api";
import CheckListRow from "../../components/CheckListRow";
import { ActivityIndicator } from "react-native";
import { useQuery, useMutation } from "react-apollo-hooks";
import { useMe } from "../../context/meContext";

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const Button = styled.Button`
  margin-top: 10px;
  width: 90%;
`;

const CheckListScreen: NavigationStackScreenComponent = () => {
  const { me, loading: meLoading } = useMe();
  const [trueAnswerQuestionUuids, setTrueAnswerQuestionUuids] = useState<any>(
    []
  );
  const {
    data: { getCheckListAnswers: { checkListAnswers = null } = {} } = {},
    loading: checkListQuestionsLoading,
  } = useQuery<GetCheckListAnswers>(GET_CHECK_LIST_ANSWERS);
  const [submitCheckListFn, { loading: submitCheckListLoading }] = useMutation<
    SubmitCheckList,
    SubmitCheckListVariables
  >(SUBMIT_CHECK_LIST);
  const onPress = (newUuid: string) => {
    trueAnswerQuestionUuids.includes(newUuid)
      ? setTrueAnswerQuestionUuids(
          trueAnswerQuestionUuids.filter((uuid) => uuid !== newUuid)
        )
      : setTrueAnswerQuestionUuids([...trueAnswerQuestionUuids, newUuid]);
  };
  if (meLoading || checkListQuestionsLoading) {
    return (
      <Container>
        <ActivityIndicator />
      </Container>
    );
  } else if (!meLoading && !checkListQuestionsLoading) {
    return (
      <React.Fragment>
        {checkListAnswers &&
          checkListAnswers.length !== 0 &&
          checkListAnswers.map((checkListAnswer: any) => (
            <CheckListRow
              key={checkListAnswer.uuid}
              uuid={checkListAnswer.question.uuid}
              question={checkListAnswer.question.question}
              previousAnswer={checkListAnswer.previousAnswer}
              laterAnswer={checkListAnswer.laterAnswer}
              haspreviousSubmited={me.user.hasPreviousCheckListSubmitted}
              haslaterSubmited={me.user.hasLaterCheckListSubmitted}
              onPress={onPress}
            />
          ))}
        <Button
          raised
          primary
          disabled={
            trueAnswerQuestionUuids.length === 0 || checkListQuestionsLoading
          }
          loading={submitCheckListLoading}
          onPress={() => {
            console.log(trueAnswerQuestionUuids);
            submitCheckListFn({
              variables: {
                trueAnswerQuestionUuids,
                isPreviousAnswer:
                  !me.user.hasPreviousCheckListSubmitted &&
                  !me.user.hasLaterCheckListSubmitted
                    ? true
                    : false,
              },
            });
          }}
          title="Submit"
        />
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

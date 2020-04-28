import React, { useState } from "react";
import styled from "styled-components";
import { NavigationStackScreenComponent } from "react-navigation-stack";
import {
  GET_CHECK_LIST_QUESTIONS,
  SUBMIT_CHECK_LIST,
} from "./CheckListScreenQueries";
import {
  GetCheckListQuestions,
  SubmitCheckList,
  SubmitCheckListVariables,
} from "../../types/api";
import CheckListRow from "../../components/CheckListRow";
import { ActivityIndicator } from "react-native";
import { useQuery, useMutation } from "react-apollo-hooks";
import { useMe } from "../../context/meContext";
import { SwipeListView } from "react-native-swipe-list-view";

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const Button = styled.Button`
  margin-top: 10px;
  width: 90%;
`;
const Text = styled.Text``;
const View = styled.View``;

const RowBack = styled.View`
  align-items: center;
  flex: 1;
  flex-direction: row;
  margin-left: 5px;
  max-width: 85px;
  width: 100%;
  justify-content: space-between;
`;
const BackLeftBtn = styled.TouchableOpacity`
  justify-content: center;
`;
const IconContainer = styled.View`
  width: 40px;
  height: 40px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 0.5px solid #999;
  border-radius: 5px;
  padding: 2px;
`;
const SmallText = styled.Text`
  color: #999;
  text-align: center;
  font-size: 8px;
`;
const CheckListScreen: NavigationStackScreenComponent = () => {
  const { me, loading: meLoading } = useMe();
  const [trueAnswerQuestionUuids, setTrueAnswerQuestionUuids] = useState<any>(
    []
  );
  const {
    data: { getCheckListQuestions: { checkListQuestions = null } = {} } = {},
    loading: checkListQuestionsLoading,
  } = useQuery<GetCheckListQuestions>(GET_CHECK_LIST_QUESTIONS);
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
        {console.log(checkListQuestions)}
        <SwipeListView
          useFlatList={false}
          closeOnRowBeginSwipe={true}
          data={checkListQuestions}
          previewOpenValue={1000}
          renderItem={(data) => (
            <CheckListRow
              key={data.item.uuid}
              uuid={data.item.uuid}
              question={data.item.question}
              previousAnswer={
                data.item.questionSet.length !== 0
                  ? data.item.questionSet[0].previousAnswer
                  : false
              }
              laterAnswer={
                data.item.questionSet.length !== 0
                  ? data.item.questionSet[0].laterAnswer
                  : false
              }
              haspreviousSubmited={me.user.hasPreviousCheckListSubmitted}
              haslaterSubmited={me.user.hasLaterCheckListSubmitted}
              onPress={onPress}
            />
          )}
          renderHiddenItem={(data) => (
            <RowBack>
              <BackLeftBtn
                disabled={checkListQuestionsLoading}
                onPress={() => console.log(data)}
              >
                <IconContainer>
                  <SmallText>UN BLOCK</SmallText>
                </IconContainer>
              </BackLeftBtn>
            </RowBack>
          )}
          leftOpenValue={45}
          keyExtractor={(item) => item.uuid}
        />
        {/* ))} */}
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

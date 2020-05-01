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
import { ScrollView, ActivityIndicator } from "react-native";
import { useQuery, useMutation } from "react-apollo-hooks";
import { useMe } from "../../context/meContext";
import { SwipeListView } from "react-native-swipe-list-view";
import { Ionicons } from "@expo/vector-icons";
import dimensions from "../../constants/dimensions";

const View = styled.View`
  flex-direction: row;
  align-items: center;
  height: 40px;
  padding: 0 10px;
`;
const LoadingContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  background-color: ${(props) => props.theme.bgColor};
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
  if (meLoading) {
    return (
      <LoadingContainer>
        <ActivityIndicator />
      </LoadingContainer>
    );
  } else if (!meLoading && !checkListQuestionsLoading) {
    return (
      <ScrollView
        style={{
          width: dimensions.width - 30,
          backgroundColor: "#FFFFFF",
        }}
        keyboardShouldPersistTaps="always"
        showsVerticalScrollIndicator={false}
      >
        {!me.user.hasPreviousCheckListSubmitted &&
        !me.user.hasLaterCheckListSubmitted ? (
          checkListQuestions &&
          checkListQuestions.length !== 0 &&
          checkListQuestions.map((checkListQuestion: any) => (
            <CheckListRow
              key={checkListQuestion.uuid}
              uuid={checkListQuestion.uuid}
              question={checkListQuestion.question}
              previousAnswer={
                checkListQuestion.questionSet.length !== 0
                  ? checkListQuestion.questionSet[0].previousAnswer
                  : false
              }
              laterAnswer={
                checkListQuestion.questionSet.length !== 0
                  ? checkListQuestion.questionSet[0].laterAnswer
                  : false
              }
              haspreviousSubmited={me.user.hasPreviousCheckListSubmitted}
              haslaterSubmited={me.user.hasLaterCheckListSubmitted}
              onPress={onPress}
            />
          ))
        ) : (
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
              <View>
                {data.item.questionSet[0].previousAnswer ? (
                  <Ionicons
                    name="ios-checkbox-outline"
                    size={24}
                    color={"#999"}
                  />
                ) : (
                  <Ionicons
                    name="ios-square-outline"
                    size={28}
                    color={"#999"}
                  />
                )}
              </View>
            )}
            leftOpenValue={45}
            keyExtractor={(item) => item.uuid}
          />
        )}
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
      </ScrollView>
    );
  } else {
    return null;
  }
};
CheckListScreen.navigationOptions = () => ({
  title: "Check List",
});

export default CheckListScreen;

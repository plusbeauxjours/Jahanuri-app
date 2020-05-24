import React, { useState } from "react";
import styled from "styled-components";
import { SwipeListView } from "react-native-swipe-list-view";
import { Ionicons } from "@expo/vector-icons";
import Toast from "react-native-root-toast";
import { ScrollView, ActivityIndicator } from "react-native";
import { useQuery, useMutation } from "react-apollo-hooks";
import CheckListRow from "../../components/CheckListRow";
import MenuCustomHeader from "../../components/MenuCustomHeader";
import { Portal, Dialog, Paragraph } from "react-native-paper";
import { ME } from "../MyProfileScreen/MyProfileScreenQueries";
import {
  GET_CHECK_LIST_QUESTIONS,
  SUBMIT_CHECK_LIST,
} from "./CheckListScreenQueries";
import {
  GetCheckListQuestions,
  SubmitCheckList,
  SubmitCheckListVariables,
  Me,
} from "../../types/api";
import {
  NavigationScreenProp,
  NavigationState,
  NavigationParams,
} from "react-navigation";

const View = styled.View`
  flex-direction: row;
  align-items: center;
  height: 50px;
  padding: 0 20px;
`;
const LoadingContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const ButtonContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 100px;
`;
const Button = styled.Button`
  margin-top: 10px;
  width: 90%;
`;
const GreyLine = styled.View`
  margin: 0 20px;
  border-bottom-width: 0.3px;
  border-bottom-color: #999;
`;

interface IProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const CheckListScreen: React.FC<IProps> = ({ navigation }) => {
  const {
    data: { me: { user: me = null } = {} } = {},
    loading: meLoading,
  } = useQuery<Me>(ME);
  const [trueAnswerQuestionUuids, setTrueAnswerQuestionUuids] = useState<any>(
    []
  );
  const [modalOpen, setModalOpen] = useState(false);
  const {
    data: { getCheckListQuestions: { checkListQuestions = null } = {} } = {},
    loading: checkListQuestionsLoading,
  } = useQuery<GetCheckListQuestions>(GET_CHECK_LIST_QUESTIONS);
  const [submitCheckListFn, { loading: submitCheckListLoading }] = useMutation<
    SubmitCheckList,
    SubmitCheckListVariables
  >(SUBMIT_CHECK_LIST, {
    update(cache, { data: { submitCheckList } }) {
      try {
        const checkListData = cache.readQuery<GetCheckListQuestions>({
          query: GET_CHECK_LIST_QUESTIONS,
        });
        if (checkListData) {
          checkListData.getCheckListQuestions.checkListQuestions =
            submitCheckList.checkListQuestions;
          cache.writeQuery({
            query: GET_CHECK_LIST_QUESTIONS,
            data: checkListData,
          });
        }
      } catch (e) {
        console.log(e);
      }
      try {
        const meData = cache.readQuery<Me>({
          query: ME,
        });
        if (meData) {
          if (!meData.me.user.hasSubmittedPreviousCheckList) {
            meData.me.user.hasSubmittedPreviousCheckList = true;
          } else if (
            meData.me.user.hasSubmittedPreviousCheckList &&
            !meData.me.user.hasSubmittedLaterCheckList
          ) {
            meData.me.user.hasSubmittedLaterCheckList = true;
          } else if (
            !meData.me.user.hasSubmittedPreviousCheckList &&
            meData.me.user.hasSubmittedLaterCheckList
          ) {
            meData.me.user.hasSubmittedPreviousCheckList = false;
            meData.me.user.hasSubmittedLaterCheckList = false;
          } else {
            return;
          }
          cache.writeQuery({
            query: ME,
            data: meData,
          });
        }
      } catch (e) {
        console.log(e);
      }
    },
  });
  const toast = (message: string) => {
    Toast.show(message, {
      duration: Toast.durations.SHORT,
      position: Toast.positions.CENTER,
      shadow: true,
      animation: true,
      hideOnPress: true,
      delay: 0,
    });
  };
  const onPress = (newUuid: string) => {
    trueAnswerQuestionUuids.includes(newUuid)
      ? setTrueAnswerQuestionUuids(
          trueAnswerQuestionUuids.filter((uuid) => uuid !== newUuid)
        )
      : setTrueAnswerQuestionUuids([...trueAnswerQuestionUuids, newUuid]);
  };
  const submitConfirm = () => {
    submitCheckListFn({
      variables: {
        trueAnswerQuestionUuids,
        isPreviousAnswer:
          !me.hasSubmittedPreviousCheckList && !me.hasSubmittedLaterCheckList
            ? true
            : false,
      },
    });
    setModalOpen(false);
    toast("체크리스트를 제출하였습니다.");
  };
  if (meLoading || checkListQuestionsLoading) {
    return (
      <LoadingContainer>
        <ActivityIndicator />
      </LoadingContainer>
    );
  } else if (!meLoading && !checkListQuestionsLoading) {
    return (
      <>
        <Portal>
          <Dialog visible={modalOpen} onDismiss={() => setModalOpen(false)}>
            <Dialog.Title>알림</Dialog.Title>
            <Dialog.Content>
              <Paragraph>
                체크리스트를 제출한 후에는 수정을 할 수 없습니다.
              </Paragraph>
              <Paragraph>제출하시겠습니까?</Paragraph>
            </Dialog.Content>
            <Dialog.Actions>
              <Button title="취소" onPress={() => setModalOpen(false)} />
              <Button title="제출" onPress={() => submitConfirm()} />
            </Dialog.Actions>
          </Dialog>
        </Portal>
        {!me.hasSubmittedPreviousCheckList &&
          !me.hasSubmittedLaterCheckList && (
            <MenuCustomHeader title={"체크리스트"} subTitle={"(0/2)"} />
          )}
        {me.hasSubmittedPreviousCheckList && !me.hasSubmittedLaterCheckList && (
          <MenuCustomHeader title={"체크리스트"} subTitle={"(1/2)"} />
        )}
        {me.hasSubmittedPreviousCheckList && me.hasSubmittedLaterCheckList && (
          <MenuCustomHeader title={"체크리스트"} subTitle={"(2/2)"} />
        )}
        <ScrollView
          style={{
            backgroundColor: null,
          }}
          keyboardShouldPersistTaps="always"
          showsVerticalScrollIndicator={false}
        >
          {me.hasSubmittedPreviousCheckList &&
          !me.hasSubmittedLaterCheckList ? (
            <SwipeListView
              useFlatList={false}
              closeOnRowBeginSwipe={true}
              data={checkListQuestions}
              previewOpenValue={1000}
              renderItem={(data) => (
                <>
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
                    hasSubmittedPreviousCheckList={
                      me.hasSubmittedPreviousCheckList
                    }
                    hasSubmittedLaterCheckList={me.hasSubmittedLaterCheckList}
                    onPress={onPress}
                  />
                  <GreyLine />
                </>
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
              leftOpenValue={40}
              keyExtractor={(item) => item.uuid}
            />
          ) : (
            checkListQuestions &&
            checkListQuestions.length !== 0 &&
            checkListQuestions.map((checkListQuestion: any) => (
              <React.Fragment key={checkListQuestion.uuid}>
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
                  hasSubmittedPreviousCheckList={
                    me.hasSubmittedPreviousCheckList
                  }
                  hasSubmittedLaterCheckList={me.hasSubmittedLaterCheckList}
                  onPress={onPress}
                />
                <GreyLine />
              </React.Fragment>
            ))
          )}
          {me.hasSubmittedPreviousCheckList &&
          me.hasSubmittedLaterCheckList ? null : (
            <ButtonContainer>
              <Button
                raised
                primary
                style={{ marginTop: 30, marginBottom: 30 }}
                disabled={
                  trueAnswerQuestionUuids.length === 0 ||
                  checkListQuestionsLoading
                }
                loading={submitCheckListLoading}
                onPress={() => setModalOpen(true)}
                title="제출"
              />
            </ButtonContainer>
          )}
        </ScrollView>
      </>
    );
  } else {
    return null;
  }
};

export default CheckListScreen;

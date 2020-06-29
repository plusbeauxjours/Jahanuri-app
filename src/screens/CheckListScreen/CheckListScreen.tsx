import React, { useState } from "react";
import styled from "styled-components";
import { SwipeListView } from "react-native-swipe-list-view";
import { FontAwesome } from "@expo/vector-icons";
import Toast from "react-native-root-toast";
import { ScrollView, ActivityIndicator } from "react-native";
import { useQuery, useMutation } from "react-apollo-hooks";
import CheckListRow from "../../components/CheckListRow";
import MenuCustomHeader from "../../components/MenuCustomHeader";
import { Portal, Dialog, Paragraph } from "react-native-paper";
import { ME } from "../MyProfileScreen/MyProfileScreenQueries";
import Button from "../../components/Button";
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
  justify-content: center;
  align-items: center;
  height: 100px;
  margin: 30px 0;
`;
const DialogButtonContainer = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  margin-right: 10px;
  margin-bottom: 10px;
`;
const GreyLine = styled.View`
  margin: 0 20px;
  border-bottom-width: 0.3px;
  border-bottom-color: #999;
`;
const ButtonSpace = styled.View`
  width: 20px;
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
    data: {
      getCheckListQuestions: {
        checkListQuestions = null,
        checkListAnswers = null,
      } = {},
    } = {},
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
          checkListData.getCheckListQuestions.checkListAnswers =
            submitCheckList.checkListAnswers;
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
    setTrueAnswerQuestionUuids([]);
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
              <DialogButtonContainer>
                <Button
                  disabled={submitCheckListLoading}
                  text="취소"
                  onPress={() => setModalOpen(false)}
                />
                <ButtonSpace />
                <Button
                  disabled={submitCheckListLoading}
                  text="제출"
                  onPress={() => submitConfirm()}
                />
              </DialogButtonContainer>
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
          <MenuCustomHeader title={"체크리스트"} subTitle={"(2/2 제출 완료)"} />
        )}
        <ScrollView
          style={{
            backgroundColor: null,
          }}
          keyboardShouldPersistTaps="always"
          showsVerticalScrollIndicator={false}
        >
          {/* 0/2 */}
          {!me.hasSubmittedPreviousCheckList && !me.hasSubmittedLaterCheckList && (
            <SwipeListView
              useFlatList={false}
              closeOnRowBeginSwipe={true}
              data={checkListQuestions}
              previewOpenValue={1000}
              renderItem={(data) => (
                <>
                  <CheckListRow
                    key={data?.item?.uuid}
                    uuid={data?.item?.uuid}
                    question={data?.item?.question}
                    hasSubmittedPreviousCheckList={
                      me.hasSubmittedPreviousCheckList
                    }
                    hasSubmittedLaterCheckList={me.hasSubmittedLaterCheckList}
                    onPress={onPress}
                  />
                  <GreyLine />
                </>
              )}
              leftOpenValue={50}
              keyExtractor={(item) => item.uuid}
            />
          )}
          {/* 1/2 */}
          {me.hasSubmittedPreviousCheckList && !me.hasSubmittedLaterCheckList && (
            <SwipeListView
              useFlatList={false}
              closeOnRowBeginSwipe={true}
              data={checkListAnswers}
              previewOpenValue={1000}
              renderItem={(data) => (
                <>
                  <CheckListRow
                    key={data?.item?.uuid}
                    uuid={data?.item?.question?.uuid}
                    question={data?.item?.question?.question}
                    previousAnswer={data?.item?.previousAnswer}
                    laterAnswer={data?.item?.laterAnswer}
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
                  {data?.item?.previousAnswer ? (
                    <FontAwesome
                      name="check-square-o"
                      color={"#999"}
                      size={24}
                    />
                  ) : (
                    <FontAwesome name="square-o" color={"#999"} size={24} />
                  )}
                </View>
              )}
              leftOpenValue={50}
              keyExtractor={(item) => item.uuid}
            />
          )}
          {/* 2/2 */}
          {me.hasSubmittedPreviousCheckList &&
            me.hasSubmittedLaterCheckList &&
            checkListAnswers?.map((checkListAnswer: any) => (
              <React.Fragment key={checkListAnswer.uuid}>
                <CheckListRow
                  key={checkListAnswer.uuid}
                  uuid={checkListAnswer.uuid}
                  question={checkListAnswer.question.question}
                  previousAnswer={checkListAnswer.previousAnswer}
                  laterAnswer={checkListAnswer.laterAnswer}
                  hasSubmittedPreviousCheckList={
                    me.hasSubmittedPreviousCheckList
                  }
                  hasSubmittedLaterCheckList={me.hasSubmittedLaterCheckList}
                  onPress={onPress}
                />
                <GreyLine />
              </React.Fragment>
            ))}
          {(!me.hasSubmittedPreviousCheckList ||
            !me.hasSubmittedLaterCheckList) && (
            <ButtonContainer>
              <Button
                disabled={
                  trueAnswerQuestionUuids.length === 0 ||
                  checkListQuestionsLoading
                }
                loading={submitCheckListLoading}
                onPress={() => setModalOpen(true)}
                text="제출"
                border={true}
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

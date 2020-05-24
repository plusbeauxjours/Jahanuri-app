import React, { useState } from "react";
import styled from "styled-components";
import { NavigationStackScreenComponent } from "react-navigation-stack";
import MenuCustomHeader from "../../components/MenuCustomHeader";
import {
  SubmitHabitCheckList,
  SubmitHabitCheckListVariables,
} from "../../types/api";
import { useMutation } from "react-apollo-hooks";
import Toast from "react-native-root-toast";
import * as Yup from "yup";
import { Formik } from "formik";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Portal, Dialog, Paragraph } from "react-native-paper";
import Divider from "../../components/Divider";
import FormikInput from "../../components/Formik/FormikInput";
import { CheckBox } from "react-native-elements";
import { SUBMIT_HABIT_CHECK_LIST } from "./HabitCheckListScreenQueries";

const Box = styled.View`
  width: 100%;
  padding: 0 20px;
`;
const View = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const Text = styled.Text``;
const ButtonContainer = styled.View`
  justify-content: center;
  align-items: center;
  height: 100px;
`;
const Button = styled.Button`
  margin-top: 10px;
  width: 90%;
`;

const initialValues = {
  job: "",
  wakeupTime: "",
  wakeupLong: "",
  wakeupCondition: [],
  wakeupConditionEtc: "",
  wakeupFirstThing: "",
  wakeupFirstThingEtc: [],
  meal: "",
  mealDuring: [],
  mealDuringEtc: "",
  mealWithWater: [],
  mealWithSnack: [],
  mealWithNightFood: [],
  afterLunch: [],
  afterLunchEtc: "",
  saying: [],
  sayingEtc: "",
  sayingRepeat: "",
  walking: [],
  walkingEtc: "",
  posture: [],
  postureEtc: "",
  postureDetail: [],
  postureDetailEtc: "",
  bodyHeat: [],
  bodyHeatEtc: "",
  exercise: "",
  sleeping: [],
  sleepingEtc: "",
  beforeSleeping: [],
  beforeSleepingEtc: "",
  goodThing: "",
  badThing: "",
};
const HabitCheckListScreen: NavigationStackScreenComponent = ({
  navigation,
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [wakeupCondition, setWakeupCondition] = useState<any>([]);
  const [wakeupConditionA, setWakeupConditionA] = useState<boolean>(false);
  const [wakeupConditionB, setWakeupConditionB] = useState<boolean>(false);
  const [wakeupConditionC, setWakeupConditionC] = useState<boolean>(false);
  const [wakeupConditionD, setWakeupConditionD] = useState<boolean>(false);
  const [wakeupConditionE, setWakeupConditionE] = useState<boolean>(false);
  const [wakeupConditionF, setWakeupConditionF] = useState<boolean>(false);
  const [wakeupConditionG, setWakeupConditionG] = useState<boolean>(false);
  const [wakeupConditionH, setWakeupConditionH] = useState<boolean>(false);
  const [
    submitHabitCheckListFn,
    { loading: submitHabitCheckListLoading },
  ] = useMutation<SubmitHabitCheckList, SubmitHabitCheckListVariables>(
    SUBMIT_HABIT_CHECK_LIST
  );
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
  const submitConfirm = (values: any) => {
    submitHabitCheckListFn({
      variables: {
        job: values.job,
        wakeupTime: values.wakeupTime,
        wakeupLong: values.wakeupLong,
        wakeupCondition: values.wakeupCondition,
        wakeupConditionEtc: values.wakeupConditionEtc,
        wakeupFirstThing: values.wakeupFirstThing,
        wakeupFirstThingEtc: values.wakeupFirstThingEtc,
        meal: values.meal,
        mealDuring: values.mealDuring,
        mealDuringEtc: values.mealDuringEtc,
        mealWithWater: values.mealWithWater,
        mealWithSnack: values.mealWithSnack,
        mealWithNightFood: values.mealWithNightFood,
        afterLunch: values.afterLunch,
        afterLunchEtc: values.afterLunchEtc,
        saying: values.saying,
        sayingEtc: values.sayingEtc,
        sayingRepeat: values.sayingRepeat,
        walking: values.walking,
        walkingEtc: values.walkingEtc,
        posture: values.posture,
        postureEtc: values.postureEtc,
        postureDetail: values.postureDetail,
        postureDetailEtc: values.postureDetailEtc,
        bodyHeat: values.bodyHeat,
        bodyHeatEtc: values.bodyHeatEtc,
        exercise: values.exercise,
        sleeping: values.sleeping,
        sleepingEtc: values.sleepingEtc,
        beforeSleeping: values.beforeSleeping,
        beforeSleepingEtc: values.beforeSleepingEtc,
        goodThing: values.goodThing,
        badThing: values.badThing,
      },
    });
    setModalOpen(false);
    navigation.navigate("MyprofileScreen");
    toast("나의 습관을 제출하였습니다.");
  };
  const toggleItems = (array: any, action: any, variables: string) => {
    if (array.includes(variables)) {
      console.log(array, variables);
      action(array.filter((i) => i !== variables));
      console.log("includes", array);
    } else {
      action((i) => [...i, variables]);
      array.push(variables);
      console.log("not includes", array);
    }
  };
  const validationSchema = Yup.object().shape({
    job: Yup.string().required("필수 입력 사항입니다."),
    wakeupTime: Yup.string().required("필수 입력 사항입니다."),
    wakeupLong: Yup.string().required("필수 입력 사항입니다."),
    sayingRepeat: Yup.string().required("필수 입력 사항입니다."),
    exercise: Yup.string().required("필수 입력 사항입니다."),
    goodThing: Yup.string().required("필수 입력 사항입니다."),
    badThing: Yup.string().required("필수 입력 사항입니다."),
  });
  return (
    <>
      <MenuCustomHeader title={"나의 습관"} />
      <KeyboardAwareScrollView
        contentContainerStyle={{
          flexGrow: 1,
          backgroundColor: null,
          alignItems: "center",
          justifyContent: "center",
        }}
        keyboardShouldPersistTaps="handled"
      >
        <Formik
          initialValues={initialValues}
          onSubmit={() => {}}
          validationSchema={validationSchema}
        >
          {({
            values,
            setFieldValue,
            setFieldTouched,
            touched,
            errors,
            isValid,
          }) => (
            <>
              <Portal>
                <Dialog
                  visible={modalOpen}
                  onDismiss={() => setModalOpen(false)}
                >
                  <Dialog.Title>알림</Dialog.Title>
                  <Dialog.Content>
                    <Paragraph>
                      일지는 제출한 후에는 수정을 할 수 없습니다.
                    </Paragraph>
                    <Paragraph>제출하시겠습니까?</Paragraph>
                  </Dialog.Content>
                  <Dialog.Actions>
                    <Button title="취소" onPress={() => setModalOpen(false)} />
                    <Button
                      title="제출"
                      onPress={() => submitConfirm(values)}
                    />
                  </Dialog.Actions>
                </Dialog>
              </Portal>
              <FormikInput
                label="직업 / 하는일"
                value={values.job}
                onChange={setFieldValue}
                onTouch={setFieldTouched}
                name="job"
                error={touched.job && errors.job}
                placeholder="건축가"
              />
              <FormikInput
                label="기상시간이 규칙적인가요?"
                value={values.wakeupTime}
                onChange={setFieldValue}
                onTouch={setFieldTouched}
                name="wakeupTime"
                error={touched.wakeupTime && errors.wakeupTime}
                placeholder="네, 7시 / 아니오, 9시~10시"
              />
              <FormikInput
                label="하루 몇 시간 정도 주무시나요?"
                value={values.wakeupLong}
                onChange={setFieldValue}
                onTouch={setFieldTouched}
                name="wakeupLong"
                error={touched.wakeupLong && errors.wakeupLong}
                placeholder="7시간 / 4시간, 낮잠 총 1시간"
              />
              <Divider
                text={"나는 아침에 일어났을 때... (중복 가능)"}
                color={"dark"}
              />
              <Box>
                <CheckBox
                  size={30}
                  checked={wakeupConditionA}
                  checkedColor={"#8b00ff"}
                  onPress={() => {
                    setWakeupConditionA(
                      (wakeupConditionA) => !wakeupConditionA
                    );
                  }}
                  title={"개운하다"}
                  textStyle={{ fontSize: 16, fontWeight: "200" }}
                  containerStyle={{ backgroundColor: null }}
                />
                <CheckBox
                  size={30}
                  checked={wakeupConditionB}
                  checkedColor={"#8b00ff"}
                  onPress={() => {
                    setWakeupConditionB(
                      (wakeupConditionB) => !wakeupConditionB
                    );
                  }}
                  title={"머리가 아프다"}
                  textStyle={{ fontSize: 16, fontWeight: "200" }}
                  containerStyle={{ backgroundColor: null }}
                />
                <CheckBox
                  size={30}
                  checked={wakeupConditionC}
                  checkedColor={"#8b00ff"}
                  onPress={() => {
                    setWakeupConditionC(
                      (wakeupConditionC) => !wakeupConditionC
                    );
                  }}
                  title={"눈이 아프거나 잘 안 떠진다"}
                  textStyle={{ fontSize: 16, fontWeight: "200" }}
                  containerStyle={{ backgroundColor: null }}
                />
                <CheckBox
                  size={30}
                  checked={wakeupConditionD}
                  checkedColor={"#8b00ff"}
                  onPress={() => {
                    setWakeupConditionD(
                      (wakeupConditionD) => !wakeupConditionD
                    );
                  }}
                  title={"몸이 결리거나 뻐근하다"}
                  textStyle={{ fontSize: 16, fontWeight: "200" }}
                  containerStyle={{ backgroundColor: null }}
                />
                <CheckBox
                  size={30}
                  checked={wakeupConditionE}
                  checkedColor={"#8b00ff"}
                  onPress={() => {
                    setWakeupConditionE(
                      (wakeupConditionE) => !wakeupConditionE
                    );
                  }}
                  title={"일어나기 힘들다"}
                  textStyle={{ fontSize: 16, fontWeight: "200" }}
                  containerStyle={{ backgroundColor: null }}
                />
                <CheckBox
                  size={30}
                  checked={wakeupConditionF}
                  checkedColor={"#8b00ff"}
                  onPress={() => {
                    setWakeupConditionF(
                      (wakeupConditionF) => !wakeupConditionF
                    );
                  }}
                  title={"멍하다"}
                  textStyle={{ fontSize: 16, fontWeight: "200" }}
                  containerStyle={{ backgroundColor: null }}
                />
                <CheckBox
                  size={30}
                  checked={wakeupConditionG}
                  checkedColor={"#8b00ff"}
                  onPress={() => {
                    setWakeupConditionG(
                      (wakeupConditionG) => !wakeupConditionG
                    );
                  }}
                  title={"손이나 발 등이 저리다"}
                  textStyle={{ fontSize: 16, fontWeight: "200" }}
                  containerStyle={{ backgroundColor: null }}
                />
                <CheckBox
                  size={30}
                  checked={wakeupConditionH}
                  checkedColor={"#8b00ff"}
                  onPress={() => {
                    toggleItems(
                      wakeupCondition,
                      setWakeupCondition,
                      "WAKEUP_CONDITION_H"
                    );
                    setWakeupConditionH(
                      (wakeupConditionH) => !wakeupConditionH
                    );
                  }}
                  title={"부어있다 (얼굴, 손, 발 등)"}
                  textStyle={{ fontSize: 16, fontWeight: "200" }}
                  containerStyle={{ backgroundColor: null }}
                />
              </Box>
              <Divider
                text={"아침에 눈 떠서 가장 처음에 하는 일은? (중복 가능)"}
                color={"dark"}
              />
              <Box>
                {/* <CheckBox
                  size={30}
                  checked={wakeupConditionH}
                  checkedColor={"#8b00ff"}
                  onPress={() => {
                    toggleItems(values.wakeupFirstThing, "WAKEUP_CONDITION_A");
                    setWakeupConditionH(
                      (wakeupConditionH) => !wakeupConditionH
                    );
                  }}
                  title={"부어있다 (얼굴, 손, 발 등)"}
                  textStyle={{ fontSize: 16, fontWeight: "200" }}
                  containerStyle={{ backgroundColor: null }}
                /> */}
              </Box>
              <FormikInput
                label="하루에 몇 끼, 무엇을, 몇 시에 드시나요?"
                value={values.meal}
                onChange={setFieldValue}
                onTouch={setFieldTouched}
                name="meal"
                error={touched.meal && errors.meal}
                placeholder="삼시세끼 아침점심저녁 모두 밥과 반찬과 국을 챙겨먹음"
              />
              <ButtonContainer>
                <Button
                  raised
                  primary
                  disabled={!isValid}
                  loading={submitHabitCheckListLoading}
                  onPress={() => setModalOpen(true)}
                  title="제출"
                />
              </ButtonContainer>
            </>
          )}
        </Formik>
      </KeyboardAwareScrollView>
    </>
  );
};
HabitCheckListScreen.navigationOptions = () => ({});
export default HabitCheckListScreen;

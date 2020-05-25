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
import dimensions from "../../constants/dimensions";

const Box = styled.View`
  width: 100%;
  padding: 0 15px;
`;
const Line = styled.View`
  width: ${dimensions.width - 30};
  flex-direction: row;
  border-bottom-width: 1px;
  opacity: 0.4;
  margin: 20px;
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
const WhiteSpace = styled.View`
  height: 30px;
`;

const initialValues = {
  job: "",
  wakeupTime: "",
  wakeupLong: "",
  wakeupConditionEtc: "",
  wakeupFirstThingEtc: "",
  meal: "",
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
  const [wakeupFirstThing, setWakeupFirstThing] = useState<any>([]);
  const [wakeupFirstThingA, setWakeupFirstThingA] = useState<boolean>(false);
  const [wakeupFirstThingB, setWakeupFirstThingB] = useState<boolean>(false);
  const [wakeupFirstThingC, setWakeupFirstThingC] = useState<boolean>(false);
  const [wakeupFirstThingD, setWakeupFirstThingD] = useState<boolean>(false);
  const [wakeupFirstThingE, setWakeupFirstThingE] = useState<boolean>(false);
  const [wakeupFirstThingF, setWakeupFirstThingF] = useState<boolean>(false);
  const [mealDuring, setMealDuring] = useState<any>([]);
  const [mealDuringA, setMealDuringA] = useState<boolean>(false);
  const [mealDuringB, setMealDuringB] = useState<boolean>(false);
  const [mealDuringC, setMealDuringC] = useState<boolean>(false);
  const [mealDuringD, setMealDuringD] = useState<boolean>(false);
  const [mealDuringE, setMealDuringE] = useState<boolean>(false);
  const [mealDuringF, setMealDuringF] = useState<boolean>(false);
  const [mealDuringG, setMealDuringG] = useState<boolean>(false);
  const [mealDuringH, setMealDuringH] = useState<boolean>(false);
  const [mealDuringI, setMealDuringI] = useState<boolean>(false);
  const [mealDuringJ, setMealDuringJ] = useState<boolean>(false);
  const [mealDuringK, setMealDuringK] = useState<boolean>(false);
  const [afterLunch, setAfterLunch] = useState<any>([]);
  const [afterLunchA, setAfterLunchA] = useState<boolean>(false);
  const [afterLunchB, setAfterLunchB] = useState<boolean>(false);
  const [afterLunchC, setAfterLunchC] = useState<boolean>(false);
  const [afterLunchD, setAfterLunchD] = useState<boolean>(false);
  const [afterLunchE, setAfterLunchE] = useState<boolean>(false);
  const [afterLunchF, setAfterLunchF] = useState<boolean>(false);
  const [saying, setSaying] = useState<any>([]);
  const [sayingA, setSayingA] = useState<boolean>(false);
  const [sayingB, setSayingB] = useState<boolean>(false);
  const [sayingC, setSayingC] = useState<boolean>(false);
  const [sayingD, setSayingD] = useState<boolean>(false);
  const [sayingE, setSayingE] = useState<boolean>(false);
  const [sayingF, setSayingF] = useState<boolean>(false);
  const [sayingG, setSayingG] = useState<boolean>(false);
  const [sayingH, setSayingH] = useState<boolean>(false);
  const [sayingI, setSayingI] = useState<boolean>(false);
  const [sayingJ, setSayingJ] = useState<boolean>(false);
  const [sayingK, setSayingK] = useState<boolean>(false);
  const [walking, setWalking] = useState<any>([]);
  const [walkingA, setWalkingA] = useState<boolean>(false);
  const [walkingB, setWalkingB] = useState<boolean>(false);
  const [walkingC, setWalkingC] = useState<boolean>(false);
  const [walkingD, setWalkingD] = useState<boolean>(false);
  const [walkingE, setWalkingE] = useState<boolean>(false);
  const [walkingF, setWalkingF] = useState<boolean>(false);
  const [walkingG, setWalkingG] = useState<boolean>(false);
  const [walkingH, setWalkingH] = useState<boolean>(false);
  const [posture, setPosture] = useState<any>([]);
  const [postureA, setPostureA] = useState<boolean>(false);
  const [postureB, setPostureB] = useState<boolean>(false);
  const [postureC, setPostureC] = useState<boolean>(false);
  const [postureD, setPostureD] = useState<boolean>(false);
  const [postureE, setPostureE] = useState<boolean>(false);
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
      action(array.filter((i) => i !== variables));
      console.log("includes", array);
    } else {
      action((i) => [...i, variables]);
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
              <WhiteSpace />
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
                    toggleItems(
                      wakeupCondition,
                      setWakeupCondition,
                      "WAKEUP_CONDITION_A"
                    );
                    setWakeupConditionA(
                      (wakeupConditionA) => !wakeupConditionA
                    );
                  }}
                  title={"개운하다."}
                  textStyle={{ fontSize: 16, fontWeight: "200" }}
                  containerStyle={{ backgroundColor: null }}
                />
                <CheckBox
                  size={30}
                  checked={wakeupConditionB}
                  checkedColor={"#8b00ff"}
                  onPress={() => {
                    toggleItems(
                      wakeupCondition,
                      setWakeupCondition,
                      "WAKEUP_CONDITION_B"
                    );
                    setWakeupConditionB(
                      (wakeupConditionB) => !wakeupConditionB
                    );
                  }}
                  title={"머리가 아프다."}
                  textStyle={{ fontSize: 16, fontWeight: "200" }}
                  containerStyle={{ backgroundColor: null }}
                />
                <CheckBox
                  size={30}
                  checked={wakeupConditionC}
                  checkedColor={"#8b00ff"}
                  onPress={() => {
                    toggleItems(
                      wakeupCondition,
                      setWakeupCondition,
                      "WAKEUP_CONDITION_C"
                    );
                    setWakeupConditionC(
                      (wakeupConditionC) => !wakeupConditionC
                    );
                  }}
                  title={"눈이 아프거나 잘 안 떠진다."}
                  textStyle={{ fontSize: 16, fontWeight: "200" }}
                  containerStyle={{ backgroundColor: null }}
                />
                <CheckBox
                  size={30}
                  checked={wakeupConditionD}
                  checkedColor={"#8b00ff"}
                  onPress={() => {
                    toggleItems(
                      wakeupCondition,
                      setWakeupCondition,
                      "WAKEUP_CONDITION_D"
                    );
                    setWakeupConditionD(
                      (wakeupConditionD) => !wakeupConditionD
                    );
                  }}
                  title={"몸이 결리거나 뻐근하다."}
                  textStyle={{ fontSize: 16, fontWeight: "200" }}
                  containerStyle={{ backgroundColor: null }}
                />
                <CheckBox
                  size={30}
                  checked={wakeupConditionE}
                  checkedColor={"#8b00ff"}
                  onPress={() => {
                    toggleItems(
                      wakeupCondition,
                      setWakeupCondition,
                      "WAKEUP_CONDITION_E"
                    );
                    setWakeupConditionE(
                      (wakeupConditionE) => !wakeupConditionE
                    );
                  }}
                  title={"일어나기 힘들다."}
                  textStyle={{ fontSize: 16, fontWeight: "200" }}
                  containerStyle={{ backgroundColor: null }}
                />
                <CheckBox
                  size={30}
                  checked={wakeupConditionF}
                  checkedColor={"#8b00ff"}
                  onPress={() => {
                    toggleItems(
                      wakeupCondition,
                      setWakeupCondition,
                      "WAKEUP_CONDITION_F"
                    );
                    setWakeupConditionF(
                      (wakeupConditionF) => !wakeupConditionF
                    );
                  }}
                  title={"멍하다."}
                  textStyle={{ fontSize: 16, fontWeight: "200" }}
                  containerStyle={{ backgroundColor: null }}
                />
                <CheckBox
                  size={30}
                  checked={wakeupConditionG}
                  checkedColor={"#8b00ff"}
                  onPress={() => {
                    toggleItems(
                      wakeupCondition,
                      setWakeupCondition,
                      "WAKEUP_CONDITION_G"
                    );
                    setWakeupConditionG(
                      (wakeupConditionG) => !wakeupConditionG
                    );
                  }}
                  title={"손이나 발 등이 저리다."}
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
                <CheckBox
                  size={30}
                  checked={wakeupFirstThingA}
                  checkedColor={"#8b00ff"}
                  onPress={() => {
                    toggleItems(
                      wakeupFirstThing,
                      setWakeupFirstThing,
                      "WAKEUP_FIRST_THING_A"
                    );
                    setWakeupFirstThingA(
                      (wakeupFirstThingA) => !wakeupFirstThingA
                    );
                  }}
                  title={"찬물 혹은 찬음료를 마신다."}
                  textStyle={{ fontSize: 16, fontWeight: "200" }}
                  containerStyle={{ backgroundColor: null }}
                />
                <CheckBox
                  size={30}
                  checked={wakeupFirstThingB}
                  checkedColor={"#8b00ff"}
                  onPress={() => {
                    toggleItems(
                      wakeupFirstThing,
                      setWakeupFirstThing,
                      "WAKEUP_FIRST_THING_B"
                    );
                    setWakeupFirstThingB(
                      (wakeupFirstThingB) => !wakeupFirstThingB
                    );
                  }}
                  title={"뜨거운 물 혹은 차를 마신다."}
                  textStyle={{ fontSize: 16, fontWeight: "200" }}
                  containerStyle={{ backgroundColor: null }}
                />
                <CheckBox
                  size={30}
                  checked={wakeupFirstThingC}
                  checkedColor={"#8b00ff"}
                  onPress={() => {
                    toggleItems(
                      wakeupFirstThing,
                      setWakeupFirstThing,
                      "WAKEUP_FIRST_THING_C"
                    );
                    setWakeupFirstThingC(
                      (wakeupFirstThingC) => !wakeupFirstThingC
                    );
                  }}
                  title={"가벼운 스트레칭"}
                  textStyle={{ fontSize: 16, fontWeight: "200" }}
                  containerStyle={{ backgroundColor: null }}
                />
                <CheckBox
                  size={30}
                  checked={wakeupFirstThingD}
                  checkedColor={"#8b00ff"}
                  onPress={() => {
                    toggleItems(
                      wakeupFirstThing,
                      setWakeupFirstThing,
                      "WAKEUP_FIRST_THING_D"
                    );
                    setWakeupFirstThingD(
                      (wakeupFirstThingD) => !wakeupFirstThingD
                    );
                  }}
                  title={"양치, 세수, 샤워"}
                  textStyle={{ fontSize: 16, fontWeight: "200" }}
                  containerStyle={{ backgroundColor: null }}
                />
                <CheckBox
                  size={30}
                  checked={wakeupFirstThingE}
                  checkedColor={"#8b00ff"}
                  onPress={() => {
                    toggleItems(
                      wakeupFirstThing,
                      setWakeupFirstThing,
                      "WAKEUP_FIRST_THING_E"
                    );
                    setWakeupFirstThingE(
                      (wakeupFirstThingE) => !wakeupFirstThingE
                    );
                  }}
                  title={"스마트폰"}
                  textStyle={{ fontSize: 16, fontWeight: "200" }}
                  containerStyle={{ backgroundColor: null }}
                />
                <CheckBox
                  size={30}
                  checked={wakeupFirstThingF}
                  checkedColor={"#8b00ff"}
                  onPress={() => {
                    toggleItems(
                      wakeupFirstThing,
                      setWakeupFirstThing,
                      "WAKEUP_FIRST_THING_F"
                    );
                    setWakeupFirstThingF(
                      (wakeupFirstThingF) => !wakeupFirstThingF
                    );
                  }}
                  title={"잡지, 신문"}
                  textStyle={{ fontSize: 16, fontWeight: "200" }}
                  containerStyle={{ backgroundColor: null }}
                />
              </Box>
              <Line />
              <FormikInput
                label="하루에 몇 끼, 무엇을, 몇 시에 드시나요?"
                value={values.meal}
                onChange={setFieldValue}
                onTouch={setFieldTouched}
                name="meal"
                error={touched.meal && errors.meal}
                placeholder="삼시세끼 아침점심저녁 모두 밥과 반찬과 국을 챙겨먹음"
              />
              <Divider
                text={"식사할 때, 나는 주로... (중복 가능)"}
                color={"dark"}
              />
              <Box>
                <CheckBox
                  size={30}
                  checked={mealDuringA}
                  checkedColor={"#8b00ff"}
                  onPress={() => {
                    toggleItems(mealDuring, setMealDuring, "MEAL_DURING_A");
                    setMealDuringA((mealDuringA) => !mealDuringA);
                  }}
                  title={"대화를 많이 하는 편이다."}
                  textStyle={{ fontSize: 16, fontWeight: "200" }}
                  containerStyle={{ backgroundColor: null }}
                />
                <CheckBox
                  size={30}
                  checked={mealDuringB}
                  checkedColor={"#8b00ff"}
                  onPress={() => {
                    toggleItems(mealDuring, setMealDuring, "MEAL_DURING_B");
                    setMealDuringB((mealDuringB) => !mealDuringB);
                  }}
                  title={"먹는 것에 집중하는 편이다."}
                  textStyle={{ fontSize: 16, fontWeight: "200" }}
                  containerStyle={{ backgroundColor: null }}
                />
                <CheckBox
                  size={30}
                  checked={mealDuringC}
                  checkedColor={"#8b00ff"}
                  onPress={() => {
                    toggleItems(mealDuring, setMealDuring, "MEAL_DURING_C");
                    setMealDuringC((mealDuringC) => !mealDuringC);
                  }}
                  title={"TV, 스마트폰 등을 보면서 먹는다."}
                  textStyle={{ fontSize: 16, fontWeight: "200" }}
                  containerStyle={{ backgroundColor: null }}
                />
                <CheckBox
                  size={30}
                  checked={mealDuringD}
                  checkedColor={"#8b00ff"}
                  onPress={() => {
                    toggleItems(mealDuring, setMealDuring, "MEAL_DURING_D");
                    setMealDuringD((mealDuringD) => !mealDuringD);
                  }}
                  title={"꼭꼭 씹어서 먹는다."}
                  textStyle={{ fontSize: 16, fontWeight: "200" }}
                  containerStyle={{ backgroundColor: null }}
                />
                <CheckBox
                  size={30}
                  checked={mealDuringE}
                  checkedColor={"#8b00ff"}
                  onPress={() => {
                    toggleItems(mealDuring, setMealDuring, "MEAL_DURING_E");
                    setMealDuringE((mealDuringE) => !mealDuringE);
                  }}
                  title={"급하게 먹는다."}
                  textStyle={{ fontSize: 16, fontWeight: "200" }}
                  containerStyle={{ backgroundColor: null }}
                />
                <CheckBox
                  size={30}
                  checked={mealDuringF}
                  checkedColor={"#8b00ff"}
                  onPress={() => {
                    toggleItems(mealDuring, setMealDuring, "MEAL_DURING_F");
                    setMealDuringF((mealDuringF) => !mealDuringF);
                  }}
                  title={"많이 먹는다."}
                  textStyle={{ fontSize: 16, fontWeight: "200" }}
                  containerStyle={{ backgroundColor: null }}
                />
                <CheckBox
                  size={30}
                  checked={mealDuringG}
                  checkedColor={"#8b00ff"}
                  onPress={() => {
                    toggleItems(mealDuring, setMealDuring, "MEAL_DURING_G");
                    setMealDuringG((mealDuringG) => !mealDuringG);
                  }}
                  title={"입이 짧다 (많이 못 먹는다)"}
                  textStyle={{ fontSize: 16, fontWeight: "200" }}
                  containerStyle={{ backgroundColor: null }}
                />
                <CheckBox
                  size={30}
                  checked={mealDuringH}
                  checkedColor={"#8b00ff"}
                  onPress={() => {
                    toggleItems(mealDuring, setMealDuring, "MEAL_DURING_H");
                    setMealDuringH((mealDuringH) => !mealDuringH);
                  }}
                  title={"음식의 맛을 음미하면서 먹는다."}
                  textStyle={{ fontSize: 16, fontWeight: "200" }}
                  containerStyle={{ backgroundColor: null }}
                />
                <CheckBox
                  size={30}
                  checked={mealDuringI}
                  checkedColor={"#8b00ff"}
                  onPress={() => {
                    toggleItems(mealDuring, setMealDuring, "MEAL_DURING_I");
                    setMealDuringI((mealDuringI) => !mealDuringI);
                  }}
                  title={"끼니 때우듯 먹는 편이다."}
                  textStyle={{ fontSize: 16, fontWeight: "200" }}
                  containerStyle={{ backgroundColor: null }}
                />
                <CheckBox
                  size={30}
                  checked={mealDuringJ}
                  checkedColor={"#8b00ff"}
                  onPress={() => {
                    toggleItems(mealDuring, setMealDuring, "MEAL_DURING_J");
                    setMealDuringJ((mealDuringJ) => !mealDuringJ);
                  }}
                  title={"식욕이 별로 없다."}
                  textStyle={{ fontSize: 16, fontWeight: "200" }}
                  containerStyle={{ backgroundColor: null }}
                />
                <CheckBox
                  size={30}
                  checked={mealDuringK}
                  checkedColor={"#8b00ff"}
                  onPress={() => {
                    toggleItems(mealDuring, setMealDuring, "MEAL_DURING_K");
                    setMealDuringK((mealDuringK) => !mealDuringK);
                  }}
                  title={"밥맛이 아주 좋다."}
                  textStyle={{ fontSize: 16, fontWeight: "200" }}
                  containerStyle={{ backgroundColor: null }}
                />
              </Box>
              <Divider
                text={"점심식사 후 나는 주로... (중복 가능)"}
                color={"dark"}
              />
              <Box>
                <CheckBox
                  size={30}
                  checked={afterLunchA}
                  checkedColor={"#8b00ff"}
                  onPress={() => {
                    toggleItems(afterLunch, setAfterLunch, "AFTER_LUNCH_A");
                    setAfterLunchA((afterLunchA) => !afterLunchA);
                  }}
                  title={"스마트폰을 본다."}
                  textStyle={{ fontSize: 16, fontWeight: "200" }}
                  containerStyle={{ backgroundColor: null }}
                />
                <CheckBox
                  size={30}
                  checked={afterLunchB}
                  checkedColor={"#8b00ff"}
                  onPress={() => {
                    toggleItems(afterLunch, setAfterLunch, "AFTER_LUNCH_B");
                    setAfterLunchB((afterLunchB) => !afterLunchB);
                  }}
                  title={"밖에 나가 걷거나 산책을 한다."}
                  textStyle={{ fontSize: 16, fontWeight: "200" }}
                  containerStyle={{ backgroundColor: null }}
                />
                <CheckBox
                  size={30}
                  checked={afterLunchC}
                  checkedColor={"#8b00ff"}
                  onPress={() => {
                    toggleItems(afterLunch, setAfterLunch, "AFTER_LUNCH_C");
                    setAfterLunchC((afterLunchC) => !afterLunchC);
                  }}
                  title={"담배를 핀다."}
                  textStyle={{ fontSize: 16, fontWeight: "200" }}
                  containerStyle={{ backgroundColor: null }}
                />
                <CheckBox
                  size={30}
                  checked={afterLunchD}
                  checkedColor={"#8b00ff"}
                  onPress={() => {
                    toggleItems(afterLunch, setAfterLunch, "AFTER_LUNCH_D");
                    setAfterLunchD((afterLunchD) => !afterLunchD);
                  }}
                  title={"커피 등 후식을 즐긴다."}
                  textStyle={{ fontSize: 16, fontWeight: "200" }}
                  containerStyle={{ backgroundColor: null }}
                />
                <CheckBox
                  size={30}
                  checked={afterLunchE}
                  checkedColor={"#8b00ff"}
                  onPress={() => {
                    toggleItems(afterLunch, setAfterLunch, "AFTER_LUNCH_E");
                    setAfterLunchE((afterLunchE) => !afterLunchE);
                  }}
                  title={"수다를 즐긴다."}
                  textStyle={{ fontSize: 16, fontWeight: "200" }}
                  containerStyle={{ backgroundColor: null }}
                />
                <CheckBox
                  size={30}
                  checked={afterLunchF}
                  checkedColor={"#8b00ff"}
                  onPress={() => {
                    toggleItems(afterLunch, setAfterLunch, "AFTER_LUNCH_F");
                    setAfterLunchF((afterLunchF) => !afterLunchF);
                  }}
                  title={"잠이 쏟아진다."}
                  textStyle={{ fontSize: 16, fontWeight: "200" }}
                  containerStyle={{ backgroundColor: null }}
                />
              </Box>
              <Divider text={"내가 말을 할 때... (중복 가능)"} color={"dark"} />
              <Box>
                <CheckBox
                  size={30}
                  checked={sayingA}
                  checkedColor={"#8b00ff"}
                  onPress={() => {
                    toggleItems(saying, setSaying, "SAYING_A");
                    setSayingA((sayingA) => !sayingA);
                  }}
                  title={"말의 속도가 빠르다."}
                  textStyle={{ fontSize: 16, fontWeight: "200" }}
                  containerStyle={{ backgroundColor: null }}
                />
                <CheckBox
                  size={30}
                  checked={sayingB}
                  checkedColor={"#8b00ff"}
                  onPress={() => {
                    toggleItems(saying, setSaying, "SAYING_B");
                    setSayingB((sayingB) => !sayingB);
                  }}
                  title={"듣는 것보다 말하는 것에 더 익숙하다."}
                  textStyle={{ fontSize: 16, fontWeight: "200" }}
                  containerStyle={{ backgroundColor: null }}
                />
                <CheckBox
                  size={30}
                  checked={sayingC}
                  checkedColor={"#8b00ff"}
                  onPress={() => {
                    toggleItems(saying, setSaying, "SAYING_C");
                    setSayingC((sayingC) => !sayingC);
                  }}
                  title={"상대방의 말을 잘 듣는 편이다."}
                  textStyle={{ fontSize: 16, fontWeight: "200" }}
                  containerStyle={{ backgroundColor: null }}
                />
                <CheckBox
                  size={30}
                  checked={sayingD}
                  checkedColor={"#8b00ff"}
                  onPress={() => {
                    toggleItems(saying, setSaying, "SAYING_D");
                    setSayingD((sayingD) => !sayingD);
                  }}
                  title={"말을 자주 더듬는다."}
                  textStyle={{ fontSize: 16, fontWeight: "200" }}
                  containerStyle={{ backgroundColor: null }}
                />
                <CheckBox
                  size={30}
                  checked={sayingE}
                  checkedColor={"#8b00ff"}
                  onPress={() => {
                    toggleItems(saying, setSaying, "SAYING_E");
                    setSayingE((sayingE) => !sayingE);
                  }}
                  title={"말을 거침없이 한다."}
                  textStyle={{ fontSize: 16, fontWeight: "200" }}
                  containerStyle={{ backgroundColor: null }}
                />
                <CheckBox
                  size={30}
                  checked={sayingF}
                  checkedColor={"#8b00ff"}
                  onPress={() => {
                    toggleItems(saying, setSaying, "SAYING_F");
                    setSayingF((sayingF) => !sayingF);
                  }}
                  title={"자주 흥분해서 말한다."}
                  textStyle={{ fontSize: 16, fontWeight: "200" }}
                  containerStyle={{ backgroundColor: null }}
                />
                <CheckBox
                  size={30}
                  checked={sayingG}
                  checkedColor={"#8b00ff"}
                  onPress={() => {
                    toggleItems(saying, setSaying, "SAYING_G");
                    setSayingG((sayingG) => !sayingG);
                  }}
                  title={"말이 별로 없다."}
                  textStyle={{ fontSize: 16, fontWeight: "200" }}
                  containerStyle={{ backgroundColor: null }}
                />
                <CheckBox
                  size={30}
                  checked={sayingH}
                  checkedColor={"#8b00ff"}
                  onPress={() => {
                    toggleItems(saying, setSaying, "SAYING_H");
                    setSayingH((sayingH) => !sayingH);
                  }}
                  title={"생각을 하고 말을 하는 편이다."}
                  textStyle={{ fontSize: 16, fontWeight: "200" }}
                  containerStyle={{ backgroundColor: null }}
                />
                <CheckBox
                  size={30}
                  checked={sayingI}
                  checkedColor={"#8b00ff"}
                  onPress={() => {
                    toggleItems(saying, setSaying, "SAYING_I");
                    setSayingI((sayingI) => !sayingI);
                  }}
                  title={"말을 하면서 생각하는 편이다."}
                  textStyle={{ fontSize: 16, fontWeight: "200" }}
                  containerStyle={{ backgroundColor: null }}
                />
                <CheckBox
                  size={30}
                  checked={sayingJ}
                  checkedColor={"#8b00ff"}
                  onPress={() => {
                    toggleItems(saying, setSaying, "SAYING_J");
                    setSayingJ((sayingJ) => !sayingJ);
                  }}
                  title={"말실수를 많이 한다."}
                  textStyle={{ fontSize: 16, fontWeight: "200" }}
                  containerStyle={{ backgroundColor: null }}
                />
                <CheckBox
                  size={30}
                  checked={sayingK}
                  checkedColor={"#8b00ff"}
                  onPress={() => {
                    toggleItems(saying, setSaying, "SAYING_K");
                    setSayingK((sayingK) => !sayingK);
                  }}
                  title={"부정적인 반응을 자주 보인다.(아닌 것 같은데~ 등)"}
                  textStyle={{ fontSize: 16, fontWeight: "200" }}
                  containerStyle={{ backgroundColor: null }}
                />
              </Box>
              <Divider text={"나는 걸을 때... (중복 가능)"} color={"dark"} />
              <Box>
                <CheckBox
                  size={30}
                  checked={walkingA}
                  checkedColor={"#8b00ff"}
                  onPress={() => {
                    toggleItems(walking, setWalking, "WALKING_A");
                    setWalkingA((walkingA) => !walkingA);
                  }}
                  title={"걸음이 느리다."}
                  textStyle={{ fontSize: 16, fontWeight: "200" }}
                  containerStyle={{ backgroundColor: null }}
                />
                <CheckBox
                  size={30}
                  checked={walkingB}
                  checkedColor={"#8b00ff"}
                  onPress={() => {
                    toggleItems(walking, setWalking, "WALKING_B");
                    setWalkingB((walkingB) => !walkingB);
                  }}
                  title={"걸음이 빠른 편이다."}
                  textStyle={{ fontSize: 16, fontWeight: "200" }}
                  containerStyle={{ backgroundColor: null }}
                />
                <CheckBox
                  size={30}
                  checked={walkingC}
                  checkedColor={"#8b00ff"}
                  onPress={() => {
                    toggleItems(walking, setWalking, "WALKING_C");
                    setWalkingC((walkingC) => !walkingC);
                  }}
                  title={"옆사람과 나란히 걷는다."}
                  textStyle={{ fontSize: 16, fontWeight: "200" }}
                  containerStyle={{ backgroundColor: null }}
                />
                <CheckBox
                  size={30}
                  checked={walkingD}
                  checkedColor={"#8b00ff"}
                  onPress={() => {
                    toggleItems(walking, setWalking, "WALKING_D");
                    setWalkingD((walkingD) => !walkingD);
                  }}
                  title={"앞서서 걷는 편이다."}
                  textStyle={{ fontSize: 16, fontWeight: "200" }}
                  containerStyle={{ backgroundColor: null }}
                />
                <CheckBox
                  size={30}
                  checked={walkingE}
                  checkedColor={"#8b00ff"}
                  onPress={() => {
                    toggleItems(walking, setWalking, "WALKING_E");
                    setWalkingE((walkingE) => !walkingE);
                  }}
                  title={"발을 끌면서 걷는다."}
                  textStyle={{ fontSize: 16, fontWeight: "200" }}
                  containerStyle={{ backgroundColor: null }}
                />
                <CheckBox
                  size={30}
                  checked={walkingF}
                  checkedColor={"#8b00ff"}
                  onPress={() => {
                    toggleItems(walking, setWalking, "WALKING_F");
                    setWalkingF((walkingF) => !walkingF);
                  }}
                  title={"허리가 굽어 있다."}
                  textStyle={{ fontSize: 16, fontWeight: "200" }}
                  containerStyle={{ backgroundColor: null }}
                />
                <CheckBox
                  size={30}
                  checked={walkingG}
                  checkedColor={"#8b00ff"}
                  onPress={() => {
                    toggleItems(walking, setWalking, "WALKING_G");
                    setWalkingG((walkingG) => !walkingG);
                  }}
                  title={"파워워킹을 한다."}
                  textStyle={{ fontSize: 16, fontWeight: "200" }}
                  containerStyle={{ backgroundColor: null }}
                />
                <CheckBox
                  size={30}
                  checked={walkingH}
                  checkedColor={"#8b00ff"}
                  onPress={() => {
                    toggleItems(walking, setWalking, "WALKING_H");
                    setWalkingH((walkingH) => !walkingH);
                  }}
                  title={"오래 걷지 못한다."}
                  textStyle={{ fontSize: 16, fontWeight: "200" }}
                  containerStyle={{ backgroundColor: null }}
                />
              </Box>
              <Divider
                text={"하루 중 어느 시간이 가장 긴가요? (중복 가능)"}
                color={"dark"}
              />
              <Box>
                <CheckBox
                  size={30}
                  checked={postureA}
                  checkedColor={"#8b00ff"}
                  onPress={() => {
                    toggleItems(posture, setPosture, "POSTURE_A");
                    setPostureA((postureA) => !postureA);
                  }}
                  title={"앉아 있는 시간"}
                  textStyle={{ fontSize: 16, fontWeight: "200" }}
                  containerStyle={{ backgroundColor: null }}
                />
                <CheckBox
                  size={30}
                  checked={postureB}
                  checkedColor={"#8b00ff"}
                  onPress={() => {
                    toggleItems(posture, setPosture, "POSTURE_B");
                    setPostureB((postureB) => !postureB);
                  }}
                  title={"서 있는 시간"}
                  textStyle={{ fontSize: 16, fontWeight: "200" }}
                  containerStyle={{ backgroundColor: null }}
                />
                <CheckBox
                  size={30}
                  checked={postureC}
                  checkedColor={"#8b00ff"}
                  onPress={() => {
                    toggleItems(posture, setPosture, "POSTURE_C");
                    setPostureC((postureC) => !postureC);
                  }}
                  title={"걷는 시간"}
                  textStyle={{ fontSize: 16, fontWeight: "200" }}
                  containerStyle={{ backgroundColor: null }}
                />
                <CheckBox
                  size={30}
                  checked={postureD}
                  checkedColor={"#8b00ff"}
                  onPress={() => {
                    toggleItems(posture, setPosture, "POSTURE_D");
                    setPostureD((postureD) => !postureD);
                  }}
                  title={"교통수단을 이용하는 시간"}
                  textStyle={{ fontSize: 16, fontWeight: "200" }}
                  containerStyle={{ backgroundColor: null }}
                />
                <CheckBox
                  size={30}
                  checked={postureE}
                  checkedColor={"#8b00ff"}
                  onPress={() => {
                    toggleItems(posture, setPosture, "POSTURE_E");
                    setPostureE((postureE) => !postureE);
                  }}
                  title={"누워 있는 시간"}
                  textStyle={{ fontSize: 16, fontWeight: "200" }}
                  containerStyle={{ backgroundColor: null }}
                />
              </Box>
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

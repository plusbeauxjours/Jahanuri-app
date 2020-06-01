import React, { useState } from "react";
import styled from "styled-components";
import MenuCustomHeader from "../../components/MenuCustomHeader";
import {
  Me,
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
import { ME } from "../MyProfileScreen/MyProfileScreenQueries";
import Button from "../../components/Button";

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
  width: 80%;
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const Text = styled.Text`
  color: #999;
`;
const ButtonContainer = styled.View`
  justify-content: center;
  align-items: center;
  height: 100px;
`;
const DialogButtonContainer = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  margin-right: 10px;
  margin-bottom: 10px;
`;
const WhiteSpace = styled.View`
  height: 30px;
`;

const initialValues = {
  wakeupTime: "",
  wakeupLong: "",
  wakeupConditionEtc: "",
  wakeupFirstThingEtc: "",
  meal: "",
  mealDuringEtc: "",
  mealWithWater: "",
  mealWithSnack: "",
  mealWithNightFood: "",
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

const SubmitHabitCheckListScreen: React.FC = () => {
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
  const [mealWithWater, setMealWithWater] = useState<string>("");
  const [mealWithSnack, setMealWithSnack] = useState<string>("");
  const [mealWithNightFood, setMealWithNightFood] = useState<string>("");
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
  const [postureDetail, setPostureDetail] = useState<any>([]);
  const [postureDetailA, setPostureDetailA] = useState<boolean>(false);
  const [postureDetailB, setPostureDetailB] = useState<boolean>(false);
  const [postureDetailC, setPostureDetailC] = useState<boolean>(false);
  const [postureDetailD, setPostureDetailD] = useState<boolean>(false);
  const [postureDetailE, setPostureDetailE] = useState<boolean>(false);
  const [postureDetailF, setPostureDetailF] = useState<boolean>(false);
  const [postureDetailG, setPostureDetailG] = useState<boolean>(false);
  const [postureDetailH, setPostureDetailH] = useState<boolean>(false);
  const [postureDetailI, setPostureDetailI] = useState<boolean>(false);
  const [postureDetailJ, setPostureDetailJ] = useState<boolean>(false);
  const [bodyHeat, setBodyHeat] = useState<any>([]);
  const [bodyHeatA, setBodyHeatA] = useState<boolean>(false);
  const [bodyHeatB, setBodyHeatB] = useState<boolean>(false);
  const [bodyHeatC, setBodyHeatC] = useState<boolean>(false);
  const [bodyHeatD, setBodyHeatD] = useState<boolean>(false);
  const [bodyHeatE, setBodyHeatE] = useState<boolean>(false);
  const [bodyHeatF, setBodyHeatF] = useState<boolean>(false);
  const [bodyHeatG, setBodyHeatG] = useState<boolean>(false);
  const [bodyHeatH, setBodyHeatH] = useState<boolean>(false);
  const [bodyHeatI, setBodyHeatI] = useState<boolean>(false);
  const [bodyHeatJ, setBodyHeatJ] = useState<boolean>(false);
  const [bodyHeatK, setBodyHeatK] = useState<boolean>(false);
  const [sleeping, setSleeping] = useState<any>([]);
  const [sleepingA, setSleepingA] = useState<boolean>(false);
  const [sleepingB, setSleepingB] = useState<boolean>(false);
  const [sleepingC, setSleepingC] = useState<boolean>(false);
  const [sleepingD, setSleepingD] = useState<boolean>(false);
  const [beforeSleeping, setBeforeSleeping] = useState<any>([]);
  const [beforeSleepingA, setBeforeSleepingA] = useState<boolean>(false);
  const [beforeSleepingB, setBeforeSleepingB] = useState<boolean>(false);
  const [beforeSleepingC, setBeforeSleepingC] = useState<boolean>(false);
  const [beforeSleepingD, setBeforeSleepingD] = useState<boolean>(false);
  const [beforeSleepingE, setBeforeSleepingE] = useState<boolean>(false);
  const [
    submitHabitCheckListFn,
    { loading: submitHabitCheckListLoading },
  ] = useMutation<SubmitHabitCheckList, SubmitHabitCheckListVariables>(
    SUBMIT_HABIT_CHECK_LIST,
    {
      update(cache) {
        try {
          const meData = cache.readQuery<Me>({
            query: ME,
          });
          if (meData) {
            meData.me.user.hasSubmittedHabitCheckList = true;
            cache.writeQuery({
              query: ME,
              data: meData,
            });
          }
        } catch (e) {
          console.log(e);
        }
      },
    }
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
        wakeupTime: values.wakeupTime,
        wakeupLong: values.wakeupLong,
        wakeupCondition: wakeupCondition,
        wakeupConditionEtc: values.wakeupConditionEtc,
        wakeupFirstThing: wakeupFirstThing,
        wakeupFirstThingEtc: values.wakeupFirstThingEtc,
        meal: values.meal,
        mealDuring: mealDuring,
        mealDuringEtc: values.mealDuringEtc,
        mealWithWater: mealWithWater,
        mealWithSnack: mealWithSnack,
        mealWithNightFood: mealWithNightFood,
        afterLunch: afterLunch,
        afterLunchEtc: values.afterLunchEtc,
        saying: saying,
        sayingEtc: values.sayingEtc,
        sayingRepeat: values.sayingRepeat,
        walking: walking,
        walkingEtc: values.walkingEtc,
        posture: posture,
        postureEtc: values.postureEtc,
        postureDetail: postureDetail,
        postureDetailEtc: values.postureDetailEtc,
        bodyHeat: bodyHeat,
        bodyHeatEtc: values.bodyHeatEtc,
        exercise: values.exercise,
        sleeping: sleeping,
        sleepingEtc: values.sleepingEtc,
        beforeSleeping: beforeSleeping,
        beforeSleepingEtc: values.beforeSleepingEtc,
        goodThing: values.goodThing,
        badThing: values.badThing,
      },
    });
    setModalOpen(false);
    toast("나의 습관을 제출하였습니다.");
  };
  const toggleItems = (array: any, action: any, variables: string) => {
    if (array.includes(variables)) {
      action(array.filter((i) => i !== variables));
    } else {
      action((i) => [...i, variables]);
    }
  };
  const validationSchema = Yup.object().shape({
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
            submitForm,
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
                      나의 습관 체크리스트는 제출한 후에는 수정을 할 수
                      없습니다.
                    </Paragraph>
                    <Paragraph>제출하시겠습니까?</Paragraph>
                  </Dialog.Content>
                  <Dialog.Actions>
                    <DialogButtonContainer>
                      <Button
                        disabled={submitHabitCheckListLoading}
                        text="취소"
                        onPress={() => setModalOpen(false)}
                      />
                      <Button
                        disabled={submitHabitCheckListLoading}
                        text="제출"
                        onPress={() => submitConfirm(values)}
                      />
                    </DialogButtonContainer>
                  </Dialog.Actions>
                </Dialog>
              </Portal>
              <WhiteSpace />
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
                  size={24}
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
                  size={24}
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
                  size={24}
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
                  size={24}
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
                  size={24}
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
                  size={24}
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
                  size={24}
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
                  size={24}
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
                <FormikInput
                  label="기타"
                  value={values.wakeupConditionEtc}
                  onChange={setFieldValue}
                  onTouch={setFieldTouched}
                  name="wakeupConditionEtc"
                  placeholder="기타"
                />
              </Box>
              <Divider
                text={"아침에 눈 떠서 가장 처음에 하는 일은? (중복 가능)"}
                color={"dark"}
              />
              <Box>
                <CheckBox
                  size={24}
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
                  size={24}
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
                  size={24}
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
                  size={24}
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
                  size={24}
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
                  size={24}
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
                <FormikInput
                  label="기타"
                  value={values.wakeupFirstThingEtc}
                  onChange={setFieldValue}
                  onTouch={setFieldTouched}
                  name="wakeupFirstThingEtc"
                  placeholder="기타"
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
                  size={24}
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
                  size={24}
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
                  size={24}
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
                  size={24}
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
                  size={24}
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
                  size={24}
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
                  size={24}
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
                  size={24}
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
                  size={24}
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
                  size={24}
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
                  size={24}
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
                <FormikInput
                  label="기타"
                  value={values.mealDuringEtc}
                  onChange={setFieldValue}
                  onTouch={setFieldTouched}
                  name="mealDuringEtc"
                  placeholder="기타"
                />
              </Box>
              <Divider
                text={"식사 전후에 물을 많이 마시나요?"}
                color={"dark"}
              />
              <Box>
                <CheckBox
                  size={24}
                  checked={mealWithWater === "DEGREE_A"}
                  checkedColor={"#8b00ff"}
                  onPress={() => {
                    setMealWithWater("DEGREE_A");
                  }}
                  title={"안마신다."}
                  textStyle={{ fontSize: 16, fontWeight: "200" }}
                  containerStyle={{ backgroundColor: null }}
                />
                <CheckBox
                  size={24}
                  checked={mealWithWater === "DEGREE_B"}
                  checkedColor={"#8b00ff"}
                  onPress={() => {
                    setMealWithWater("DEGREE_B");
                  }}
                  title={"거의 안마신다."}
                  textStyle={{ fontSize: 16, fontWeight: "200" }}
                  containerStyle={{ backgroundColor: null }}
                />
                <CheckBox
                  size={24}
                  checked={mealWithWater === "DEGREE_C"}
                  checkedColor={"#8b00ff"}
                  onPress={() => {
                    setMealWithWater("DEGREE_C");
                  }}
                  title={"가끔 마신다."}
                  textStyle={{ fontSize: 16, fontWeight: "200" }}
                  containerStyle={{ backgroundColor: null }}
                />
                <CheckBox
                  size={24}
                  checked={mealWithWater === "DEGREE_D"}
                  checkedColor={"#8b00ff"}
                  onPress={() => {
                    setMealWithWater("DEGREE_D");
                  }}
                  title={"조금 마신다."}
                  textStyle={{ fontSize: 16, fontWeight: "200" }}
                  containerStyle={{ backgroundColor: null }}
                />
                <CheckBox
                  size={24}
                  checked={mealWithWater === "DEGREE_E"}
                  checkedColor={"#8b00ff"}
                  onPress={() => {
                    setMealWithWater("DEGREE_E");
                  }}
                  title={"많이 마신다."}
                  textStyle={{ fontSize: 16, fontWeight: "200" }}
                  containerStyle={{ backgroundColor: null }}
                />
              </Box>
              <Divider
                text={"식사 외에 간식, 군것질을 하시나요?"}
                color={"dark"}
              />
              <Box>
                <CheckBox
                  size={24}
                  checked={mealWithSnack === "DEGREE_A"}
                  checkedColor={"#8b00ff"}
                  onPress={() => {
                    setMealWithSnack("DEGREE_A");
                  }}
                  title={"안한다."}
                  textStyle={{ fontSize: 16, fontWeight: "200" }}
                  containerStyle={{ backgroundColor: null }}
                />
                <CheckBox
                  size={24}
                  checked={mealWithSnack === "DEGREE_B"}
                  checkedColor={"#8b00ff"}
                  onPress={() => {
                    setMealWithSnack("DEGREE_B");
                  }}
                  title={"거의 안한다."}
                  textStyle={{ fontSize: 16, fontWeight: "200" }}
                  containerStyle={{ backgroundColor: null }}
                />
                <CheckBox
                  size={24}
                  checked={mealWithSnack === "DEGREE_C"}
                  checkedColor={"#8b00ff"}
                  onPress={() => {
                    setMealWithSnack("DEGREE_C");
                  }}
                  title={"가끔 한다."}
                  textStyle={{ fontSize: 16, fontWeight: "200" }}
                  containerStyle={{ backgroundColor: null }}
                />
                <CheckBox
                  size={24}
                  checked={mealWithSnack === "DEGREE_D"}
                  checkedColor={"#8b00ff"}
                  onPress={() => {
                    setMealWithSnack("DEGREE_D");
                  }}
                  title={"자주 한다."}
                  textStyle={{ fontSize: 16, fontWeight: "200" }}
                  containerStyle={{ backgroundColor: null }}
                />
                <CheckBox
                  size={24}
                  checked={mealWithSnack === "DEGREE_E"}
                  checkedColor={"#8b00ff"}
                  onPress={() => {
                    setMealWithSnack("DEGREE_E");
                  }}
                  title={"매일 한다."}
                  textStyle={{ fontSize: 16, fontWeight: "200" }}
                  containerStyle={{ backgroundColor: null }}
                />
              </Box>
              <Divider text={"야식을 많이 드시나요?"} color={"dark"} />
              <Box>
                <CheckBox
                  size={24}
                  checked={mealWithNightFood === "DEGREE_A"}
                  checkedColor={"#8b00ff"}
                  onPress={() => {
                    setMealWithNightFood("DEGREE_A");
                  }}
                  title={"안한다."}
                  textStyle={{ fontSize: 16, fontWeight: "200" }}
                  containerStyle={{ backgroundColor: null }}
                />
                <CheckBox
                  size={24}
                  checked={mealWithNightFood === "DEGREE_B"}
                  checkedColor={"#8b00ff"}
                  onPress={() => {
                    setMealWithNightFood("DEGREE_B");
                  }}
                  title={"거의 안한다."}
                  textStyle={{ fontSize: 16, fontWeight: "200" }}
                  containerStyle={{ backgroundColor: null }}
                />
                <CheckBox
                  size={24}
                  checked={mealWithNightFood === "DEGREE_C"}
                  checkedColor={"#8b00ff"}
                  onPress={() => {
                    setMealWithNightFood("DEGREE_C");
                  }}
                  title={"가끔 한다."}
                  textStyle={{ fontSize: 16, fontWeight: "200" }}
                  containerStyle={{ backgroundColor: null }}
                />
                <CheckBox
                  size={24}
                  checked={mealWithNightFood === "DEGREE_D"}
                  checkedColor={"#8b00ff"}
                  onPress={() => {
                    setMealWithNightFood("DEGREE_D");
                  }}
                  title={"자주 한다."}
                  textStyle={{ fontSize: 16, fontWeight: "200" }}
                  containerStyle={{ backgroundColor: null }}
                />
                <CheckBox
                  size={24}
                  checked={mealWithNightFood === "DEGREE_E"}
                  checkedColor={"#8b00ff"}
                  onPress={() => {
                    setMealWithNightFood("DEGREE_E");
                  }}
                  title={"매일 한다."}
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
                  size={24}
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
                  size={24}
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
                  size={24}
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
                  size={24}
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
                  size={24}
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
                  size={24}
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
                <FormikInput
                  label="기타"
                  value={values.afterLunchEtc}
                  onChange={setFieldValue}
                  onTouch={setFieldTouched}
                  name="afterLunchEtc"
                  placeholder="기타"
                />
              </Box>
              <Divider text={"내가 말을 할 때... (중복 가능)"} color={"dark"} />
              <Box>
                <CheckBox
                  size={24}
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
                  size={24}
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
                  size={24}
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
                  size={24}
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
                  size={24}
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
                  size={24}
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
                  size={24}
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
                  size={24}
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
                  size={24}
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
                  size={24}
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
                  size={24}
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
                <FormikInput
                  label="기타"
                  value={values.sayingEtc}
                  onChange={setFieldValue}
                  onTouch={setFieldTouched}
                  name="sayingEtc"
                  placeholder="기타"
                />
              </Box>
              <Line />
              <FormikInput
                label="내가 말할 때 가장 자주 쓰는 말은?"
                value={values.sayingRepeat}
                onChange={setFieldValue}
                onTouch={setFieldTouched}
                name="sayingRepeat"
                placeholder="진짜, 아니, 어, 그, 아닌거같은데, 등"
              />
              <Divider text={"나는 걸을 때... (중복 가능)"} color={"dark"} />
              <Box>
                <CheckBox
                  size={24}
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
                  size={24}
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
                  size={24}
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
                  size={24}
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
                  size={24}
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
                  size={24}
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
                  size={24}
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
                  size={24}
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
                <FormikInput
                  label="기타"
                  value={values.walkingEtc}
                  onChange={setFieldValue}
                  onTouch={setFieldTouched}
                  name="walkingEtc"
                  placeholder="기타"
                />
              </Box>
              <Divider
                text={"하루 중 어느 시간이 가장 긴가요? (중복 가능)"}
                color={"dark"}
              />
              <Box>
                <CheckBox
                  size={24}
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
                  size={24}
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
                  size={24}
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
                  size={24}
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
                  size={24}
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
                <FormikInput
                  label="기타"
                  value={values.postureEtc}
                  onChange={setFieldValue}
                  onTouch={setFieldTouched}
                  name="postureEtc"
                  placeholder="기타"
                />
              </Box>
              <Divider text={"나의 평소 자세는? (중복 가능)"} color={"dark"} />
              <Box>
                <CheckBox
                  size={24}
                  checked={postureDetailA}
                  checkedColor={"#8b00ff"}
                  onPress={() => {
                    toggleItems(
                      postureDetail,
                      setPostureDetail,
                      "POSTURE_DETAIL_A"
                    );
                    setPostureDetailA((postureDetailA) => !postureDetailA);
                  }}
                  title={"자세를 편하게 잘 펴고 있다."}
                  textStyle={{ fontSize: 16, fontWeight: "200" }}
                  containerStyle={{ backgroundColor: null }}
                />
                <CheckBox
                  size={24}
                  checked={postureDetailB}
                  checkedColor={"#8b00ff"}
                  onPress={() => {
                    toggleItems(
                      postureDetail,
                      setPostureDetail,
                      "POSTURE_DETAIL_B"
                    );
                    setPostureDetailB((postureDetailB) => !postureDetailB);
                  }}
                  title={"자세가 무너져 있다."}
                  textStyle={{ fontSize: 16, fontWeight: "200" }}
                  containerStyle={{ backgroundColor: null }}
                />
                <CheckBox
                  size={24}
                  checked={postureDetailC}
                  checkedColor={"#8b00ff"}
                  onPress={() => {
                    toggleItems(
                      postureDetail,
                      setPostureDetail,
                      "POSTURE_DETAIL_C"
                    );
                    setPostureDetailC((postureDetailC) => !postureDetailC);
                  }}
                  title={"앉아 있는 것에 익숙하다."}
                  textStyle={{ fontSize: 16, fontWeight: "200" }}
                  containerStyle={{ backgroundColor: null }}
                />
                <CheckBox
                  size={24}
                  checked={postureDetailD}
                  checkedColor={"#8b00ff"}
                  onPress={() => {
                    toggleItems(
                      postureDetail,
                      setPostureDetail,
                      "POSTURE_DETAIL_D"
                    );
                    setPostureDetailD((postureDetailD) => !postureDetailD);
                  }}
                  title={"오래 서 있지 못한다."}
                  textStyle={{ fontSize: 16, fontWeight: "200" }}
                  containerStyle={{ backgroundColor: null }}
                />
                <CheckBox
                  size={24}
                  checked={postureDetailE}
                  checkedColor={"#8b00ff"}
                  onPress={() => {
                    toggleItems(
                      postureDetail,
                      setPostureDetail,
                      "POSTURE_DETAIL_E"
                    );
                    setPostureDetailE((postureDetailE) => !postureDetailE);
                  }}
                  title={"앉아 있는 게 힘들다."}
                  textStyle={{ fontSize: 16, fontWeight: "200" }}
                  containerStyle={{ backgroundColor: null }}
                />
                <CheckBox
                  size={24}
                  checked={postureDetailF}
                  checkedColor={"#8b00ff"}
                  onPress={() => {
                    toggleItems(
                      postureDetail,
                      setPostureDetail,
                      "POSTURE_DETAIL_F"
                    );
                    setPostureDetailF((postureDetailF) => !postureDetailF);
                  }}
                  title={"등이 굽어 있거나 거북목이다."}
                  textStyle={{ fontSize: 16, fontWeight: "200" }}
                  containerStyle={{ backgroundColor: null }}
                />
                <CheckBox
                  size={24}
                  checked={postureDetailG}
                  checkedColor={"#8b00ff"}
                  onPress={() => {
                    toggleItems(
                      postureDetail,
                      setPostureDetail,
                      "POSTURE_DETAIL_G"
                    );
                    setPostureDetailG((postureDetailG) => !postureDetailG);
                  }}
                  title={"일자목, 목이 돌아가지 않는다."}
                  textStyle={{ fontSize: 16, fontWeight: "200" }}
                  containerStyle={{ backgroundColor: null }}
                />
                <CheckBox
                  size={24}
                  checked={postureDetailH}
                  checkedColor={"#8b00ff"}
                  onPress={() => {
                    toggleItems(
                      postureDetail,
                      setPostureDetail,
                      "POSTURE_DETAIL_H"
                    );
                    setPostureDetailH((postureDetailH) => !postureDetailH);
                  }}
                  title={"다리를 자주 꼰다."}
                  textStyle={{ fontSize: 16, fontWeight: "200" }}
                  containerStyle={{ backgroundColor: null }}
                />
                <CheckBox
                  size={24}
                  checked={postureDetailI}
                  checkedColor={"#8b00ff"}
                  onPress={() => {
                    toggleItems(
                      postureDetail,
                      setPostureDetail,
                      "POSTURE_DETAIL_I"
                    );
                    setPostureDetailI((postureDetailI) => !postureDetailI);
                  }}
                  title={"무지외반증이 있다."}
                  textStyle={{ fontSize: 16, fontWeight: "200" }}
                  containerStyle={{ backgroundColor: null }}
                />
                <CheckBox
                  size={24}
                  checked={postureDetailJ}
                  checkedColor={"#8b00ff"}
                  onPress={() => {
                    toggleItems(
                      postureDetail,
                      setPostureDetail,
                      "POSTURE_DETAIL_J"
                    );
                    setPostureDetailJ((postureDetailJ) => !postureDetailJ);
                  }}
                  title={"다리가 휘어 있다.(안으로, 밖으로 등)"}
                  textStyle={{ fontSize: 16, fontWeight: "200" }}
                  containerStyle={{ backgroundColor: null }}
                />
                <FormikInput
                  label="기타"
                  value={values.postureDetailEtc}
                  onChange={setFieldValue}
                  onTouch={setFieldTouched}
                  name="postureDetailEtc"
                  placeholder="기타"
                />
              </Box>
              <Divider
                text={"체온조절을 위해 어떤 일을 하고 계시나요? (중복 가능)"}
                color={"dark"}
              />
              <Box>
                <CheckBox
                  size={24}
                  checked={bodyHeatA}
                  checkedColor={"#8b00ff"}
                  onPress={() => {
                    toggleItems(bodyHeat, setBodyHeat, "BODY_HEAT_A");
                    setBodyHeatA((bodyHeatA) => !bodyHeatA);
                  }}
                  title={"열이 많아서 옷을 얇게 입는다."}
                  textStyle={{ fontSize: 16, fontWeight: "200" }}
                  containerStyle={{ backgroundColor: null }}
                />
                <CheckBox
                  size={24}
                  checked={bodyHeatB}
                  checkedColor={"#8b00ff"}
                  onPress={() => {
                    toggleItems(bodyHeat, setBodyHeat, "BODY_HEAT_B");
                    setBodyHeatB((bodyHeatB) => !bodyHeatB);
                  }}
                  title={"찬물을 피한다."}
                  textStyle={{ fontSize: 16, fontWeight: "200" }}
                  containerStyle={{ backgroundColor: null }}
                />
                <CheckBox
                  size={24}
                  checked={bodyHeatC}
                  checkedColor={"#8b00ff"}
                  onPress={() => {
                    toggleItems(bodyHeat, setBodyHeat, "BODY_HEAT_C");
                    setBodyHeatC((bodyHeatC) => !bodyHeatC);
                  }}
                  title={"찬물을 즐겨 마신다."}
                  textStyle={{ fontSize: 16, fontWeight: "200" }}
                  containerStyle={{ backgroundColor: null }}
                />
                <CheckBox
                  size={24}
                  checked={bodyHeatD}
                  checkedColor={"#8b00ff"}
                  onPress={() => {
                    toggleItems(bodyHeat, setBodyHeat, "BODY_HEAT_D");
                    setBodyHeatD((bodyHeatD) => !bodyHeatD);
                  }}
                  title={"뜨거운 차를 자주 마신다."}
                  textStyle={{ fontSize: 16, fontWeight: "200" }}
                  containerStyle={{ backgroundColor: null }}
                />
                <CheckBox
                  size={24}
                  checked={bodyHeatE}
                  checkedColor={"#8b00ff"}
                  onPress={() => {
                    toggleItems(bodyHeat, setBodyHeat, "BODY_HEAT_E");
                    setBodyHeatE((bodyHeatE) => !bodyHeatE);
                  }}
                  title={"핫팩을 자주 붙이고 다닌다."}
                  textStyle={{ fontSize: 16, fontWeight: "200" }}
                  containerStyle={{ backgroundColor: null }}
                />
                <CheckBox
                  size={24}
                  checked={bodyHeatF}
                  checkedColor={"#8b00ff"}
                  onPress={() => {
                    toggleItems(bodyHeat, setBodyHeat, "BODY_HEAT_F");
                    setBodyHeatF((bodyHeatF) => !bodyHeatF);
                  }}
                  title={"목도리, 장갑 등을 챙겨서 한다."}
                  textStyle={{ fontSize: 16, fontWeight: "200" }}
                  containerStyle={{ backgroundColor: null }}
                />
                <CheckBox
                  size={24}
                  checked={bodyHeatG}
                  checkedColor={"#8b00ff"}
                  onPress={() => {
                    toggleItems(bodyHeat, setBodyHeat, "BODY_HEAT_G");
                    setBodyHeatG((bodyHeatG) => !bodyHeatG);
                  }}
                  title={"내의를 챙겨 입는다."}
                  textStyle={{ fontSize: 16, fontWeight: "200" }}
                  containerStyle={{ backgroundColor: null }}
                />
                <CheckBox
                  size={24}
                  checked={bodyHeatH}
                  checkedColor={"#8b00ff"}
                  onPress={() => {
                    toggleItems(bodyHeat, setBodyHeat, "BODY_HEAT_H");
                    setBodyHeatH((bodyHeatH) => !bodyHeatH);
                  }}
                  title={"발을 항상 따듯하게 해 준다."}
                  textStyle={{ fontSize: 16, fontWeight: "200" }}
                  containerStyle={{ backgroundColor: null }}
                />
                <CheckBox
                  size={24}
                  checked={bodyHeatI}
                  checkedColor={"#8b00ff"}
                  onPress={() => {
                    toggleItems(bodyHeat, setBodyHeat, "BODY_HEAT_I");
                    setBodyHeatI((bodyHeatI) => !bodyHeatI);
                  }}
                  title={"발이 답답해서 집에서 맨발로 다닌다."}
                  textStyle={{ fontSize: 16, fontWeight: "200" }}
                  containerStyle={{ backgroundColor: null }}
                />
                <CheckBox
                  size={24}
                  checked={bodyHeatJ}
                  checkedColor={"#8b00ff"}
                  onPress={() => {
                    toggleItems(bodyHeat, setBodyHeat, "BODY_HEAT_J");
                    setBodyHeatJ((bodyHeatJ) => !bodyHeatJ);
                  }}
                  title={"찜질팩, 돌뜸 등을 늘 챙겨서 한다."}
                  textStyle={{ fontSize: 16, fontWeight: "200" }}
                  containerStyle={{ backgroundColor: null }}
                />
                <CheckBox
                  size={24}
                  checked={bodyHeatK}
                  checkedColor={"#8b00ff"}
                  onPress={() => {
                    toggleItems(bodyHeat, setBodyHeat, "BODY_HEAT_K");
                    setBodyHeatK((bodyHeatK) => !bodyHeatK);
                  }}
                  title={"족탕, 반신욕, 찜질 등을 한다."}
                  textStyle={{ fontSize: 16, fontWeight: "200" }}
                  containerStyle={{ backgroundColor: null }}
                />
                <FormikInput
                  label="기타"
                  value={values.bodyHeatEtc}
                  onChange={setFieldValue}
                  onTouch={setFieldTouched}
                  name="bodyHeatEtc"
                  placeholder="기타"
                />
              </Box>
              <Line />
              <FormikInput
                label="지금 하고 있는 운동이 있으신가요?"
                value={values.exercise}
                onChange={setFieldValue}
                onTouch={setFieldTouched}
                name="exercise"
                error={touched.exercise && errors.exercise}
                placeholder="헬스, 요가, 걷기, 마라톤 등등"
              />
              <Divider text={"잠은 어떻게 주무시나요?"} color={"dark"} />
              <Box>
                <CheckBox
                  size={24}
                  checked={sleepingA}
                  checkedColor={"#8b00ff"}
                  onPress={() => {
                    toggleItems(sleeping, setSleeping, "SLEEPING_A");
                    setSleepingA((sleepingA) => !sleepingA);
                  }}
                  title={"머리를 대면 바로 잠든다."}
                  textStyle={{ fontSize: 16, fontWeight: "200" }}
                  containerStyle={{ backgroundColor: null }}
                />
                <CheckBox
                  size={24}
                  checked={sleepingB}
                  checkedColor={"#8b00ff"}
                  onPress={() => {
                    toggleItems(sleeping, setSleeping, "SLEEPING_B");
                    setSleepingB((sleepingB) => !sleepingB);
                  }}
                  title={"한참을 뒤척이다 자야 한다."}
                  textStyle={{ fontSize: 16, fontWeight: "200" }}
                  containerStyle={{ backgroundColor: null }}
                />
                <CheckBox
                  size={24}
                  checked={sleepingC}
                  checkedColor={"#8b00ff"}
                  onPress={() => {
                    toggleItems(sleeping, setSleeping, "SLEEPING_C");
                    setSleepingC((sleepingC) => !sleepingC);
                  }}
                  title={"새벽에 꼭 한 번(이상) 일어난다."}
                  textStyle={{ fontSize: 16, fontWeight: "200" }}
                  containerStyle={{ backgroundColor: null }}
                />
                <CheckBox
                  size={24}
                  checked={sleepingD}
                  checkedColor={"#8b00ff"}
                  onPress={() => {
                    toggleItems(sleeping, setSleeping, "SLEEPING_D");
                    setSleepingD((sleepingD) => !sleepingD);
                  }}
                  title={"잠을 못 잔다."}
                  textStyle={{ fontSize: 16, fontWeight: "200" }}
                  containerStyle={{ backgroundColor: null }}
                />
                <FormikInput
                  label="기타"
                  value={values.sleepingEtc}
                  onChange={setFieldValue}
                  onTouch={setFieldTouched}
                  name="sleepingEtc"
                  placeholder="기타"
                />
              </Box>
              <Divider text={"자기 전 주로 하는 일은?"} color={"dark"} />
              <Box>
                <CheckBox
                  size={24}
                  checked={beforeSleepingA}
                  checkedColor={"#8b00ff"}
                  onPress={() => {
                    toggleItems(
                      beforeSleeping,
                      setBeforeSleeping,
                      "BEFORE_SLEEPING_A"
                    );
                    setBeforeSleepingA((beforeSleepingA) => !beforeSleepingA);
                  }}
                  title={"스마트폰"}
                  textStyle={{ fontSize: 16, fontWeight: "200" }}
                  containerStyle={{ backgroundColor: null }}
                />
                <CheckBox
                  size={24}
                  checked={beforeSleepingB}
                  checkedColor={"#8b00ff"}
                  onPress={() => {
                    toggleItems(
                      beforeSleeping,
                      setBeforeSleeping,
                      "BEFORE_SLEEPING_B"
                    );
                    setBeforeSleepingB((beforeSleepingB) => !beforeSleepingB);
                  }}
                  title={"TV시청"}
                  textStyle={{ fontSize: 16, fontWeight: "200" }}
                  containerStyle={{ backgroundColor: null }}
                />
                <CheckBox
                  size={24}
                  checked={beforeSleepingC}
                  checkedColor={"#8b00ff"}
                  onPress={() => {
                    toggleItems(
                      beforeSleeping,
                      setBeforeSleeping,
                      "BEFORE_SLEEPING_C"
                    );
                    setBeforeSleepingC((beforeSleepingC) => !beforeSleepingC);
                  }}
                  title={"책, 잡지, 신문 등 읽기"}
                  textStyle={{ fontSize: 16, fontWeight: "200" }}
                  containerStyle={{ backgroundColor: null }}
                />
                <CheckBox
                  size={24}
                  checked={beforeSleepingD}
                  checkedColor={"#8b00ff"}
                  onPress={() => {
                    toggleItems(
                      beforeSleeping,
                      setBeforeSleeping,
                      "BEFORE_SLEEPING_D"
                    );
                    setBeforeSleepingD((beforeSleepingD) => !beforeSleepingD);
                  }}
                  title={"일기, 글쓰기"}
                  textStyle={{ fontSize: 16, fontWeight: "200" }}
                  containerStyle={{ backgroundColor: null }}
                />
                <CheckBox
                  size={24}
                  checked={beforeSleepingE}
                  checkedColor={"#8b00ff"}
                  onPress={() => {
                    toggleItems(
                      beforeSleeping,
                      setBeforeSleeping,
                      "BEFORE_SLEEPING_E"
                    );
                    setBeforeSleepingE((beforeSleepingE) => !beforeSleepingE);
                  }}
                  title={"야식"}
                  textStyle={{ fontSize: 16, fontWeight: "200" }}
                  containerStyle={{ backgroundColor: null }}
                />
                <FormikInput
                  label="기타"
                  value={values.beforeSleepingEtc}
                  onChange={setFieldValue}
                  onTouch={setFieldTouched}
                  name="beforeSleepingEtc"
                  placeholder="기타"
                />
              </Box>
              <Line />
              <FormikInput
                label="나의 좋은 습관은 무엇인가요?"
                value={values.goodThing}
                onChange={setFieldValue}
                onTouch={setFieldTouched}
                name="goodThing"
                error={touched.goodThing && errors.goodThing}
              />
              <FormikInput
                label="나의 고치고 싶은 습관은 무엇인가요? 자세히 적어주세요."
                value={values.badThing}
                onChange={setFieldValue}
                onTouch={setFieldTouched}
                name="badThing"
                error={touched.badThing && errors.badThing}
              />
              <View>
                <WhiteSpace />
                <Text>
                  고맙습니다. '제출'을 누르면 나의 습관 체크리스트 작성이
                  완료됩니다. 작성해주신 내용은 모두 여러분의 몸과 마음의
                  습관해독을 돕는 목적으로만 사용되며 외부로는 절대 공개되지
                  않는 점 알려드립니다.
                </Text>
              </View>
              <ButtonContainer>
                <Button
                  disabled={
                    !isValid ||
                    !values.wakeupTime ||
                    !values.wakeupLong ||
                    !values.meal ||
                    !mealWithWater ||
                    !mealWithSnack ||
                    !mealWithNightFood ||
                    !values.sayingRepeat ||
                    !values.exercise ||
                    !values.goodThing ||
                    !values.badThing
                  }
                  loading={submitHabitCheckListLoading}
                  onPress={() => {
                    setModalOpen(true), submitForm;
                  }}
                  text="제출"
                  border={true}
                />
              </ButtonContainer>
            </>
          )}
        </Formik>
      </KeyboardAwareScrollView>
    </>
  );
};
export default SubmitHabitCheckListScreen;

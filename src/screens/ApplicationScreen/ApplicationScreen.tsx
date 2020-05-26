import React, { useState } from "react";
import styled from "styled-components";
import { Portal, Dialog, Paragraph } from "react-native-paper";
import {
  NavigationScreenProp,
  NavigationState,
  NavigationParams,
} from "react-navigation";
import MenuCustomHeader from "../../components/MenuCustomHeader";
import { CheckBox } from "react-native-elements";
import Divider from "../../components/Divider";
import FormikInput from "../../components/Formik/FormikInput";
import dimensions from "../../constants/dimensions";
import Toast from "react-native-root-toast";
import { useMutation } from "react-apollo-hooks";
import * as Yup from "yup";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Formik } from "formik";

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
const Button = styled.Button`
  margin-top: 10px;
  width: 90%;
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

interface IProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const ApplicationScreen: React.FC<IProps> = ({ navigation }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [gender, setGender] = useState<any>([]);
  const [genderA, setGenderMale] = useState<boolean>(false);
  const [genderB, setGenderFemale] = useState<boolean>(false);
  const [genderC, setGenderOther] = useState<boolean>(false);
  const [approach, setApproach] = useState<any>([]);
  const [approachA, setApproachA] = useState<boolean>(false);
  const [approachB, setApproachB] = useState<boolean>(false);
  const [approachC, setApproachC] = useState<boolean>(false);
  const [approachD, setApproachD] = useState<boolean>(false);
  const [approachE, setApproachE] = useState<boolean>(false);
  const [approachF, setApproachF] = useState<boolean>(false);
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
    // navigation.navigate("MyprofileScreen");
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
                label="기상시간이 규칙적인가요?"
                value={values.wakeupTime}
                onChange={setFieldValue}
                onTouch={setFieldTouched}
                name="wakeupTime"
                error={touched.wakeupTime && errors.wakeupTime}
                placeholder="네, 7시 / 아니오, 9시~10시"
              />
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
              <Box/>
            </>
          )}
        </Formik>
      </KeyboardAwareScrollView>
    </>
  );
};
export default ApplicationScreen;

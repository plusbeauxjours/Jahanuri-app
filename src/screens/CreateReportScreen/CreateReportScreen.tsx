import React, { useState } from "react";
import styled from "styled-components";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Formik } from "formik";
import * as Yup from "yup";

import FormikInput from "../../components/Formik/FormikInput";
import { GET_REPORT_LIST } from "../ReportListScreen/ReportListScreenQueries";
import {
  CreateReport,
  CreateReportVariables,
  GetReportList,
  GetReportListVariables,
} from "../../types/api";
import { CREATE_REPORT } from "./CreateReportScreenQueries";
import {
  NavigationScreenProp,
  NavigationState,
  NavigationParams,
} from "react-navigation";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import BackCustomHeader from "../../components/BackCustomHeader";
import { Portal, Dialog, Paragraph } from "react-native-paper";
import Toast from "react-native-root-toast";
import { useMutation } from "react-apollo-hooks";
import { useMe } from "../../context/meContext";

const Button = styled.Button`
  margin-top: 10px;
  width: 90%;
`;
const Text = styled.Text``;
const Touchable = styled.TouchableOpacity``;
const Line = styled.View`
  flex-direction: row;
`;
const ButtonContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 100px;
`;
const initialValues = {
  saengSikMorning: "",
  saengSikNoon: "",
  saengSikEvening: "",
  aminoMorning: "",
  aminoNoon: "",
  aminoEvening: "",
  sangiSoMorning: "",
  sangiSoNoon: "",
  sangiSoEvening: "",
  jeunHaeJil: false,
  meal: "",
  mealCheck: "",
  sleeping: "",
  stool: "",
  hotGrain: "",
  hotWater: "",
  strolling: "",
  workout: "",
  lecture: "",
  etc: "",
  diary: "",
  reportDate: "20201010",
};

interface IProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const CreateReportScreen: React.FC<IProps> = ({ navigation }) => {
  const { me, loading } = useMe();
  const [isDatePickerModalOpen, setDatePickerModalOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [submitReportFn, { loading: submitReportLoading }] = useMutation<
    CreateReport,
    CreateReportVariables
  >(CREATE_REPORT, {
    refetchQueries: [
      {
        query: GET_REPORT_LIST,
        variables: { userUuid: me && me.user.uuid },
      },
    ],
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
  const submitConfirm = (values: any) => {
    submitReportFn({
      variables: {
        reportCoverUuid:
          navigation.state.params && navigation.state.params.reportCoverUuid,
        saengSikMorning:
          values.saengSikMorning && values.saengSikMorning.trim(),
        saengSikNoon: values.saengSikNoon && values.saengSikNoon.trim(),
        saengSikEvening:
          values.saengSikEvening && values.saengSikEvening.trim(),
        aminoMorning: values.aminoMorning && values.aminoMorning.trim(),
        aminoNoon: values.aminoNoon && values.aminoNoon.trim(),
        aminoEvening: values.aminoEvening && values.aminoEvening.trim(),
        sangiSoMorning: values.sangiSoMorning && values.sangiSoMorning.trim(),
        sangiSoNoon: values.sangiSoNoon && values.sangiSoNoon.trim(),
        sangiSoEvening: values.sangiSoEvening && values.sangiSoEvening.trim(),
        jeunHaeJil: values.jeunHaeJil,
        meal: values.meal.trim(),
        mealCheck: values.mealCheck.trim(),
        sleeping: values.sleeping.trim(),
        stool: values.stool.trim(),
        hotGrain: values.hotGrain.trim(),
        hotWater: values.hotWater.trim(),
        strolling: values.strolling.trim(),
        workout: values.workout.trim(),
        lecture: values.lecture.trim(),
        etc: values.etc.trim(),
        diary: values.diary.trim(),
        reportDate: "20201010",
      },
    });
    setModalOpen(false);
    navigation.goBack(null);
    toast("일지를 제출하였습니다.");
  };
  const handleDateConfirm = (date) => {
    console.log("A date has been picked: ", date);
    setDatePickerModalOpen(false);
  };
  const validationSchema = Yup.object().shape({
    jeunHaeJil: Yup.boolean().required("jeunHaeJil is required"),
    meal: Yup.string().required(""),
    mealCheck: Yup.string().required("mealCheck is required"),
    sleeping: Yup.string().required("sleeping is required"),
    stool: Yup.string().required("stool is required"),
    hotGrain: Yup.string().required("hotGrain is required"),
    hotWater: Yup.string().required("hotWater is required"),
    strolling: Yup.string().required("strolling is required"),
    workout: Yup.string().required("workout is required"),
    lecture: Yup.string().required("lecture is required"),
    etc: Yup.string().required("etc is required"),
    diary: Yup.string().required("diary is required"),
    reportDate: Yup.date().required("reportDate is required"),
  });
  return (
    <>
      <BackCustomHeader title={"새 일지"} />
      <KeyboardAwareScrollView
        contentContainerStyle={{
          flexGrow: 1,
          backgroundColor: "#fff",
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
              <Touchable onPress={() => setDatePickerModalOpen(true)}>
                <Text>Date</Text>
                <DateTimePickerModal
                  isVisible={isDatePickerModalOpen}
                  mode="date"
                  onConfirm={handleDateConfirm}
                  onCancel={() => setDatePickerModalOpen(false)}
                />
              </Touchable>
              <Line>
                <Text>섭생식</Text>
                <FormikInput
                  type="row"
                  label="아침"
                  value={values.saengSikMorning}
                  onChange={setFieldValue}
                  onTouch={setFieldTouched}
                  name="saengSikMorning"
                  error={touched.saengSikMorning && errors.saengSikMorning}
                  placeholder="화토"
                />
                <FormikInput
                  type="row"
                  label="점심"
                  value={values.saengSikNoon}
                  onChange={setFieldValue}
                  onTouch={setFieldTouched}
                  name="saengSikNoon"
                  error={touched.saengSikNoon && errors.saengSikNoon}
                  placeholder="화토"
                />
                <FormikInput
                  type="row"
                  label="저녁"
                  value={values.saengSikEvening}
                  onChange={setFieldValue}
                  onTouch={setFieldTouched}
                  name="saengSikEvening"
                  error={touched.saengSikEvening && errors.saengSikEvening}
                  placeholder="수목"
                />
              </Line>
              <Line>
                <Text>아미노</Text>
                <FormikInput
                  type="row"
                  label="아침"
                  value={values.aminoMorning}
                  onChange={setFieldValue}
                  onTouch={setFieldTouched}
                  name="aminoMorning"
                  error={touched.aminoMorning && errors.aminoMorning}
                  placeholder="아미노 1스푼"
                />
                <FormikInput
                  type="row"
                  label="점심"
                  value={values.aminoNoon}
                  onChange={setFieldValue}
                  onTouch={setFieldTouched}
                  name="aminoNoon"
                  error={touched.aminoNoon && errors.aminoNoon}
                  placeholder="아미노 2스푼"
                />
                <FormikInput
                  type="row"
                  label="저녁"
                  value={values.aminoEvening}
                  onChange={setFieldValue}
                  onTouch={setFieldTouched}
                  name="aminoEvening"
                  error={touched.aminoEvening && errors.aminoEvening}
                  placeholder="아미노 2스푼"
                />
              </Line>
              <Line>
                <Text>생기소</Text>
                <FormikInput
                  type="row"
                  label="아침"
                  value={values.sangiSoMorning}
                  onChange={setFieldValue}
                  onTouch={setFieldTouched}
                  name="sangiSoMorning"
                  error={touched.sangiSoMorning && errors.sangiSoMorning}
                  placeholder="휴 1스푼, 활 2스푼"
                />
                <FormikInput
                  type="row"
                  label="점심"
                  value={values.sangiSoNoon}
                  onChange={setFieldValue}
                  onTouch={setFieldTouched}
                  name="sangiSoNoon"
                  error={touched.sangiSoNoon && errors.sangiSoNoon}
                  placeholder="활 1스푼"
                />
                <FormikInput
                  type="row"
                  label="저녁"
                  value={values.sangiSoEvening}
                  onChange={setFieldValue}
                  onTouch={setFieldTouched}
                  name="sangiSoEvening"
                  error={touched.sangiSoEvening && errors.sangiSoEvening}
                  placeholder="휴 2스푼, 정 1스푼"
                />
              </Line>
              <FormikInput
                label="일반 식사"
                value={values.meal}
                onChange={setFieldValue}
                onTouch={setFieldTouched}
                name="meal"
                error={touched.meal && errors.meal}
                placeholder="저녁 된장찌개 + 밥"
              />
              <FormikInput
                label="식사 습관 체크"
                value={values.mealCheck}
                onChange={setFieldValue}
                onTouch={setFieldTouched}
                name="mealCheck"
                error={touched.mealCheck && errors.mealCheck}
                placeholder="먹는 양이 줄었다."
              />
              <FormikInput
                label="잠"
                value={values.sleeping}
                onChange={setFieldValue}
                onTouch={setFieldTouched}
                name="sleeping"
                error={touched.sleeping && errors.sleeping}
                placeholder="현실적인 꿈을 꾸었다."
              />
              <FormikInput
                label="변"
                value={values.stool}
                onChange={setFieldValue}
                onTouch={setFieldTouched}
                name="stool"
                error={touched.stool && errors.stool}
                placeholder="약간 풀어짐"
              />
              <FormikInput
                label="곡식 찜질"
                value={values.hotGrain}
                onChange={setFieldValue}
                onTouch={setFieldTouched}
                name="hotGrain"
                error={touched.hotGrain && errors.hotGrain}
                placeholder="족욕, 자기전에 배"
              />
              <FormikInput
                label="따뜻한 물"
                value={values.hotWater}
                onChange={setFieldValue}
                onTouch={setFieldTouched}
                name="hotWater"
                error={touched.hotWater && errors.hotWater}
                placeholder="따뜻한 차만 마심"
              />
              <FormikInput
                label="걷기"
                value={values.strolling}
                onChange={setFieldValue}
                onTouch={setFieldTouched}
                name="strolling"
                error={touched.strolling && errors.strolling}
                placeholder="2시간 반"
              />
              <FormikInput
                label="운동"
                value={values.workout}
                onChange={setFieldValue}
                onTouch={setFieldTouched}
                name="workout"
                error={touched.workout && errors.workout}
                placeholder="허리돌리기 호흡에 맞게 10분, 앉았다 일어나기 10회 3번"
              />
              <FormikInput
                label="강의"
                value={values.lecture}
                onChange={setFieldValue}
                onTouch={setFieldTouched}
                name="lecture"
                error={touched.lecture && errors.lecture}
                placeholder="뇌구조"
              />
              <FormikInput
                label="기타"
                value={values.etc}
                onChange={setFieldValue}
                onTouch={setFieldTouched}
                name="etc"
                error={touched.etc && errors.etc}
                placeholder="곡식주머니 꾸준히 하기, 음식에 간해서 먹기"
              />
              <FormikInput
                label="세줄 일기"
                value={values.diary}
                onChange={setFieldValue}
                onTouch={setFieldTouched}
                name="diary"
                error={touched.diary && errors.diary}
              />
              <ButtonContainer>
                <Button
                  raised
                  primary
                  disabled={!isValid}
                  loading={submitReportLoading}
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

export default CreateReportScreen;

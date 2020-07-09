import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Portal, Dialog, Paragraph } from "react-native-paper";
import Toast from "react-native-root-toast";
import { useMutation, useQuery } from "react-apollo-hooks";
import { Formik } from "formik";
import * as Yup from "yup";
import { CheckBox } from "react-native-elements";
import {
  NavigationScreenProp,
  NavigationState,
  NavigationParams,
} from "react-navigation";
import DatePickerModal from "react-native-modal-datetime-picker";
import Moment from "moment";

import FormikInput from "../../components/Formik/FormikInput";
import { GET_REPORT_LIST } from "../ReportListScreen/ReportListScreenQueries";
import { CreateReport, CreateReportVariables, Me } from "../../types/api";
import { CREATE_REPORT } from "./CreateReportScreenQueries";

import BackCustomHeader from "../../components/BackCustomHeader";

import Divider from "../../components/Divider";
import dimensions from "../../constants/dimensions";
import { ME } from "../MyProfileScreen/MyProfileScreenQueries";
import { ActivityIndicator } from "react-native";
import Button from "../../components/Button";

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const Text = styled.Text`
  align-self: flex-start;
  font-weight: 100;
  margin-left: 20px;
  font-size: 12px;
`;
const Touchable = styled.TouchableOpacity``;
const Line = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
`;
const ButtonContainer = styled.View`
  flex: 1;
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
const Date = styled.Text`
  width: ${dimensions.width - 40};
  font-size: 24px;
  color: #000;
  text-align: center;
  margin: 30px 0 20px 0;
  padding: 10px;
  border: 1px solid #999;
  color: #999;
  border-radius: 5px;
  background-color: #fff;
`;
const CheckboxLine = styled.View`
  justify-content: space-around;
  flex-direction: row;
  width: 100%;
  height: 60px;
`;
const ButtonSpace = styled.View`
  width: 20px;
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
};

interface IProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const CreateReportScreen: React.FC<IProps> = ({ navigation }) => {
  const {
    data: { me: { user: me = null } = {} } = {},
    loading: meLoading,
  } = useQuery<Me>(ME);
  const [reportDate, setReportDate] = useState<any>(null);
  const [reportDates, setReportDates] = useState<any>([]);
  const [isDatePickerModalOpen, setDatePickerModalOpen] = useState<boolean>(
    false
  );
  const [jeunHaeJilA, setJeunHaeJilA] = useState<boolean>(false);
  const [jeunHaeJilB, setJeunHaeJilB] = useState<boolean>(false);
  const [jeunHaeJilC, setJeunHaeJilC] = useState<boolean>(false);
  const [jeunHaeJilD, setJeunHaeJilD] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [submitReportFn, { loading: submitReportLoading }] = useMutation<
    CreateReport,
    CreateReportVariables
  >(CREATE_REPORT, {
    refetchQueries: [
      {
        query: GET_REPORT_LIST,
        variables: { userUuid: me && me.uuid },
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
        jeunHaeJilA,
        jeunHaeJilB,
        jeunHaeJilC,
        jeunHaeJilD,
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
        reportDate: Moment(reportDate),
      },
    });
    setModalOpen(false);
    navigation.navigate("ReportListScreen");
    toast("일지를 제출하였습니다.");
  };
  const handleDateConfirm = (date) => {
    hideDatePicker();
    setReportDate(Moment(date).format("YYYY-MM-DD"));
    if (reportDates.includes(Moment(date).format("YYYY-MM-DD"))) {
      toast("이미 일지를 제출하였습니다.");
    }
  };
  const hideDatePicker = () => {
    setDatePickerModalOpen(false);
  };
  const validationSchema = Yup.object().shape({
    meal: Yup.string().required("일반 식사는 필수 입력 사항입니다."),
    mealCheck: Yup.string().required("식사 습관 체크는 필수 입력 사항입니다."),
    sleeping: Yup.string().required("잠은 필수 입력 사항입니다."),
    stool: Yup.string().required("변은 필수 입력 사항입니다."),
    hotGrain: Yup.string().required("곡식 찜질은 필수 입력 사항입니다."),
    hotWater: Yup.string().required("따뜻한 물은 필수 입력 사항입니다."),
    strolling: Yup.string().required("걷기는 필수 입력 사항입니다."),
    workout: Yup.string().required("운동은 필수 입력 사항입니다."),
    lecture: Yup.string().required("강의는 필수 입력 사항입니다."),
    etc: Yup.string().required("기타는 필수 입력 사항입니다."),
    diary: Yup.string().required("세줄 일기는 필수 입력 사항입니다."),
  });
  useEffect(() => {
    navigation?.state?.params?.reports?.map((report: any) =>
      setReportDates((prev) => [...prev, report.reportDate])
    );
  }, []);
  if (meLoading) {
    return (
      <Container>
        <ActivityIndicator />
      </Container>
    );
  } else {
    return (
      <>
        <BackCustomHeader title={"새 일지"} />
        <KeyboardAwareScrollView
          enableOnAndroid
          resetScrollToCoords={{ x: 0, y: 0 }}
          scrollEnabled
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
                      <DialogButtonContainer>
                        <Button
                          disabled={submitReportLoading}
                          text="취소"
                          onPress={() => setModalOpen(false)}
                        />
                        <ButtonSpace />
                        <Button
                          disabled={submitReportLoading}
                          text="제출"
                          onPress={() => submitConfirm(values)}
                        />
                      </DialogButtonContainer>
                    </Dialog.Actions>
                  </Dialog>
                </Portal>
                <DatePickerModal
                  headerTextIOS={"날짜를 선택하세요."}
                  cancelTextIOS={"취소"}
                  confirmTextIOS={"확인"}
                  isVisible={isDatePickerModalOpen}
                  mode="date"
                  locale="ko_KR"
                  onConfirm={handleDateConfirm}
                  onCancel={hideDatePicker}
                  display="default"
                />
                <Touchable onPress={() => setDatePickerModalOpen(true)}>
                  <Date>
                    {reportDate
                      ? reportDate.substr(0, 4) +
                        "년 " +
                        reportDate.substr(5, 2) +
                        "월 " +
                        reportDate.substr(8, 2) +
                        "일"
                      : "탭하여 날짜를 선택하세요."}
                  </Date>
                </Touchable>
                <Divider text={"영양습관"} color={"dark"} />
                <Text>섭생식</Text>
                <Line>
                  <FormikInput
                    type="row"
                    label="아침"
                    value={values.saengSikMorning}
                    onChange={setFieldValue}
                    onTouch={setFieldTouched}
                    name="saengSikMorning"
                    error={touched.saengSikMorning && errors.saengSikMorning}
                    placeholder="예) 화토"
                  />
                  <FormikInput
                    type="row"
                    label="점심"
                    value={values.saengSikNoon}
                    onChange={setFieldValue}
                    onTouch={setFieldTouched}
                    name="saengSikNoon"
                    error={touched.saengSikNoon && errors.saengSikNoon}
                    placeholder="예) 화토"
                  />
                  <FormikInput
                    type="row"
                    label="저녁"
                    value={values.saengSikEvening}
                    onChange={setFieldValue}
                    onTouch={setFieldTouched}
                    name="saengSikEvening"
                    error={touched.saengSikEvening && errors.saengSikEvening}
                    placeholder="예) 수목"
                  />
                </Line>
                <Text>아미노</Text>
                <Line>
                  <FormikInput
                    type="row"
                    label="아침"
                    value={values.aminoMorning}
                    onChange={setFieldValue}
                    onTouch={setFieldTouched}
                    name="aminoMorning"
                    error={touched.aminoMorning && errors.aminoMorning}
                    placeholder="예) 아미노 1"
                  />
                  <FormikInput
                    type="row"
                    label="점심"
                    value={values.aminoNoon}
                    onChange={setFieldValue}
                    onTouch={setFieldTouched}
                    name="aminoNoon"
                    error={touched.aminoNoon && errors.aminoNoon}
                    placeholder="예) 아미노 2"
                  />
                  <FormikInput
                    type="row"
                    label="저녁"
                    value={values.aminoEvening}
                    onChange={setFieldValue}
                    onTouch={setFieldTouched}
                    name="aminoEvening"
                    error={touched.aminoEvening && errors.aminoEvening}
                    placeholder="예) 아미노 2"
                  />
                </Line>
                <Text>생기소</Text>
                <Line>
                  <FormikInput
                    type="row"
                    label="아침"
                    value={values.sangiSoMorning}
                    onChange={setFieldValue}
                    onTouch={setFieldTouched}
                    name="sangiSoMorning"
                    error={touched.sangiSoMorning && errors.sangiSoMorning}
                    placeholder="예) 휴 1, 활 2"
                  />
                  <FormikInput
                    type="row"
                    label="점심"
                    value={values.sangiSoNoon}
                    onChange={setFieldValue}
                    onTouch={setFieldTouched}
                    name="sangiSoNoon"
                    error={touched.sangiSoNoon && errors.sangiSoNoon}
                    placeholder="예) 활 1"
                  />
                  <FormikInput
                    type="row"
                    label="저녁"
                    value={values.sangiSoEvening}
                    onChange={setFieldValue}
                    onTouch={setFieldTouched}
                    name="sangiSoEvening"
                    error={touched.sangiSoEvening && errors.sangiSoEvening}
                    placeholder="예) 휴 2, 정 1"
                  />
                </Line>
                <Text>전해질 보충</Text>
                <CheckboxLine>
                  <CheckBox
                    size={24}
                    checked={jeunHaeJilA}
                    checkedColor={"#8b00ff"}
                    onPress={() => {
                      setJeunHaeJilA((jeunHaeJilA) => !jeunHaeJilA);
                    }}
                  />
                  <CheckBox
                    size={24}
                    checked={jeunHaeJilB}
                    checkedColor={"#8b00ff"}
                    onPress={() => {
                      setJeunHaeJilB((jeunHaeJilB) => !jeunHaeJilB);
                    }}
                  />
                  <CheckBox
                    size={24}
                    checked={jeunHaeJilC}
                    checkedColor={"#8b00ff"}
                    onPress={() => {
                      setJeunHaeJilC((jeunHaeJilC) => !jeunHaeJilC);
                    }}
                  />
                  <CheckBox
                    size={24}
                    checked={jeunHaeJilD}
                    checkedColor={"#8b00ff"}
                    onPress={() => {
                      setJeunHaeJilD((jeunHaeJilD) => !jeunHaeJilD);
                    }}
                  />
                </CheckboxLine>
                <FormikInput
                  label="일반 식사"
                  value={values.meal}
                  onChange={setFieldValue}
                  onTouch={setFieldTouched}
                  name="meal"
                  error={touched.meal && errors.meal}
                  placeholder="예) 저녁 된장찌개 + 밥"
                />
                <FormikInput
                  label="식사 습관 체크"
                  value={values.mealCheck}
                  onChange={setFieldValue}
                  onTouch={setFieldTouched}
                  name="mealCheck"
                  error={touched.mealCheck && errors.mealCheck}
                  placeholder="예) 먹는 양이 줄었다."
                />
                <Divider text={"생활습관"} color={"dark"} />
                <FormikInput
                  label="잠"
                  value={values.sleeping}
                  onChange={setFieldValue}
                  onTouch={setFieldTouched}
                  name="sleeping"
                  error={touched.sleeping && errors.sleeping}
                  placeholder="예) 현실적인 꿈을 꾸었다."
                />
                <FormikInput
                  label="변"
                  value={values.stool}
                  onChange={setFieldValue}
                  onTouch={setFieldTouched}
                  name="stool"
                  error={touched.stool && errors.stool}
                  placeholder="예) 약간 풀어짐"
                />
                <FormikInput
                  label="곡식 찜질"
                  value={values.hotGrain}
                  onChange={setFieldValue}
                  onTouch={setFieldTouched}
                  name="hotGrain"
                  error={touched.hotGrain && errors.hotGrain}
                  placeholder="예) 족욕, 자기전에 배"
                />
                <FormikInput
                  label="따뜻한 물"
                  value={values.hotWater}
                  onChange={setFieldValue}
                  onTouch={setFieldTouched}
                  name="hotWater"
                  error={touched.hotWater && errors.hotWater}
                  placeholder="예) 따뜻한 차만 마심"
                />
                <FormikInput
                  label="걷기"
                  value={values.strolling}
                  onChange={setFieldValue}
                  onTouch={setFieldTouched}
                  name="strolling"
                  error={touched.strolling && errors.strolling}
                  placeholder="예) 2시간 반"
                />
                <Divider text={"오늘의 숙제 (운동/강의)"} color={"dark"} />
                <FormikInput
                  label="운동"
                  value={values.workout}
                  onChange={setFieldValue}
                  onTouch={setFieldTouched}
                  name="workout"
                  error={touched.workout && errors.workout}
                  placeholder="예) 허리돌리기 호흡에 맞게 10분, 앉았다 일어나기 10회 3번"
                />
                <FormikInput
                  label="강의"
                  value={values.lecture}
                  onChange={setFieldValue}
                  onTouch={setFieldTouched}
                  name="lecture"
                  error={touched.lecture && errors.lecture}
                  placeholder="예) 뇌구조"
                />
                <FormikInput
                  label="기타"
                  value={values.etc}
                  onChange={setFieldValue}
                  onTouch={setFieldTouched}
                  name="etc"
                  error={touched.etc && errors.etc}
                  placeholder="예) 곡식주머니 꾸준히 하기, 음식에 간해서 먹기"
                />
                <Divider text={"세줄 일기"} color={"dark"} />
                <FormikInput
                  label="세줄 일기"
                  value={values.diary}
                  onChange={setFieldValue}
                  onTouch={setFieldTouched}
                  name="diary"
                  error={touched.diary && errors.diary}
                  multiline={true}
                />
                <ButtonContainer>
                  <Button
                    disabled={!isValid || !reportDate}
                    loading={submitReportLoading}
                    onPress={() => setModalOpen(true)}
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
  }
};

export default CreateReportScreen;

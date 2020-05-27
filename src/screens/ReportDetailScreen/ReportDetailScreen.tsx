import React from "react";
import styled from "styled-components";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useQuery } from "react-apollo-hooks";
import { Formik } from "formik";
import {
  NavigationScreenProp,
  NavigationState,
  NavigationParams,
} from "react-navigation";
import { FontAwesome } from "@expo/vector-icons";

import FormikInput from "../../components/Formik/FormikInput";
import { GetReportDetail, GetReportDetailVariables } from "../../types/api";
import BackCustomHeader from "../../components/BackCustomHeader";

import Divider from "../../components/Divider";
import { ActivityIndicator } from "react-native";
import { GET_REPORT_DETAIL } from "./ReportDetailScreenQueries";
import Moment from "moment";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const Text = styled.Text`
  align-self: flex-start;
  font-weight: 100;
  margin-left: 20px;
  font-size: 12px;
`;
const Line = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
`;
const CheckboxLine = styled.View`
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 60px;
`;
const WhiteSpace = styled.View`
  height: 30px;
`;

interface IProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const ReportDetailScreen: React.FC<IProps> = ({ navigation }) => {
  const {
    data: { getReportDetail: { report = null } = {} } = {},
    loading: getReportDetailLoading,
  } = useQuery<GetReportDetail, GetReportDetailVariables>(GET_REPORT_DETAIL, {
    variables: {
      reportUuid: navigation.state.params && navigation.state.params.reportUuid,
    },
  });
  if (getReportDetailLoading) {
    return (
      <Container>
        <ActivityIndicator />
      </Container>
    );
  } else {
    return (
      <>
        {report.reportCover.classOrder ? (
          <BackCustomHeader
            title={
              `${Moment(report.reportDate).diff(
                Moment(report.reportCover.classOrder.startDate),
                "day"
              )}` + "일차 일지"
            }
            subTitle={`(${
              report.reportDate &&
              report.reportDate.substr(5, 2) +
                "월 " +
                report.reportDate.substr(8, 2) +
                "일"
            })`}
          />
        ) : (
          <BackCustomHeader
            title={
              report.reportDate &&
              report.reportDate.substr(5, 2) +
                "월 " +
                report.reportDate.substr(8, 2) +
                "일 일지"
            }
          />
        )}
        <KeyboardAwareScrollView
          contentContainerStyle={{
            flexGrow: 1,
            backgroundColor: null,
            alignItems: "center",
            justifyContent: "center",
          }}
          keyboardShouldPersistTaps="handled"
        >
          <Formik initialValues={{}} onSubmit={() => {}}>
            {({ setFieldValue, setFieldTouched, touched, errors }) => (
              <>
                <WhiteSpace />
                <Divider text={"영양습관"} color={"dark"} />
                <Text>섭생식</Text>
                <Line>
                  <FormikInput
                    editable={false}
                    type="row"
                    label="아침"
                    value={report.saengSikMorning}
                    onChange={setFieldValue}
                    onTouch={setFieldTouched}
                    name="saengSikMorning"
                  />
                  <FormikInput
                    editable={false}
                    type="row"
                    label="점심"
                    value={report.saengSikNoon}
                    onChange={setFieldValue}
                    onTouch={setFieldTouched}
                    name="saengSikNoon"
                  />
                  <FormikInput
                    editable={false}
                    type="row"
                    label="저녁"
                    value={report.saengSikEvening}
                    onChange={setFieldValue}
                    onTouch={setFieldTouched}
                    name="saengSikEvening"
                  />
                </Line>
                <Text>아미노</Text>
                <Line>
                  <FormikInput
                    editable={false}
                    type="row"
                    label="아침"
                    value={report.aminoMorning}
                    onChange={setFieldValue}
                    onTouch={setFieldTouched}
                    name="aminoMorning"
                  />
                  <FormikInput
                    editable={false}
                    type="row"
                    label="점심"
                    value={report.aminoNoon}
                    onChange={setFieldValue}
                    onTouch={setFieldTouched}
                    name="aminoNoon"
                  />
                  <FormikInput
                    editable={false}
                    type="row"
                    label="저녁"
                    value={report.aminoEvening}
                    onChange={setFieldValue}
                    onTouch={setFieldTouched}
                    name="aminoEvening"
                  />
                </Line>
                <Text>생기소</Text>
                <Line>
                  <FormikInput
                    editable={false}
                    type="row"
                    label="아침"
                    value={report.sangiSoMorning}
                    onChange={setFieldValue}
                    onTouch={setFieldTouched}
                    name="sangiSoMorning"
                  />
                  <FormikInput
                    editable={false}
                    type="row"
                    label="점심"
                    value={report.sangiSoNoon}
                    onChange={setFieldValue}
                    onTouch={setFieldTouched}
                    name="sangiSoNoon"
                  />
                  <FormikInput
                    editable={false}
                    type="row"
                    label="저녁"
                    value={report.sangiSoEvening}
                    onChange={setFieldValue}
                    onTouch={setFieldTouched}
                    name="sangiSoEvening"
                  />
                </Line>
                <Text>전해질 보충</Text>
                <CheckboxLine>
                  {report.jeunHaeJilA ? (
                    <FontAwesome
                      name="check-square-o"
                      color={"#999"}
                      size={24}
                    />
                  ) : (
                    <FontAwesome
                      name="square-o"
                      color={"#999"}
                      size={24}
                      checked={report.jeunHaeJilA}
                    />
                  )}
                  {report.jeunHaeJilB ? (
                    <FontAwesome
                      name="check-square-o"
                      color={"#999"}
                      size={24}
                    />
                  ) : (
                    <FontAwesome
                      name="square-o"
                      color={"#999"}
                      size={24}
                      checked={report.jeunHaeJilB}
                    />
                  )}
                  {report.jeunHaeJilC ? (
                    <FontAwesome
                      name="check-square-o"
                      color={"#999"}
                      size={24}
                    />
                  ) : (
                    <FontAwesome
                      name="square-o"
                      color={"#999"}
                      size={24}
                      checked={report.jeunHaeJilC}
                    />
                  )}
                  {report.jeunHaeJilD ? (
                    <FontAwesome
                      name="check-square-o"
                      color={"#999"}
                      size={24}
                    />
                  ) : (
                    <FontAwesome
                      name="square-o"
                      color={"#999"}
                      size={24}
                      checked={report.jeunHaeJilD}
                    />
                  )}
                </CheckboxLine>
                <FormikInput
                  editable={false}
                  label="일반 식사"
                  value={report.meal}
                  onChange={setFieldValue}
                  onTouch={setFieldTouched}
                  name="meal"
                />
                <FormikInput
                  editable={false}
                  label="식사 습관 체크"
                  value={report.mealCheck}
                  onChange={setFieldValue}
                  onTouch={setFieldTouched}
                  name="mealCheck"
                />
                <Divider text={"생활습관"} color={"dark"} />
                <FormikInput
                  editable={false}
                  label="잠"
                  value={report.sleeping}
                  onChange={setFieldValue}
                  onTouch={setFieldTouched}
                  name="sleeping"
                />
                <FormikInput
                  editable={false}
                  label="변"
                  value={report.stool}
                  onChange={setFieldValue}
                  onTouch={setFieldTouched}
                  name="stool"
                />
                <FormikInput
                  editable={false}
                  label="곡식 찜질"
                  value={report.hotGrain}
                  onChange={setFieldValue}
                  onTouch={setFieldTouched}
                  name="hotGrain"
                />
                <FormikInput
                  editable={false}
                  label="따뜻한 물"
                  value={report.hotWater}
                  onChange={setFieldValue}
                  onTouch={setFieldTouched}
                  name="hotWater"
                />
                <FormikInput
                  editable={false}
                  label="걷기"
                  value={report.strolling}
                  onChange={setFieldValue}
                  onTouch={setFieldTouched}
                  name="strolling"
                />
                <Divider text={"오늘의 숙제 (운동/강의)"} color={"dark"} />
                <FormikInput
                  editable={false}
                  label="운동"
                  value={report.workout}
                  onChange={setFieldValue}
                  onTouch={setFieldTouched}
                  name="workout"
                />
                <FormikInput
                  editable={false}
                  label="강의"
                  value={report.lecture}
                  onChange={setFieldValue}
                  onTouch={setFieldTouched}
                  name="lecture"
                />
                <FormikInput
                  editable={false}
                  label="기타"
                  value={report.etc}
                  onChange={setFieldValue}
                  onTouch={setFieldTouched}
                  name="etc"
                />
                <Divider text={"세줄 일기"} color={"dark"} />
                <FormikInput
                  editable={false}
                  label="세줄 일기"
                  value={report.diary}
                  onChange={setFieldValue}
                  onTouch={setFieldTouched}
                  name="diary"
                  multiline={true}
                />
                <WhiteSpace />
              </>
            )}
          </Formik>
        </KeyboardAwareScrollView>
      </>
    );
  }
};
export default ReportDetailScreen;

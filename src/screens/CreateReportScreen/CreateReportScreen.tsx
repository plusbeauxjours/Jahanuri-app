import React from "react";
import { Alert } from "react-native";
import { Mutation } from "react-apollo";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Formik } from "formik";
import * as Yup from "yup";

import FormikInput from "../../components/Formik/FormikInput";
import styled from "styled-components";
import { NavigationStackScreenProps } from "react-navigation-stack";
import { CreateReport, CreateReportVariables } from "../../types/api";
import MenuCustomHeader from "../../components/MenuCustomHeader";
import { CREATE_REPORT } from "./CreateReportScreenQueries";

const Button = styled.Button`
  margin-top: 10px;
  width: 90%;
`;
const initialValues = {
  reportCoverUuid: "",
  saengSik: "",
  amino: "",
  sangiSo: "",
  jeunHaeJil: false,
  jeunHaeJilTime: "",
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
interface IProps extends NavigationStackScreenProps {}

class CreateReportScreen extends React.Component<IProps> {
  public onEditSportsPress = () => {
    this.props.navigation.navigate("EditSportsScreen");
  };

  public validationSchema = Yup.object().shape({
    reportCoverUuid: Yup.string().required("reportCoverUuid is required"),
    saengSik: Yup.string().required("saengSik is required"),
    amino: Yup.string().required("amino is required"),
    sangiSo: Yup.string().required("sangiSo is required"),
    jeunHaeJil: Yup.boolean().required("jeunHaeJil is required"),
    jeunHaeJilTime: Yup.string().required("jeunHaeJilTime is required"),
    meal: Yup.string().required("meal is required"),
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
  });

  render() {
    return (
      <>
        <MenuCustomHeader title={"새 일지"} />
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
            validationSchema={this.validationSchema}
          >
            {({
              values,
              setFieldValue,
              setFieldTouched,
              touched,
              errors,
              isValid,
            }) => (
              <React.Fragment>
                <FormikInput
                  label="SaengSik"
                  value={values.saengSik}
                  onChange={setFieldValue}
                  onTouch={setFieldTouched}
                  name="saengSik"
                  error={touched.saengSik && errors.saengSik}
                />
                <FormikInput
                  label="Amino"
                  value={values.amino}
                  onChange={setFieldValue}
                  onTouch={setFieldTouched}
                  name="amino"
                  error={touched.amino && errors.amino}
                />
                <FormikInput
                  label="Sangi So"
                  value={values.sangiSo}
                  onChange={setFieldValue}
                  onTouch={setFieldTouched}
                  name="sangiSo"
                  error={touched.sangiSo && errors.sangiSo}
                />
                <FormikInput
                  label="JeunHaeJil"
                  value={values.jeunHaeJil}
                  onChange={setFieldValue}
                  onTouch={setFieldTouched}
                  name="jeunHaeJil"
                  error={touched.jeunHaeJil && errors.jeunHaeJil}
                />
                <FormikInput
                  label="Jeun Hae Jil Time"
                  value={values.jeunHaeJilTime}
                  onChange={setFieldValue}
                  onTouch={setFieldTouched}
                  name="jeunHaeJilTime"
                  error={touched.jeunHaeJilTime && errors.jeunHaeJilTime}
                />
                <FormikInput
                  label="Meal"
                  value={values.meal}
                  onChange={setFieldValue}
                  onTouch={setFieldTouched}
                  name="meal"
                  error={touched.meal && errors.meal}
                />
                <FormikInput
                  label="Meal Check"
                  value={values.mealCheck}
                  onChange={setFieldValue}
                  onTouch={setFieldTouched}
                  name="mealCheck"
                  error={touched.mealCheck && errors.mealCheck}
                />{" "}
                <FormikInput
                  label="Sleeping"
                  value={values.sleeping}
                  onChange={setFieldValue}
                  onTouch={setFieldTouched}
                  name="sleeping"
                  error={touched.sleeping && errors.sleeping}
                />
                <FormikInput
                  label="Stool"
                  value={values.stool}
                  onChange={setFieldValue}
                  onTouch={setFieldTouched}
                  name="stool"
                  error={touched.stool && errors.stool}
                />
                <FormikInput
                  label="Hot Grain"
                  value={values.hotGrain}
                  onChange={setFieldValue}
                  onTouch={setFieldTouched}
                  name="hotGrain"
                  error={touched.hotGrain && errors.hotGrain}
                />
                <FormikInput
                  label="Hot Water"
                  value={values.hotWater}
                  onChange={setFieldValue}
                  onTouch={setFieldTouched}
                  name="hotWater"
                  error={touched.hotWater && errors.hotWater}
                />
                <FormikInput
                  label="Strolling"
                  value={values.strolling}
                  onChange={setFieldValue}
                  onTouch={setFieldTouched}
                  name="strolling"
                  error={touched.strolling && errors.strolling}
                />
                <FormikInput
                  label="Workout"
                  value={values.workout}
                  onChange={setFieldValue}
                  onTouch={setFieldTouched}
                  name="workout"
                  error={touched.workout && errors.workout}
                />
                <FormikInput
                  label="Lecture"
                  value={values.lecture}
                  onChange={setFieldValue}
                  onTouch={setFieldTouched}
                  name="lecture"
                  error={touched.lecture && errors.lecture}
                />
                <FormikInput
                  label="Etc"
                  value={values.etc}
                  onChange={setFieldValue}
                  onTouch={setFieldTouched}
                  name="etc"
                  error={touched.etc && errors.etc}
                />
                <FormikInput
                  label="Diary"
                  value={values.diary}
                  onChange={setFieldValue}
                  onTouch={setFieldTouched}
                  name="diary"
                  error={touched.diary && errors.diary}
                />
                <Mutation<CreateReport, CreateReportVariables>
                  mutation={CREATE_REPORT}
                  variables={{
                    reportCoverUuid: values.reportCoverUuid.trim(),
                    saengSik: values.saengSik.trim(),
                    amino: values.amino.trim(),
                    sangiSo: values.sangiSo.trim(),
                    jeunHaeJil: values.jeunHaeJil,
                    jeunHaeJilTime: values.jeunHaeJilTime.trim(),
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
                  }}
                  onError={(error) => Alert.alert("", error.message)}
                >
                  {(updateUserProfile, { loading }) => (
                    <Button
                      raised
                      primary
                      disabled={!isValid || loading}
                      loading={loading}
                      onPress={() => {
                        updateUserProfile();
                        this.props.navigation.goBack();
                      }}
                      title="Save"
                    />
                  )}
                </Mutation>
              </React.Fragment>
            )}
          </Formik>
        </KeyboardAwareScrollView>
      </>
    );
  }
}

export default CreateReportScreen;

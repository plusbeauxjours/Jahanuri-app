import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { Mutation, MutationFunction } from "react-apollo";
import { AsyncStorage, KeyboardAvoidingView, Platform } from "react-native";
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from "react-navigation";
import FormikInput from "../../components/Formik/FormikInput";
import { ImageBackground } from "react-native";
import styled from "styled-components";
import { LOGIN, SIGNUP } from "./AuthScreenQueries";
import {
  Login,
  LoginVariables,
  Signup,
  SignupVariables,
} from "../../types/api";

interface IProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const Button = styled.Button`
  margin-top: 10px;
  width: 90%;
`;

const View = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  handle: "",
  password: "",
  confirmPassword: "",
};
const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("이름은 필수 입력 사항 입니다."),
  lastName: Yup.string().required("성은 필수 입력 사항 입니다."),
  email: Yup.string()
    .email("Invalid email")
    .required("이메일은 필수 입력 사항 입니다."),
  handle: Yup.string()
    .matches(
      /^[A-Za-z0-9_]{1,15}$/,
      "유저명은 숫자와 영문 알파벳만 가능하고, 15자 이내입니다."
    )
    .required("유저명은 필수 입력 사항입니다."),
  password: Yup.string()
    .min(6, "비밀번호는 6자 이상입니다.")
    .required("비밀번호는 필수 입력 사항 입니다."),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password" ? "password" : null)], "Passwords do not match")
    .required("비밀번호가 맞지 않습니다."),
});

export default class SignupForm extends React.Component<IProps> {
  public tokenAuth: MutationFunction;
  public createUser: MutationFunction;
  static navigationOptions = {
    title: "Sign Up",
  };

  public handleSignupComplete = async (data) => {
    await AsyncStorage.setItem("jwt", data.tokenAuth.token);
    this.props.navigation.navigate("Main");
  };

  public renderForm = ({
    values,
    setFieldValue,
    setFieldTouched,
    touched,
    errors,
    isValid,
  }) => (
    <ImageBackground
      style={{ width: "100%", height: "100%" }}
      source={require("../../images/MainImage.jpg")}
      resizeMode="stretch"
    >
      <View>
        <FormikInput
          label="이름"
          value={values.firstName}
          onChange={setFieldValue}
          onTouch={setFieldTouched}
          name="firstName"
          error={touched.firstName && errors.firstName}
        />
        <FormikInput
          label="성"
          value={values.lastName}
          onChange={setFieldValue}
          onTouch={setFieldTouched}
          name="lastName"
          error={touched.lastName && errors.lastName}
        />
        <FormikInput
          label="이메일"
          autoCapitalize="none"
          keyboardType="email-address"
          value={values.email}
          onChange={setFieldValue}
          onTouch={setFieldTouched}
          name="email"
          error={touched.email && errors.email}
        />
        <FormikInput
          label="유저명"
          autoCapitalize="none"
          value={values.handle}
          onChange={setFieldValue}
          onTouch={setFieldTouched}
          name="handle"
          error={touched.handle && errors.handle}
        />
        <FormikInput
          label="비밀번호"
          autoCapitalize="none"
          secureTextEntry
          value={values.password}
          onChange={setFieldValue}
          onTouch={setFieldTouched}
          name="password"
          error={touched.password && errors.password}
        />
        <FormikInput
          label="비밀번호 확인"
          autoCapitalize="none"
          secureTextEntry
          value={values.confirmPassword}
          onChange={setFieldValue}
          onTouch={setFieldTouched}
          name="confirmPassword"
          error={touched.confirmPassword && errors.confirmPassword}
        />
        <Mutation<Login, LoginVariables>
          mutation={LOGIN}
          variables={{
            username: values.handle,
            password: values.password,
          }}
          onCompleted={this.handleSignupComplete}
        >
          {(tokenAuth, loginResult) => (
            <Mutation<Signup, SignupVariables>
              mutation={SIGNUP}
              variables={{
                firstName: values.firstName,
                lastName: values.lastName,
                email: values.email,
                username: values.handle,
                password: values.password,
              }}
              onCompleted={() => {
                loginResult.client.resetStore();
                tokenAuth();
              }}
            >
              {(createUser, signupResult) => (
                <Button
                  raised
                  primary
                  disabled={
                    !isValid || loginResult.loading || signupResult.loading
                  }
                  loading={loginResult.loading || signupResult.loading}
                  onPress={() => {
                    createUser();
                  }}
                  style={{ marginTop: 10, width: "90%" }}
                  color="#FFFFFF"
                  title="계정 만들기"
                />
              )}
            </Mutation>
          )}
        </Mutation>
      </View>
    </ImageBackground>
  );

  public render() {
    return (
      <KeyboardAvoidingView
        enabled
        behavior={Platform.OS === "ios" ? "padding" : false}
      >
        <Formik
          initialValues={initialValues}
          onSubmit={() => {}}
          validationSchema={validationSchema}
        >
          {this.renderForm}
        </Formik>
      </KeyboardAvoidingView>
    );
  }
}

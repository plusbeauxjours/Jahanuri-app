import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { ImageBackground, KeyboardAvoidingView, Platform } from "react-native";
import { Mutation, MutationFunction } from "react-apollo";
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from "react-navigation";
import { AsyncStorage } from "react-native";
import FormikInput from "../../components/Formik/FormikInput";
import styled from "styled-components";
import Divider from "../../components/Divider";
import { LOGIN } from "./AuthScreenQueries";
import { Login, LoginVariables } from "../../types/api";

interface IProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const Button = styled.Button`
  margin-top: 10px;
  width: 90%;
  color: white;
`;
const WhiteSpace = styled.View`
  height: 80px;
`;
const View = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const initialValues = { username: "", password: "" };
const validationSchema = Yup.object().shape({
  username: Yup.string()
    .matches(
      /^[A-Za-z0-9_]{1,15}$/,
      "Username can only contain alphabets, digits and underscores and has to be between 1 to 15 characters"
    )
    .required("Username는 필수 입력 사항입니다."),
  password: Yup.string()
    .min(6, "Password는 6글자 이상이어야 합니다.")
    .required("Password는 필수 입력 사항입니다."),
});

export default class LoginForm extends React.Component<IProps> {
  public tokenAuth: MutationFunction;
  public handleLoginComplete = async ({ tokenAuth }) => {
    const { token } = tokenAuth;
    await AsyncStorage.setItem("jwt", token);
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
        <WhiteSpace />
        <WhiteSpace />
        <FormikInput
          label="Username"
          autoCapitalize="none"
          value={values.username}
          onChange={setFieldValue}
          onTouch={setFieldTouched}
          name="username"
          error={touched.username && errors.username}
        />
        <FormikInput
          label="Password"
          autoCapitalize="none"
          secureTextEntry
          value={values.password}
          onChange={setFieldValue}
          onTouch={setFieldTouched}
          name="password"
          error={touched.password && errors.password}
        />
        <WhiteSpace />
        <Mutation<Login, LoginVariables>
          mutation={LOGIN}
          variables={{ username: values.username, password: values.password }}
          onCompleted={this.handleLoginComplete}
        >
          {(tokenAuth, { loading, client }) => (
            <React.Fragment>
              <Button
                raised
                primary
                disabled={!isValid || loading}
                loading={loading}
                onPress={() => {
                  client.resetStore();
                  tokenAuth();
                }}
                color="#FFFFFF"
                title="로그인"
              />
              <Divider text="OR" />
              <Button
                disabled={loading}
                onPress={() => {
                  this.props.navigation.navigate("SignUp");
                }}
                color="#FFFFFF"
                title="계정 만들기"
              />
            </React.Fragment>
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
          validationSchema={validationSchema}
          onSubmit={() => {}}
        >
          {this.renderForm}
        </Formik>
      </KeyboardAvoidingView>
    );
  }
}

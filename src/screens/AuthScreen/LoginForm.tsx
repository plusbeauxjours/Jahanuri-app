import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { Mutation } from "react-apollo";
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
import Toast from "react-native-root-toast";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { withNavigation } from "react-navigation";

const Button = styled.Button`
  margin-top: 10px;
  width: 90%;
  color: white;
  background-color: null;
  border-color: null;
`;
const SmallWhiteSpace = styled.View`
  height: 20px;
`;
const WhiteSpace = styled.View`
  height: 40px;
`;
const HugeWhiteSpace = styled.View`
  height: 240px;
`;
const View = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const initialValues = { username: "", password: "" };
const validationSchema = Yup.object().shape({
  username: Yup.string()
    .matches(
      /^[A-Za-z0-9_]{1,15}$/,
      "아이디는 숫자와 영문 알파벳만 가능하고, 15자 이내입니다."
    )
    .required("아이디는 필수 입력 사항입니다."),
  password: Yup.string()
    .min(6, "비밀번호는 6자 이상입니다.")
    .required("비밀번호는 필수 입력 사항 입니다."),
});

interface IProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
  setPage: (page: string) => void;
}

const LoginForm: React.FC<IProps> = ({ navigation, setPage }) => {
  const onCompleteLogin = async ({ tokenAuth }) => {
    const { token } = tokenAuth;
    await AsyncStorage.setItem("jwt", token);
    navigation.navigate("Main");
  };
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
  return (
    <>
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
            <View>
              <HugeWhiteSpace />
              <FormikInput
                label="아이디"
                autoCapitalize="none"
                value={values.username}
                onChange={setFieldValue}
                onTouch={setFieldTouched}
                name="username"
                error={touched.username && errors.username}
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
              <WhiteSpace />
              <Mutation<Login, LoginVariables>
                mutation={LOGIN}
                variables={{
                  username: values.username,
                  password: values.password,
                }}
                onCompleted={onCompleteLogin}
                onError={(e) => toast("아이디와 비밀번호를 확인하세요")}
              >
                {(loginFn, { loading, client }) => (
                  <React.Fragment>
                    <Button
                      raised
                      primary
                      disabled={
                        !isValid ||
                        !values.username ||
                        !values.password ||
                        loading
                      }
                      loading={loading}
                      onPress={() => {
                        client.resetStore();
                        loginFn();
                      }}
                      color="#FFFFFF"
                      title="로그인"
                    />
                    <SmallWhiteSpace />
                    <Button
                      disabled={loading}
                      onPress={() => {
                        setPage("ACCOUNT_SIGNUP");
                      }}
                      color="#FFFFFF"
                      title="계정 만들기"
                    />
                    <WhiteSpace />
                    <Divider text="OR" />
                    <WhiteSpace />
                    <Button
                      disabled={loading}
                      onPress={() => {
                        setPage("LOGIN");
                      }}
                      color="#FFFFFF"
                      title="돌아가기"
                    />
                  </React.Fragment>
                )}
              </Mutation>
              <WhiteSpace />
            </View>
          )}
        </Formik>
      </KeyboardAwareScrollView>
    </>
  );
};

export default withNavigation(LoginForm);

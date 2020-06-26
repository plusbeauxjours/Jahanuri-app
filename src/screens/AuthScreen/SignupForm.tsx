import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { Mutation } from "react-apollo";
import { AsyncStorage, ActivityIndicator } from "react-native";
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from "react-navigation";
import FormikInput from "../../components/Formik/FormikInput";
import styled from "styled-components";
import { LOGIN, SIGNUP } from "./AuthScreenQueries";
import Toast from "react-native-root-toast";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Divider from "../../components/Divider";
import { withNavigation } from "react-navigation";
import Button from "../../components/Button";
import {
  Login,
  LoginVariables,
  Signup,
  SignupVariables,
} from "../../types/api";

const HugeWhiteSpace = styled.View`
  height: 60px;
`;
const View = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
const WhiteSpace = styled.View`
  height: 40px;
`;
const Text = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: 400;
`;
const GreyText = styled(Text)`
  color: #999;
`;
const TouchableBorder = styled.TouchableOpacity<ITheme>`
  width: 160px;
  height: 40px;
  border-radius: 5px;
  border-width: 0.5px;
  border-color: ${(props) => (props.disabled ? "#bbb" : "#fff")};
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const initialValues = {
  firstName: "",
  lastName: "",
  username: "",
  password: "",
  confirmPassword: "",
};
const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("이름은 필수 입력 사항 입니다."),
  lastName: Yup.string().required("성은 필수 입력 사항 입니다."),
  username: Yup.string()
    .matches(
      /^[A-Za-z0-9_]{4,15}$/,
      "아이디는 숫자와 영문 알파벳만 가능하고, 4자 이상, 15자 이내입니다."
    )
    .required("아이디는 필수 입력 사항입니다."),
  password: Yup.string()
    .min(6, "비밀번호는 6자 이상입니다.")
    .required("비밀번호는 필수 입력 사항 입니다."),
  confirmPassword: Yup.string()
    .oneOf(
      [Yup.ref("password" ? "password" : null)],
      "비밀번호가 맞지 않습니다."
    )
    .required("비밀번호가 맞지 않습니다."),
});

interface IProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
  setPage: (page: string) => void;
}
interface ITheme {
  disabled?: boolean;
}

const SignupForm: React.FC<IProps> = ({ navigation, setPage }) => {
  const onCompleteLogin = async (data) => {
    await AsyncStorage.setItem("jwt", data.tokenAuth.token);
    navigation.navigate("Main");
    toast("환영합니다.");
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
            <View>
              <HugeWhiteSpace />
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
                  username: values.username,
                  password: values.password,
                }}
                onCompleted={onCompleteLogin}
              >
                {(loginFn, { loading: loginLoading, client }) => (
                  <Mutation<Signup, SignupVariables>
                    mutation={SIGNUP}
                    variables={{
                      firstName: values.firstName,
                      lastName: values.lastName,
                      username: values.username,
                      password: values.password,
                    }}
                    onCompleted={() => {
                      client.resetStore();
                      loginFn();
                    }}
                    onError={(e) => {
                      toast("다른 아이디을 사용하세요.");
                    }}
                  >
                    {(signupFn, { loading: signupLoading }) => (
                      <>
                        <WhiteSpace />
                        {signupLoading ? (
                          <TouchableBorder disabled={true}>
                            <ActivityIndicator color={"#fff"} />
                          </TouchableBorder>
                        ) : (
                          <TouchableBorder
                            disabled={
                              !isValid ||
                              loginLoading ||
                              signupLoading ||
                              !values.firstName ||
                              !values.lastName ||
                              !values.username ||
                              !values.password ||
                              !values.confirmPassword
                            }
                            onPress={() => signupFn()}
                          >
                            {!isValid ||
                            loginLoading ||
                            signupLoading ||
                            !values.firstName ||
                            !values.lastName ||
                            !values.username ||
                            !values.password ||
                            !values.confirmPassword ? (
                              <GreyText>계정 만들기</GreyText>
                            ) : (
                              <Text>계정 만들기</Text>
                            )}
                          </TouchableBorder>
                        )}
                        <WhiteSpace />
                        <Divider text="OR" />
                        <WhiteSpace />
                        <Button
                          disabled={signupLoading}
                          onPress={() => {
                            setPage("ACCOUNT_LOGIN");
                          }}
                          color="white"
                          text="돌아가기"
                        />
                      </>
                    )}
                  </Mutation>
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

export default withNavigation(SignupForm);

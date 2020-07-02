import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { Mutation } from "react-apollo";
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from "react-navigation";
import { ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import FormikInput from "../../components/Formik/FormikInput";
import styled from "styled-components";
import Divider from "../../components/Divider";
import { LOGIN } from "./AuthScreenQueries";
import { Login, LoginVariables } from "../../types/api";
import Toast from "react-native-root-toast";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { withNavigation } from "react-navigation";
import Button from "../../components/Button";

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
const Text = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: 400;
`;
const GreyText = styled(Text)`
  color: #bbb;
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
interface ITheme {
  disabled?: boolean;
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
                    {loading ? (
                      <TouchableBorder disabled={true}>
                        <ActivityIndicator color={"#fff"} />
                      </TouchableBorder>
                    ) : (
                      <TouchableBorder
                        disabled={
                          !isValid ||
                          !values.username ||
                          !values.password ||
                          loading
                        }
                        onPress={() => {
                          client.resetStore();
                          loginFn();
                        }}
                      >
                        {!isValid ||
                        !values.username ||
                        !values.password ||
                        loading ? (
                          <GreyText>로그인</GreyText>
                        ) : (
                          <Text>로그인</Text>
                        )}
                      </TouchableBorder>
                    )}

                    <SmallWhiteSpace />
                    <TouchableBorder
                      disabled={loading}
                      onPress={() => setPage("ACCOUNT_SIGNUP")}
                    >
                      <Text>계정 만들기</Text>
                    </TouchableBorder>
                    <WhiteSpace />
                    <Divider text="OR" />
                    <WhiteSpace />
                    <Button
                      disabled={loading}
                      onPress={() => {
                        setPage("LOGIN");
                      }}
                      color="white"
                      text="돌아가기"
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

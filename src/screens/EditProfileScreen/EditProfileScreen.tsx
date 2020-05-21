import React from "react";
import { Alert } from "react-native";
import { ApolloConsumer, Mutation } from "react-apollo";
import gql from "graphql-tag";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Formik } from "formik";
import * as Yup from "yup";
import { ReactNativeFile } from "apollo-upload-client";

import FormikInput from "../../components/Formik/FormikInput";
import { UPDATE_USER } from "./EditProfileScreenQueries";
import { ME } from "../MyProfileScreen/MyProfileScreenQueries";
import styled from "styled-components";
import { NavigationStackScreenProps } from "react-navigation-stack";
import { UpdateUser } from "src/types/api";
import { UpdateUserVariables } from "../../types/api";
import MenuCustomHeader from "../../components/MenuCustomHeader";
import Toast from "react-native-root-toast";

const Button = styled.Button`
  margin-top: 10px;
  width: 90%;
`;

interface IProps extends NavigationStackScreenProps {}

class EditProfileScreen extends React.Component<IProps> {
  static navigationOptions = () => ({
    title: "Edit profile",
  });

  public onEditSportsPress = () => {
    this.props.navigation.navigate("EditSportsScreen");
  };
  public toast = (message: string) => {
    Toast.show(message, {
      duration: Toast.durations.SHORT,
      position: Toast.positions.CENTER,
      shadow: true,
      animation: true,
      hideOnPress: true,
      delay: 0,
    });
  };
  public updateCache = (cache, { data: { updateUser } }) => {
    const { me } = cache.readQuery({ query: ME });
    cache.writeQuery({
      query: ME,
      data: {
        me: {
          ...me,
          user: {
            ...me.user,
            firstName: updateUser.user.firstName,
            lastName: updateUser.user.lastName,
            userImg: updateUser.user.userImg,
          },
        },
      },
    });
  };

  public validationSchema = Yup.object().shape({
    firstName: Yup.string().required("이름은 필수 사항 입니다."),
    lastName: Yup.string().required("성은 필수 사항 입니다."),
    password: Yup.lazy((value) =>
      !value ? Yup.string() : Yup.string().min(6, "비밀번호는 6자 이상입니다.")
    ),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref("password")],
      "비밀번호가 맞지 않습니다."
    ),
  });

  render() {
    return (
      <ApolloConsumer>
        {(client) => {
          const { me } = client.readQuery({
            query: gql`
              {
                me {
                  user {
                    uuid
                    username
                    firstName
                    lastName
                    userImg
                    hasKakaoAccount
                  }
                }
              }
            `,
          });

          return (
            <>
              <MenuCustomHeader title={"프로필 수정"} />
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
                  initialValues={{
                    firstName: me.user.firstName,
                    lastName: me.user.lastName,
                    password: "",
                    confirmPassword: "",
                    userImg: me.user.userImg && {
                      uri: me.user.userImg,
                    },
                  }}
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
                      {!me.user.hasKakaoAccount && (
                        <>
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
                            error={
                              touched.confirmPassword && errors.confirmPassword
                            }
                          />
                        </>
                      )}
                      <Mutation<UpdateUser, UpdateUserVariables>
                        mutation={UPDATE_USER}
                        variables={{
                          firstName: values.firstName.trim(),
                          lastName: values.lastName.trim(),
                          password: values.password,
                          userImg:
                            me.user.userImg === values.userImg
                              ? null
                              : new ReactNativeFile(values.userImg),
                        }}
                        update={this.updateCache}
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
                              this.toast("프로필이 변경되었습니다.");
                              this.props.navigation.navigate("MyProfileScreen");
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
        }}
      </ApolloConsumer>
    );
  }
}

export default EditProfileScreen;

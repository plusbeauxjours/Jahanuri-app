import React from "react";
import styled from "styled-components";

import Divider from "../../components/Divider";
import FormikInput from "../../components/Formik/FormikInput";
import dimensions from "../../constants/dimensions";
import { useQuery } from "react-apollo-hooks";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Formik } from "formik";
import { GET_APPLICATION } from "./ApplicationScreenQueries";
import { GetApplication } from "../../types/api";
import { ActivityIndicator } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import MenuCustomHeader from "../../components/MenuCustomHeader";

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Box = styled.View`
  width: 100%;
  padding: 0 15px;
`;
const Line = styled.View`
  width: ${dimensions.width - 30};
  flex-direction: row;
  border-bottom-width: 1px;
  opacity: 0.4;
  margin: 20px;
`;
const View = styled.View`
  width: 90%;
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const Text = styled.Text`
  font-weight: 100;
`;
const SmallWhiteSpace = styled.View`
  height: 10px;
`;
const WhiteSpace = styled.View`
  height: 30px;
`;
const Date = styled.Text`
  width: ${dimensions.width - 40};
  font-size: 24px;
  color: #000;
  text-align: center;
  margin: 20px 0;
  padding: 10px;
  border: 1px solid #999;
  color: #999;
  border-radius: 5px;
  background-color: #fff;
`;

const ApplicationDetailScreen: React.FC = () => {
  const {
    data: { getApplication: { application = null } = {} } = {},
    loading: getApplicationLoading,
  } = useQuery<GetApplication>(GET_APPLICATION);
  if (getApplicationLoading) {
    return (
      <Container>
        <ActivityIndicator />
      </Container>
    );
  } else {
    return (
      <>
        <MenuCustomHeader title={"신청서"} subTitle={"(제출 완료)"} />
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
            {({ setFieldValue, setFieldTouched }) => (
              <>
                <SmallWhiteSpace />
                <Divider text={"생년월일"} color={"dark"} />
                <Date>
                  {application.birthDate
                    ? application.birthDate.substr(0, 4) +
                      "년 " +
                      application.birthDate.substr(5, 2) +
                      "월 " +
                      application.birthDate.substr(8, 2) +
                      "일"
                    : "탭하여 날짜를 선택하세요."}
                </Date>
                <Divider text={"성별"} color={"dark"} />
                <Box>
                  {application.gender === "GENDER_MALE" ? (
                    <FontAwesome
                      name="check-square-o"
                      color={"#999"}
                      size={24}
                    />
                  ) : (
                    <FontAwesome name="square-o" color={"#999"} size={24} />
                  )}
                  {application.gender === "GENDER_FEMALE" ? (
                    <FontAwesome
                      name="check-square-o"
                      color={"#999"}
                      size={24}
                    />
                  ) : (
                    <FontAwesome name="square-o" color={"#999"} size={24} />
                  )}
                </Box>
                <Line />
                <FormikInput
                  editable={false}
                  label="사는곳"
                  value={application.address}
                  onChange={setFieldValue}
                  onTouch={setFieldTouched}
                  name="address"
                  placeholder="키트 발송을 위해 정확한 주소를 입력해주세요."
                />
                <FormikInput
                  editable={false}
                  label="직업"
                  value={application.job}
                  onChange={setFieldValue}
                  onTouch={setFieldTouched}
                  name="job"
                  placeholder="직업"
                />
                <FormikInput
                  editable={false}
                  label="연락처(휴대폰)"
                  value={application.phoneNumber}
                  onChange={setFieldValue}
                  onTouch={setFieldTouched}
                  name="phoneNumber"
                  placeholder="연락처(휴대폰)"
                />
                <FormikInput
                  editable={false}
                  label="이메일"
                  value={application.emailAddress}
                  onChange={setFieldValue}
                  onTouch={setFieldTouched}
                  name="emailAddress"
                  placeholder="이메일"
                />

                <Divider
                  text={"'직관의 몸공부' 프로그램을 알게 된 계기"}
                  color={"dark"}
                />
                <Box>
                  {application.getApproach.includes("APPROACH_A") ? (
                    <FontAwesome
                      name="check-square-o"
                      color={"#999"}
                      size={24}
                    />
                  ) : (
                    <FontAwesome name="square-o" color={"#999"} size={24} />
                  )}
                  {application.getApproach.includes("APPROACH_B") ? (
                    <FontAwesome
                      name="check-square-o"
                      color={"#999"}
                      size={24}
                    />
                  ) : (
                    <FontAwesome name="square-o" color={"#999"} size={24} />
                  )}
                  {application.getApproach.includes("APPROACH_C") ? (
                    <FontAwesome
                      name="check-square-o"
                      color={"#999"}
                      size={24}
                    />
                  ) : (
                    <FontAwesome name="square-o" color={"#999"} size={24} />
                  )}
                  {application.getApproach.includes("APPROACH_D") ? (
                    <FontAwesome
                      name="check-square-o"
                      color={"#999"}
                      size={24}
                    />
                  ) : (
                    <FontAwesome name="square-o" color={"#999"} size={24} />
                  )}
                  {application.getApproach.includes("APPROACH_E") ? (
                    <FontAwesome
                      name="check-square-o"
                      color={"#999"}
                      size={24}
                    />
                  ) : (
                    <FontAwesome name="square-o" color={"#999"} size={24} />
                  )}
                  {application.getApproach.includes("APPROACH_F") ? (
                    <FontAwesome
                      name="check-square-o"
                      color={"#999"}
                      size={24}
                    />
                  ) : (
                    <FontAwesome name="square-o" color={"#999"} size={24} />
                  )}

                  {application.approachEtc.length !== 0 && (
                    <FormikInput
                      label="기타"
                      value={application.approachEtc}
                      onChange={setFieldValue}
                      onTouch={setFieldTouched}
                      name="approachEtc"
                      placeholder="기타"
                    />
                  )}
                </Box>
                <WhiteSpace />
              </>
            )}
          </Formik>
        </KeyboardAwareScrollView>
      </>
    );
  }
};
export default ApplicationDetailScreen;

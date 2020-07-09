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
import MenuCustomHeader from "../../components/MenuCustomHeader";
import CheckBoxRow from "../../components/CheckBoxRow";
import { Linking } from "react-native";

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
const View = styled.View`
  width: 90%;
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const Text = styled.Text`
  font-weight: 100;
  line-height: 20px;
`;
const Touchable = styled.TouchableOpacity``;
const Link = styled(Text)`
  font-weight: 400;
  color: #8b00ff;
`;

const ApplicationDetailScreen: React.FC = () => {
  const {
    data: { getApplication: { application = null } = {} } = {},
    loading: getApplicationLoading,
  } = useQuery<GetApplication>(GET_APPLICATION);
  const onPress = (urls: string) => {
    Linking.canOpenURL(urls)
      .then((supported) => {
        if (supported) {
          return Linking.openURL(urls);
        } else {
          return null;
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };
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
                    <CheckBoxRow checked={true} text={"남성"} />
                  ) : (
                    <CheckBoxRow text={"남성"} />
                  )}
                  {application.gender === "GENDER_FEMALE" ? (
                    <CheckBoxRow checked={true} text={"여성"} />
                  ) : (
                    <CheckBoxRow text={"여성"} />
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
                    <CheckBoxRow checked={true} text={"지인 소개"} />
                  ) : (
                    <CheckBoxRow text={"지인 소개"} />
                  )}
                  {application.getApproach.includes("APPROACH_B") ? (
                    <CheckBoxRow checked={true} text={"카페, 블로그"} />
                  ) : (
                    <CheckBoxRow text={"카페, 블로그"} />
                  )}
                  {application.getApproach.includes("APPROACH_C") ? (
                    <CheckBoxRow checked={true} text={"페이스북, 트위터"} />
                  ) : (
                    <CheckBoxRow text={"페이스북, 트위터"} />
                  )}
                  {application.getApproach.includes("APPROACH_D") ? (
                    <CheckBoxRow checked={true} text={"책 <치유본능>"} />
                  ) : (
                    <CheckBoxRow text={"책 <치유본능>"} />
                  )}
                  {application.getApproach.includes("APPROACH_E") ? (
                    <CheckBoxRow checked={true} text={"책 <짠맛의 힘>"} />
                  ) : (
                    <CheckBoxRow text={"책 <짠맛의 힘>"} />
                  )}
                  {application.getApproach.includes("APPROACH_F") ? (
                    <CheckBoxRow
                      checked={true}
                      text={"홈페이지(자하누리, 직관의 몸공부)"}
                    />
                  ) : (
                    <CheckBoxRow text={"홈페이지(자하누리, 직관의 몸공부)"} />
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
                <Divider text={"유의사항"} color={"dark"} />
                <View>
                  <Box>
                    <Text>1) 5분전까지 강의실에 입장해주세요.</Text>
                    <SmallWhiteSpace />
                    <Text>2) 준비물: 필기구, 운동 가능한 편한 복장</Text>
                    <SmallWhiteSpace />
                    <Text>
                      3) 책 (치유본능), (짠맛의 힘)을 읽고 참여하시면 몸공부에
                      큰 도움이 됩니다.
                    </Text>
                    <SmallWhiteSpace />
                    <Text>
                      4) 자하누리 카페 가입: 강의자료, 운동 동영상 제공, 과제
                      확인
                    </Text>
                    <Touchable
                      onPress={() => onPress("https://cafe.naver.com/jahanuri")}
                    >
                      <Link>https://cafe.naver.com/jahanuri</Link>
                    </Touchable>
                    <SmallWhiteSpace />
                    <Text>
                      5) 자하누리 카카오톡 플러스친구 추가: 문의, 공지 등을 위해
                      꼭 친구추가를 해주세요.
                    </Text>
                    <Touchable
                      onPress={() => onPress("http://pf.kakao.com/_ucnLV")}
                    >
                      <Link>http://pf.kakao.com/_ucnLV</Link>
                    </Touchable>
                    <SmallWhiteSpace />
                    <Text>
                      6) 수강료: 첫 온라인 특가 45만원 (신청서 제출 후 3일내
                      결제하셔야 신청이 완료됩니다.)
                    </Text>
                    <SmallWhiteSpace />
                    <Text>
                      7) 환불규정: 강의 시작 후에는 환불 불가. 이월 가능합니다.
                      - 2회 이상 결석시 수료증이 수여되지 않습니다.
                    </Text>
                  </Box>
                </View>
                <WhiteSpace />
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

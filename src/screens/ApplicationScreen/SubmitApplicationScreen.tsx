import React, { useState } from "react";
import styled from "styled-components";
import { Portal, Dialog, Paragraph } from "react-native-paper";

import MenuCustomHeader from "../../components/MenuCustomHeader";
import { CheckBox } from "react-native-elements";
import Divider from "../../components/Divider";
import FormikInput from "../../components/Formik/FormikInput";
import dimensions from "../../constants/dimensions";
import Toast from "react-native-root-toast";
import { useMutation } from "react-apollo-hooks";
import * as Yup from "yup";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Formik } from "formik";
import { SUBMIT_APPLICATION } from "./ApplicationScreenQueries";
import {
  SubmitApplication,
  SubmitApplicationVariables,
  Me,
} from "../../types/api";
import { Linking } from "react-native";
import DatePickerModal from "react-native-modal-datetime-picker";
import Moment from "moment";
import { ME } from "../MyProfileScreen/MyProfileScreenQueries";
import Button from "../../components/Button";

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
  line-height: 20px;
`;
const Link = styled(Text)`
  font-weight: 400;
  color: #8b00ff;
`;
const ButtonContainer = styled.View`
  justify-content: center;
  align-items: center;
  height: 100px;
`;
const DialogButtonContainer = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  margin-right: 10px;
  margin-bottom: 10px;
`;
const SmallWhiteSpace = styled.View`
  height: 10px;
`;
const WhiteSpace = styled.View`
  height: 30px;
`;
const Touchable = styled.TouchableOpacity``;
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
const ButtonSpace = styled.View`
  width: 20px;
`;

const initialValues = {
  address: "",
  job: "",
  phoneNumber: "",
  emailAddress: "",
  approachEtc: "",
};

const SubmitApplicationScreen: React.FC = () => {
  const [isDatePickerModalOpen, setDatePickerModalOpen] = useState<boolean>(
    false
  );
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [birthDate, setBirthDate] = useState<any>(null);
  const [gender, setGender] = useState<string>("");
  const [approach, setApproach] = useState<any>([]);
  const [approachA, setApproachA] = useState<boolean>(false);
  const [approachB, setApproachB] = useState<boolean>(false);
  const [approachC, setApproachC] = useState<boolean>(false);
  const [approachD, setApproachD] = useState<boolean>(false);
  const [approachE, setApproachE] = useState<boolean>(false);
  const [approachF, setApproachF] = useState<boolean>(false);
  const [confirm, setConfirm] = useState<boolean>(false);
  const [
    submitApplicationFn,
    { loading: submitApplicationLoading },
  ] = useMutation<SubmitApplication, SubmitApplicationVariables>(
    SUBMIT_APPLICATION,
    {
      update(cache) {
        try {
          const meData = cache.readQuery<Me>({
            query: ME,
          });
          if (meData) {
            meData.me.user.hasSubmittedApplication = true;
            cache.writeQuery({
              query: ME,
              data: meData,
            });
          }
        } catch (e) {
          console.log(e);
        }
      },
    }
  );
  const handleDateConfirm = (date) => {
    setDatePickerModalOpen(false);
    setBirthDate(Moment(date).format("YYYY-MM-DD"));
  };
  const hideDatePicker = () => {
    setDatePickerModalOpen(false);
  };
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
  const submitConfirm = (values: any) => {
    submitApplicationFn({
      variables: {
        gender,
        birthDate: Moment(birthDate),
        address: values.address,
        job: values.job,
        phoneNumber: values.phoneNumber,
        emailAddress: values.emailAddress,
        approach,
        approachEtc: values.approachEtc,
        confirm,
      },
    });
    setModalOpen(false);
    toast("신청서를 제출하였습니다.");
  };
  const toggleItems = (array: any, action: any, variables: string) => {
    if (array.includes(variables)) {
      action(array.filter((i) => i !== variables));
    } else {
      action((i) => [...i, variables]);
    }
  };
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const validationSchema = Yup.object().shape({
    address: Yup.string().required("필수 입력 사항입니다."),
    job: Yup.string().required("필수 입력 사항입니다."),
    phoneNumber: Yup.string()
      .matches(phoneRegExp, "숫자만 입력해주세요.")
      .required("필수 입력 사항입니다."),
    emailAddress: Yup.string()
      .email("이메일 주소를 입력하세요.")
      .required("필수 입력 사항 입니다."),
  });
  return (
    <>
      <MenuCustomHeader title={"신청서"} />
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
            submitForm,
          }) => (
            <>
              <Portal>
                <Dialog
                  visible={modalOpen}
                  onDismiss={() => setModalOpen(false)}
                >
                  <Dialog.Title>알림</Dialog.Title>
                  <Dialog.Content>
                    <Paragraph>
                      신청서는 제출한 후에는 수정을 할 수 없습니다.
                    </Paragraph>
                    <Paragraph>제출하시겠습니까?</Paragraph>
                  </Dialog.Content>
                  <Dialog.Actions>
                    <DialogButtonContainer>
                      <Button
                        disabled={submitApplicationLoading}
                        text="취소"
                        onPress={() => setModalOpen(false)}
                      />
                      <ButtonSpace />
                      <Button
                        disabled={submitApplicationLoading}
                        text="제출"
                        onPress={() => submitConfirm(values)}
                      />
                    </DialogButtonContainer>
                  </Dialog.Actions>
                </Dialog>
              </Portal>
              <SmallWhiteSpace />
              <Divider text={"생년월일"} color={"dark"} />
              <DatePickerModal
                headerTextIOS={"날짜를 선택하세요."}
                cancelTextIOS={"취소"}
                confirmTextIOS={"확인"}
                isVisible={isDatePickerModalOpen}
                mode="date"
                locale="kr_KR"
                onConfirm={handleDateConfirm}
                onCancel={hideDatePicker}
                onChange={handleDateConfirm}
                display="default"
              />
              <Touchable onPress={() => setDatePickerModalOpen(true)}>
                <Date>
                  {birthDate
                    ? birthDate.substr(0, 4) +
                      "년 " +
                      birthDate.substr(5, 2) +
                      "월 " +
                      birthDate.substr(8, 2) +
                      "일"
                    : "탭하여 날짜를 선택하세요."}
                </Date>
              </Touchable>
              <Divider text={"성별"} color={"dark"} />
              <Box>
                <CheckBox
                  size={24}
                  checked={gender === "GENDER_MALE"}
                  checkedColor={"#8b00ff"}
                  onPress={() => {
                    setGender("GENDER_MALE");
                  }}
                  title={"남성"}
                  textStyle={{ fontSize: 16, fontWeight: "200" }}
                  containerStyle={{ backgroundColor: null }}
                />
                <CheckBox
                  size={24}
                  checked={gender === "GENDER_FEMALE"}
                  checkedColor={"#8b00ff"}
                  onPress={() => {
                    setGender("GENDER_FEMALE");
                  }}
                  title={"여성"}
                  textStyle={{ fontSize: 16, fontWeight: "200" }}
                  containerStyle={{ backgroundColor: null }}
                />
              </Box>
              <Line />
              <FormikInput
                label="사는곳"
                value={values.address}
                onChange={setFieldValue}
                onTouch={setFieldTouched}
                name="address"
                error={touched.address && errors.address}
                placeholder="키트 발송을 위해 정확한 주소를 입력해주세요."
              />
              <FormikInput
                label="직업"
                value={values.job}
                onChange={setFieldValue}
                onTouch={setFieldTouched}
                name="job"
                error={touched.job && errors.job}
                placeholder="직업"
              />
              <FormikInput
                label="연락처(휴대폰)"
                keyboardType="phone-pad"
                value={values.phoneNumber}
                onChange={setFieldValue}
                onTouch={setFieldTouched}
                name="phoneNumber"
                error={touched.phoneNumber && errors.phoneNumber}
                placeholder="연락처(휴대폰)"
              />
              <FormikInput
                label="이메일"
                keyboardType="email-address"
                value={values.emailAddress}
                onChange={setFieldValue}
                onTouch={setFieldTouched}
                name="emailAddress"
                error={touched.emailAddress && errors.emailAddress}
                placeholder="이메일"
              />

              <Divider
                text={"'직관의 몸공부' 프로그램을 알게 된 계기 (중복가능)"}
                color={"dark"}
              />
              <Box>
                <CheckBox
                  size={24}
                  checked={approachA}
                  checkedColor={"#8b00ff"}
                  onPress={() => {
                    toggleItems(approach, setApproach, "APPROACH_A");
                    setApproachA((approachA) => !approachA);
                  }}
                  title={"지인 소개"}
                  textStyle={{ fontSize: 16, fontWeight: "200" }}
                  containerStyle={{ backgroundColor: null }}
                />
                <CheckBox
                  size={24}
                  checked={approachB}
                  checkedColor={"#8b00ff"}
                  onPress={() => {
                    toggleItems(approach, setApproach, "APPROACH_B");
                    setApproachB((approachB) => !approachB);
                  }}
                  title={"카페, 블로그"}
                  textStyle={{ fontSize: 16, fontWeight: "200" }}
                  containerStyle={{ backgroundColor: null }}
                />
                <CheckBox
                  size={24}
                  checked={approachC}
                  checkedColor={"#8b00ff"}
                  onPress={() => {
                    toggleItems(approach, setApproach, "APPROACH_C");
                    setApproachC((approachC) => !approachC);
                  }}
                  title={"페이스북, 트위터"}
                  textStyle={{ fontSize: 16, fontWeight: "200" }}
                  containerStyle={{ backgroundColor: null }}
                />
                <CheckBox
                  size={24}
                  checked={approachD}
                  checkedColor={"#8b00ff"}
                  onPress={() => {
                    toggleItems(approach, setApproach, "APPROACH_D");
                    setApproachD((approachD) => !approachD);
                  }}
                  title={"책 <치유본능>"}
                  textStyle={{ fontSize: 16, fontWeight: "200" }}
                  containerStyle={{ backgroundColor: null }}
                />
                <CheckBox
                  size={24}
                  checked={approachE}
                  checkedColor={"#8b00ff"}
                  onPress={() => {
                    toggleItems(approach, setApproach, "APPROACH_E");
                    setApproachE((approachE) => !approachE);
                  }}
                  title={"책 <짠맛의 힘>"}
                  textStyle={{ fontSize: 16, fontWeight: "200" }}
                  containerStyle={{ backgroundColor: null }}
                />
                <CheckBox
                  size={24}
                  checked={approachF}
                  checkedColor={"#8b00ff"}
                  onPress={() => {
                    toggleItems(approach, setApproach, "APPROACH_F");
                    setApproachF((approachF) => !approachF);
                  }}
                  title={"홈페이지(자하누리, 직관의 몸공부)"}
                  textStyle={{ fontSize: 16, fontWeight: "200" }}
                  containerStyle={{ backgroundColor: null }}
                />
                <FormikInput
                  label="기타"
                  value={values.approachEtc}
                  onChange={setFieldValue}
                  onTouch={setFieldTouched}
                  name="approachEtc"
                  placeholder="기타"
                />
              </Box>
              <Divider text={"유의사항"} color={"dark"} />
              <View>
                <Box>
                  <Text>
                    1) 프로그램 시작 시간은 오전 11시 입니다. 5분전까지 강의실에
                    입장해주세요.
                  </Text>
                  <SmallWhiteSpace />
                  <Text>2) 준비물: 필기구, 운동 가능한 편한 복장</Text>
                  <SmallWhiteSpace />
                  <Text>
                    3) 책 (치유본능)을 프로그램 기간에 읽으시면 몸공부에 큰
                    도움이 됩니다.
                  </Text>
                  <SmallWhiteSpace />
                  <Text>
                    4) 자하누리 카페 가입: 강의자료, 운동 동영상 제공, 과제 확인
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
                    6) 수강료: 첫 온라인 특가 38만원 (신청서 제출 후 3일내
                    결제하셔야 신청이 완료됩니다.)
                  </Text>
                  <SmallWhiteSpace />
                  <Text>
                    7) 환불규정: 강의 시작 후에는 환불 불가. 이월 가능합니다. -
                    2회 이상 결석시 수료증이 수여되지 않습니다.
                  </Text>
                </Box>
              </View>
              <WhiteSpace />
              <Box>
                <CheckBox
                  size={24}
                  checked={confirm}
                  checkedColor={"#8b00ff"}
                  onPress={() => {
                    setConfirm((confirm) => !confirm);
                  }}
                  title={
                    "위 사항을 모두 확인하고, <직관의 몸공부> 2주 프로그램을 신청합니다."
                  }
                  textStyle={{ fontSize: 16, fontWeight: "200" }}
                  containerStyle={{ backgroundColor: null }}
                />
              </Box>
              <ButtonContainer>
                <Button
                  disabled={
                    !isValid ||
                    !gender ||
                    !values.address ||
                    !values.job ||
                    !values.phoneNumber ||
                    !values.emailAddress ||
                    !confirm
                  }
                  loading={submitApplicationLoading}
                  onPress={() => {
                    setModalOpen(true);
                  }}
                  text="제출"
                  border={true}
                />
              </ButtonContainer>
            </>
          )}
        </Formik>
      </KeyboardAwareScrollView>
    </>
  );
};
export default SubmitApplicationScreen;

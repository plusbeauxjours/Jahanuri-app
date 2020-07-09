import React from "react";
import styled from "styled-components";
import MenuCustomHeader from "../../components/MenuCustomHeader";

import { useQuery } from "react-apollo-hooks";

import { Formik } from "formik";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Divider from "../../components/Divider";
import FormikInput from "../../components/Formik/FormikInput";
import dimensions from "../../constants/dimensions";
import { ActivityIndicator } from "react-native";
import CheckBoxRow from "../../components/CheckBoxRow";
import { GET_HABIT_CHECK_LIST_DETAIL } from "./HabitCheckListDetailQueries";
import {
  GetHabitCheckListDetail,
  GetHabitCheckListDetailVariables,
} from "../../types/api";
import {
  NavigationScreenProp,
  NavigationState,
  NavigationParams,
} from "react-navigation";

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

interface IProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const HabitCheckListDetailScreen: React.FC<IProps> = ({ navigation }) => {
  const {
    data: { getHabitCheckListDetail: { habitCheckList = null } = {} } = {},
    loading: getApplicationLoading,
  } = useQuery<GetHabitCheckListDetail, GetHabitCheckListDetailVariables>(
    GET_HABIT_CHECK_LIST_DETAIL,
    {
      variables: {
        habitCheckListUuid: navigation?.state?.params?.habitCheckListUuid,
      },
    }
  );
  if (getApplicationLoading) {
    return (
      <Container>
        <ActivityIndicator />
      </Container>
    );
  } else {
    return (
      <>
        <MenuCustomHeader title={"나의 습관"} subTitle={"(제출 완료)"} />
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
                <WhiteSpace />
                <FormikInput
                  editable={false}
                  label="기상시간이 규칙적인가요?"
                  value={habitCheckList.wakeupTime}
                  onChange={setFieldValue}
                  onTouch={setFieldTouched}
                  name="wakeupTime"
                  placeholder="네, 7시 / 아니오, 9시~10시"
                />
                <FormikInput
                  editable={false}
                  label="하루 몇 시간 정도 주무시나요?"
                  value={habitCheckList.wakeupLong}
                  onChange={setFieldValue}
                  onTouch={setFieldTouched}
                  name="wakeupLong"
                  placeholder="7시간 / 4시간, 낮잠 총 1시간"
                />
                <Divider
                  text={"나는 아침에 일어났을 때... (중복 가능)"}
                  color={"dark"}
                />
                <Box>
                  {habitCheckList.getWakeupCondition.includes(
                    "WAKEUP_CONDITION_A"
                  ) ? (
                    <CheckBoxRow checked={true} text={"개운하다."} />
                  ) : (
                    <CheckBoxRow text={"개운하다."} />
                  )}
                  {habitCheckList.getWakeupCondition.includes(
                    "WAKEUP_CONDITION_B"
                  ) ? (
                    <CheckBoxRow checked={true} text={"머리가 아프다."} />
                  ) : (
                    <CheckBoxRow text={"머리가 아프다."} />
                  )}
                  {habitCheckList.getWakeupCondition.includes(
                    "WAKEUP_CONDITION_C"
                  ) ? (
                    <CheckBoxRow
                      checked={true}
                      text={"눈이 아프거나 잘 안 떠진다."}
                    />
                  ) : (
                    <CheckBoxRow text={"눈이 아프거나 잘 안 떠진다."} />
                  )}
                  {habitCheckList.getWakeupCondition.includes(
                    "WAKEUP_CONDITION_D"
                  ) ? (
                    <CheckBoxRow
                      checked={true}
                      text={"몸이 결리거나 뻐근하다."}
                    />
                  ) : (
                    <CheckBoxRow text={"몸이 결리거나 뻐근하다."} />
                  )}
                  {habitCheckList.getWakeupCondition.includes(
                    "WAKEUP_CONDITION_E"
                  ) ? (
                    <CheckBoxRow checked={true} text={"일어나기 힘들다."} />
                  ) : (
                    <CheckBoxRow text={"일어나기 힘들다."} />
                  )}
                  {habitCheckList.getWakeupCondition.includes(
                    "WAKEUP_CONDITION_F"
                  ) ? (
                    <CheckBoxRow checked={true} text={"멍하다."} />
                  ) : (
                    <CheckBoxRow text={"멍하다."} />
                  )}
                  {habitCheckList.getWakeupCondition.includes(
                    "WAKEUP_CONDITION_G"
                  ) ? (
                    <CheckBoxRow
                      checked={true}
                      text={"손이나 발 등이 저리다."}
                    />
                  ) : (
                    <CheckBoxRow text={"손이나 발 등이 저리다."} />
                  )}
                  {habitCheckList.getWakeupCondition.includes(
                    "WAKEUP_CONDITION_H"
                  ) ? (
                    <CheckBoxRow
                      checked={true}
                      text={"부어있다 (얼굴, 손, 발 등)"}
                    />
                  ) : (
                    <CheckBoxRow text={"부어있다 (얼굴, 손, 발 등)"} />
                  )}
                  {habitCheckList.wakeupConditionEtc.length !== 0 && (
                    <FormikInput
                      editable={false}
                      label="기타"
                      value={habitCheckList.wakeupConditionEtc}
                      onChange={setFieldValue}
                      onTouch={setFieldTouched}
                      name="wakeupConditionEtc"
                      placeholder="기타"
                    />
                  )}
                </Box>
                <Divider
                  text={"아침에 눈 떠서 가장 처음에 하는 일은? (중복 가능)"}
                  color={"dark"}
                />
                <Box>
                  {habitCheckList.getWakeupFirstThing.includes(
                    "WAKEUP_FIRST_THING_A"
                  ) ? (
                    <CheckBoxRow
                      checked={true}
                      text={"찬물 혹은 찬음료를 마신다."}
                    />
                  ) : (
                    <CheckBoxRow text={"찬물 혹은 찬음료를 마신다."} />
                  )}
                  {habitCheckList.getWakeupFirstThing.includes(
                    "WAKEUP_FIRST_THING_B"
                  ) ? (
                    <CheckBoxRow
                      checked={true}
                      text={"뜨거운 물 혹은 차를 마신다."}
                    />
                  ) : (
                    <CheckBoxRow text={"뜨거운 물 혹은 차를 마신다."} />
                  )}
                  {habitCheckList.getWakeupFirstThing.includes(
                    "WAKEUP_FIRST_THING_C"
                  ) ? (
                    <CheckBoxRow checked={true} text={"가벼운 스트레칭"} />
                  ) : (
                    <CheckBoxRow text={"가벼운 스트레칭"} />
                  )}
                  {habitCheckList.getWakeupFirstThing.includes(
                    "WAKEUP_FIRST_THING_D"
                  ) ? (
                    <CheckBoxRow checked={true} text={"양치, 세수, 샤워"} />
                  ) : (
                    <CheckBoxRow text={"양치, 세수, 샤워"} />
                  )}
                  {habitCheckList.getWakeupFirstThing.includes(
                    "WAKEUP_FIRST_THING_E"
                  ) ? (
                    <CheckBoxRow checked={true} text={"스마트폰"} />
                  ) : (
                    <CheckBoxRow text={"스마트폰"} />
                  )}
                  {habitCheckList.getWakeupFirstThing.includes(
                    "WAKEUP_FIRST_THING_F"
                  ) ? (
                    <CheckBoxRow checked={true} text={"잡지, 신문"} />
                  ) : (
                    <CheckBoxRow text={"잡지, 신문"} />
                  )}
                  {habitCheckList.wakeupFirstThingEtc.length !== 0 && (
                    <FormikInput
                      editable={false}
                      label="기타"
                      value={habitCheckList.wakeupFirstThingEtc}
                      onChange={setFieldValue}
                      onTouch={setFieldTouched}
                      name="wakeupFirstThingEtc"
                      placeholder="기타"
                    />
                  )}
                </Box>
                <Line />
                <FormikInput
                  editable={false}
                  label="하루에 몇 끼, 무엇을, 몇 시에 드시나요?"
                  value={habitCheckList.meal}
                  onChange={setFieldValue}
                  onTouch={setFieldTouched}
                  name="meal"
                  placeholder="삼시세끼 아침점심저녁 모두 밥과 반찬과 국을 챙겨먹음"
                />
                <Divider
                  text={"식사할 때, 나는 주로... (중복 가능)"}
                  color={"dark"}
                />
                <Box>
                  {habitCheckList.getMealDuring.includes("MEAL_DURING_A") ? (
                    <CheckBoxRow
                      checked={true}
                      text={"대화를 많이 하는 편이다."}
                    />
                  ) : (
                    <CheckBoxRow text={"대화를 많이 하는 편이다."} />
                  )}
                  {habitCheckList.getMealDuring.includes("MEAL_DURING_B") ? (
                    <CheckBoxRow
                      checked={true}
                      text={"먹는 것에 집중하는 편이다."}
                    />
                  ) : (
                    <CheckBoxRow text={"먹는 것에 집중하는 편이다."} />
                  )}
                  {habitCheckList.getMealDuring.includes("MEAL_DURING_C") ? (
                    <CheckBoxRow
                      checked={true}
                      text={"TV, 스마트폰 등을 보면서 먹는다."}
                    />
                  ) : (
                    <CheckBoxRow text={"TV, 스마트폰 등을 보면서 먹는다."} />
                  )}
                  {habitCheckList.getMealDuring.includes("MEAL_DURING_D") ? (
                    <CheckBoxRow checked={true} text={"꼭꼭 씹어서 먹는다."} />
                  ) : (
                    <CheckBoxRow text={"꼭꼭 씹어서 먹는다."} />
                  )}
                  {habitCheckList.getMealDuring.includes("MEAL_DURING_E") ? (
                    <CheckBoxRow checked={true} text={"급하게 먹는다."} />
                  ) : (
                    <CheckBoxRow text={"급하게 먹는다."} />
                  )}
                  {habitCheckList.getMealDuring.includes("MEAL_DURING_F") ? (
                    <CheckBoxRow checked={true} text={"많이 먹는다."} />
                  ) : (
                    <CheckBoxRow text={"많이 먹는다."} />
                  )}
                  {habitCheckList.getMealDuring.includes("MEAL_DURING_G") ? (
                    <CheckBoxRow
                      checked={true}
                      text={"입이 짧다 (많이 못 먹는다)"}
                    />
                  ) : (
                    <CheckBoxRow text={"입이 짧다 (많이 못 먹는다)"} />
                  )}
                  {habitCheckList.getMealDuring.includes("MEAL_DURING_H") ? (
                    <CheckBoxRow
                      checked={true}
                      text={"음식의 맛을 음미하면서 먹는다."}
                    />
                  ) : (
                    <CheckBoxRow text={"음식의 맛을 음미하면서 먹는다."} />
                  )}
                  {habitCheckList.getMealDuring.includes("MEAL_DURING_I") ? (
                    <CheckBoxRow
                      checked={true}
                      text={"끼니 때우듯 먹는 편이다."}
                    />
                  ) : (
                    <CheckBoxRow text={"끼니 때우듯 먹는 편이다."} />
                  )}
                  {habitCheckList.getMealDuring.includes("MEAL_DURING_J") ? (
                    <CheckBoxRow checked={true} text={"식욕이 별로 없다."} />
                  ) : (
                    <CheckBoxRow text={"식욕이 별로 없다."} />
                  )}
                  {habitCheckList.getMealDuring.includes("MEAL_DURING_K") ? (
                    <CheckBoxRow checked={true} text={"밥맛이 아주 좋다."} />
                  ) : (
                    <CheckBoxRow text={"밥맛이 아주 좋다."} />
                  )}
                  {habitCheckList.mealDuringEtc.length !== 0 && (
                    <FormikInput
                      editable={false}
                      label="기타"
                      value={habitCheckList.mealDuringEtc}
                      onChange={setFieldValue}
                      onTouch={setFieldTouched}
                      name="mealDuringEtc"
                      placeholder="기타"
                    />
                  )}
                </Box>
                <Divider
                  text={"식사 전후에 물을 많이 마시나요?"}
                  color={"dark"}
                />
                <Box>
                  {habitCheckList.mealWithWater === "DEGREE_A" ? (
                    <CheckBoxRow checked={true} text={"안마신다."} />
                  ) : (
                    <CheckBoxRow text={"안마신다."} />
                  )}
                  {habitCheckList.mealWithWater === "DEGREE_B" ? (
                    <CheckBoxRow checked={true} text={"거의 안마신다."} />
                  ) : (
                    <CheckBoxRow text={"거의 안마신다."} />
                  )}
                  {habitCheckList.mealWithWater === "DEGREE_C" ? (
                    <CheckBoxRow checked={true} text={"가끔 마신다."} />
                  ) : (
                    <CheckBoxRow text={"가끔 마신다."} />
                  )}
                  {habitCheckList.mealWithWater === "DEGREE_D" ? (
                    <CheckBoxRow checked={true} text={"조금 마신다."} />
                  ) : (
                    <CheckBoxRow text={"조금 마신다."} />
                  )}
                  {habitCheckList.mealWithWater === "DEGREE_E" ? (
                    <CheckBoxRow checked={true} text={"많이 마신다."} />
                  ) : (
                    <CheckBoxRow text={"많이 마신다."} />
                  )}
                </Box>
                <Divider
                  text={"식사 외에 간식, 군것질을 하시나요?"}
                  color={"dark"}
                />
                <Box>
                  {habitCheckList.mealWithSnack === "DEGREE_A" ? (
                    <CheckBoxRow checked={true} text={"안한다."} />
                  ) : (
                    <CheckBoxRow text={"안한다."} />
                  )}
                  {habitCheckList.mealWithSnack === "DEGREE_B" ? (
                    <CheckBoxRow checked={true} text={"거의 안한다."} />
                  ) : (
                    <CheckBoxRow text={"거의 안한다."} />
                  )}
                  {habitCheckList.mealWithSnack === "DEGREE_C" ? (
                    <CheckBoxRow checked={true} text={"가끔 한다."} />
                  ) : (
                    <CheckBoxRow text={"가끔 한다."} />
                  )}
                  {habitCheckList.mealWithSnack === "DEGREE_D" ? (
                    <CheckBoxRow checked={true} text={"자주 한다."} />
                  ) : (
                    <CheckBoxRow text={"자주 한다."} />
                  )}
                  {habitCheckList.mealWithSnack === "DEGREE_E" ? (
                    <CheckBoxRow checked={true} text={"매일 한다."} />
                  ) : (
                    <CheckBoxRow text={"매일 한다."} />
                  )}
                </Box>
                <Divider text={"야식을 많이 드시나요?"} color={"dark"} />
                <Box>
                  {habitCheckList.mealWithNightFood === "DEGREE_A" ? (
                    <CheckBoxRow checked={true} text={"안한다."} />
                  ) : (
                    <CheckBoxRow text={"안한다."} />
                  )}
                  {habitCheckList.mealWithNightFood === "DEGREE_B" ? (
                    <CheckBoxRow checked={true} text={"거의 안한다."} />
                  ) : (
                    <CheckBoxRow text={"거의 안한다."} />
                  )}
                  {habitCheckList.mealWithNightFood === "DEGREE_C" ? (
                    <CheckBoxRow checked={true} text={"가끔 한다."} />
                  ) : (
                    <CheckBoxRow text={"가끔 한다."} />
                  )}
                  {habitCheckList.mealWithNightFood === "DEGREE_D" ? (
                    <CheckBoxRow checked={true} text={"자주 한다."} />
                  ) : (
                    <CheckBoxRow text={"자주 한다."} />
                  )}
                  {habitCheckList.mealWithNightFood === "DEGREE_E" ? (
                    <CheckBoxRow checked={true} text={"매일 한다."} />
                  ) : (
                    <CheckBoxRow text={"매일 한다."} />
                  )}
                </Box>
                <Divider
                  text={"점심식사 후 나는 주로... (중복 가능)"}
                  color={"dark"}
                />
                <Box>
                  {habitCheckList.getAfterLunch.includes("AFTER_LUNCH_A") ? (
                    <CheckBoxRow checked={true} text={"스마트폰을 본다."} />
                  ) : (
                    <CheckBoxRow text={"스마트폰을 본다."} />
                  )}
                  {habitCheckList.getAfterLunch.includes("AFTER_LUNCH_B") ? (
                    <CheckBoxRow
                      checked={true}
                      text={"밖에 나가 걷거나 산책을 한다."}
                    />
                  ) : (
                    <CheckBoxRow text={"밖에 나가 걷거나 산책을 한다."} />
                  )}
                  {habitCheckList.getAfterLunch.includes("AFTER_LUNCH_C") ? (
                    <CheckBoxRow checked={true} text={"담배를 핀다."} />
                  ) : (
                    <CheckBoxRow text={"담배를 핀다."} />
                  )}
                  {habitCheckList.getAfterLunch.includes("AFTER_LUNCH_D") ? (
                    <CheckBoxRow
                      checked={true}
                      text={"커피 등 후식을 즐긴다."}
                    />
                  ) : (
                    <CheckBoxRow text={"커피 등 후식을 즐긴다."} />
                  )}
                  {habitCheckList.getAfterLunch.includes("AFTER_LUNCH_E") ? (
                    <CheckBoxRow checked={true} text={"수다를 즐긴다."} />
                  ) : (
                    <CheckBoxRow text={"수다를 즐긴다."} />
                  )}
                  {habitCheckList.getAfterLunch.includes("AFTER_LUNCH_F") ? (
                    <CheckBoxRow checked={true} text={"잠이 쏟아진다."} />
                  ) : (
                    <CheckBoxRow text={"잠이 쏟아진다."} />
                  )}
                  {habitCheckList.afterLunchEtc.length !== 0 && (
                    <FormikInput
                      editable={false}
                      label="기타"
                      value={habitCheckList.afterLunchEtc}
                      onChange={setFieldValue}
                      onTouch={setFieldTouched}
                      name="afterLunchEtc"
                      placeholder="기타"
                    />
                  )}
                </Box>
                <Divider
                  text={"내가 말을 할 때... (중복 가능)"}
                  color={"dark"}
                />
                <Box>
                  {habitCheckList.getSaying.includes("SAYING_A") ? (
                    <CheckBoxRow checked={true} text={"말의 속도가 빠르다."} />
                  ) : (
                    <CheckBoxRow text={"말의 속도가 빠르다."} />
                  )}
                  {habitCheckList.getSaying.includes("SAYING_B") ? (
                    <CheckBoxRow
                      checked={true}
                      text={"듣는 것보다 말하는 것에 더 익숙하다."}
                    />
                  ) : (
                    <CheckBoxRow
                      text={"듣는 것보다 말하는 것에 더 익숙하다."}
                    />
                  )}
                  {habitCheckList.getSaying.includes("SAYING_C") ? (
                    <CheckBoxRow
                      checked={true}
                      text={"상대방의 말을 잘 듣는 편이다."}
                    />
                  ) : (
                    <CheckBoxRow text={"상대방의 말을 잘 듣는 편이다."} />
                  )}
                  {habitCheckList.getSaying.includes("SAYING_D") ? (
                    <CheckBoxRow checked={true} text={"말을 자주 더듬는다."} />
                  ) : (
                    <CheckBoxRow text={"말을 자주 더듬는다."} />
                  )}
                  {habitCheckList.getSaying.includes("SAYING_E") ? (
                    <CheckBoxRow checked={true} text={"말을 거침없이 한다."} />
                  ) : (
                    <CheckBoxRow text={"말을 거침없이 한다."} />
                  )}
                  {habitCheckList.getSaying.includes("SAYING_F") ? (
                    <CheckBoxRow
                      checked={true}
                      text={"자주 흥분해서 말한다."}
                    />
                  ) : (
                    <CheckBoxRow text={"자주 흥분해서 말한다."} />
                  )}
                  {habitCheckList.getSaying.includes("SAYING_G") ? (
                    <CheckBoxRow checked={true} text={"말이 별로 없다."} />
                  ) : (
                    <CheckBoxRow text={"말이 별로 없다."} />
                  )}
                  {habitCheckList.getSaying.includes("SAYING_H") ? (
                    <CheckBoxRow
                      checked={true}
                      text={"생각을 하고 말을 하는 편이다."}
                    />
                  ) : (
                    <CheckBoxRow text={"생각을 하고 말을 하는 편이다."} />
                  )}
                  {habitCheckList.getSaying.includes("SAYING_I") ? (
                    <CheckBoxRow
                      checked={true}
                      text={"말을 하면서 생각하는 편이다."}
                    />
                  ) : (
                    <CheckBoxRow text={"말을 하면서 생각하는 편이다."} />
                  )}
                  {habitCheckList.getSaying.includes("SAYING_J") ? (
                    <CheckBoxRow checked={true} text={"말실수를 많이 한다."} />
                  ) : (
                    <CheckBoxRow text={"말실수를 많이 한다."} />
                  )}
                  {habitCheckList.getSaying.includes("SAYING_K") ? (
                    <CheckBoxRow
                      checked={true}
                      text={"부정적인 반응을 자주 보인다(아닌 것 같은데~ 등)"}
                    />
                  ) : (
                    <CheckBoxRow
                      text={"부정적인 반응을 자주 보인다(아닌 것 같은데~ 등)"}
                    />
                  )}
                  {habitCheckList.sayingEtc.length !== 0 && (
                    <FormikInput
                      editable={false}
                      label="기타"
                      value={habitCheckList.sayingEtc}
                      onChange={setFieldValue}
                      onTouch={setFieldTouched}
                      name="sayingEtc"
                      placeholder="기타"
                    />
                  )}
                </Box>
                <Line />
                <FormikInput
                  editable={false}
                  label="내가 말할 때 가장 자주 쓰는 말은?"
                  value={habitCheckList.sayingRepeat}
                  onChange={setFieldValue}
                  onTouch={setFieldTouched}
                  name="sayingRepeat"
                  placeholder="진짜, 아니, 어, 그, 아닌거같은데, 등"
                />
                <Divider text={"나는 걸을 때... (중복 가능)"} color={"dark"} />
                <Box>
                  {habitCheckList.getWalking.includes("WALKING_A") ? (
                    <CheckBoxRow checked={true} text={"걸음이 느리다."} />
                  ) : (
                    <CheckBoxRow text={"걸음이 느리다."} />
                  )}
                  {habitCheckList.getWalking.includes("WALKING_B") ? (
                    <CheckBoxRow checked={true} text={"걸음이 빠른 편이다."} />
                  ) : (
                    <CheckBoxRow text={"걸음이 빠른 편이다."} />
                  )}
                  {habitCheckList.getWalking.includes("WALKING_C") ? (
                    <CheckBoxRow
                      checked={true}
                      text={"옆사람과 나란히 걷는다."}
                    />
                  ) : (
                    <CheckBoxRow text={"옆사람과 나란히 걷는다."} />
                  )}
                  {habitCheckList.getWalking.includes("WALKING_D") ? (
                    <CheckBoxRow checked={true} text={"앞서서 걷는 편이다."} />
                  ) : (
                    <CheckBoxRow text={"앞서서 걷는 편이다."} />
                  )}
                  {habitCheckList.getWalking.includes("WALKING_E") ? (
                    <CheckBoxRow checked={true} text={"발을 끌면서 걷는다."} />
                  ) : (
                    <CheckBoxRow text={"발을 끌면서 걷는다."} />
                  )}
                  {habitCheckList.getWalking.includes("WALKING_F") ? (
                    <CheckBoxRow checked={true} text={"허리가 굽어 있다."} />
                  ) : (
                    <CheckBoxRow text={"허리가 굽어 있다."} />
                  )}
                  {habitCheckList.getWalking.includes("WALKING_G") ? (
                    <CheckBoxRow checked={true} text={"파워워킹을 한다."} />
                  ) : (
                    <CheckBoxRow text={"파워워킹을 한다."} />
                  )}
                  {habitCheckList.getWalking.includes("WALKING_H") ? (
                    <CheckBoxRow checked={true} text={"오래 걷지 못한다."} />
                  ) : (
                    <CheckBoxRow text={"오래 걷지 못한다."} />
                  )}
                  {habitCheckList.walkingEtc.length !== 0 && (
                    <FormikInput
                      editable={false}
                      label="기타"
                      value={habitCheckList.walkingEtc}
                      onChange={setFieldValue}
                      onTouch={setFieldTouched}
                      name="walkingEtc"
                      placeholder="기타"
                    />
                  )}
                </Box>
                <Divider
                  text={"하루 중 어느 시간이 가장 긴가요? (중복 가능)"}
                  color={"dark"}
                />
                <Box>
                  {habitCheckList.getPosture.includes("POSTURE_A") ? (
                    <CheckBoxRow checked={true} text={"앉아 있는 시간"} />
                  ) : (
                    <CheckBoxRow text={"앉아 있는 시간"} />
                  )}
                  {habitCheckList.getPosture.includes("POSTURE_B") ? (
                    <CheckBoxRow checked={true} text={"서 있는 시간"} />
                  ) : (
                    <CheckBoxRow text={"서 있는 시간"} />
                  )}
                  {habitCheckList.getPosture.includes("POSTURE_C") ? (
                    <CheckBoxRow checked={true} text={"걷는 시간"} />
                  ) : (
                    <CheckBoxRow text={"걷는 시간"} />
                  )}
                  {habitCheckList.getPosture.includes("POSTURE_D") ? (
                    <CheckBoxRow
                      checked={true}
                      text={"교통수단을 이용하는 시간"}
                    />
                  ) : (
                    <CheckBoxRow text={"교통수단을 이용하는 시간"} />
                  )}
                  {habitCheckList.getPosture.includes("POSTURE_E") ? (
                    <CheckBoxRow checked={true} text={"누워 있는 시간"} />
                  ) : (
                    <CheckBoxRow text={"누워 있는 시간"} />
                  )}
                  {habitCheckList.postureEtc.length !== 0 && (
                    <FormikInput
                      editable={false}
                      label="기타"
                      value={habitCheckList.postureEtc}
                      onChange={setFieldValue}
                      onTouch={setFieldTouched}
                      name="postureEtc"
                      placeholder="기타"
                    />
                  )}
                </Box>
                <Divider
                  text={"나의 평소 자세는? (중복 가능)"}
                  color={"dark"}
                />
                <Box>
                  {habitCheckList.getPostureDetail.includes(
                    "POSTURE_DETAIL_A"
                  ) ? (
                    <CheckBoxRow
                      checked={true}
                      text={"자세를 편하게 잘 펴고 있다."}
                    />
                  ) : (
                    <CheckBoxRow text={"자세를 편하게 잘 펴고 있다."} />
                  )}
                  {habitCheckList.getPostureDetail.includes(
                    "POSTURE_DETAIL_B"
                  ) ? (
                    <CheckBoxRow checked={true} text={"자세가 무너져 있다."} />
                  ) : (
                    <CheckBoxRow text={"자세가 무너져 있다."} />
                  )}
                  {habitCheckList.getPostureDetail.includes(
                    "POSTURE_DETAIL_C"
                  ) ? (
                    <CheckBoxRow
                      checked={true}
                      text={"앉아 있는 것에 익숙하다."}
                    />
                  ) : (
                    <CheckBoxRow text={"앉아 있는 것에 익숙하다."} />
                  )}
                  {habitCheckList.getPostureDetail.includes(
                    "POSTURE_DETAIL_D"
                  ) ? (
                    <CheckBoxRow checked={true} text={"오래 서 있지 못한다."} />
                  ) : (
                    <CheckBoxRow text={"오래 서 있지 못한다."} />
                  )}
                  {habitCheckList.getPostureDetail.includes(
                    "POSTURE_DETAIL_E"
                  ) ? (
                    <CheckBoxRow checked={true} text={"앉아 있는 게 힘들다."} />
                  ) : (
                    <CheckBoxRow text={"앉아 있는 게 힘들다."} />
                  )}
                  {habitCheckList.getPostureDetail.includes(
                    "POSTURE_DETAIL_F"
                  ) ? (
                    <CheckBoxRow
                      checked={true}
                      text={"등이 굽어 있거나 거북목이다."}
                    />
                  ) : (
                    <CheckBoxRow text={"등이 굽어 있거나 거북목이다."} />
                  )}
                  {habitCheckList.getPostureDetail.includes(
                    "POSTURE_DETAIL_G"
                  ) ? (
                    <CheckBoxRow
                      checked={true}
                      text={"일자목, 목이 돌아가지 않는다."}
                    />
                  ) : (
                    <CheckBoxRow text={"일자목, 목이 돌아가지 않는다."} />
                  )}
                  {habitCheckList.getPostureDetail.includes(
                    "POSTURE_DETAIL_H"
                  ) ? (
                    <CheckBoxRow checked={true} text={"다리를 자주 꼰다."} />
                  ) : (
                    <CheckBoxRow text={"다리를 자주 꼰다."} />
                  )}
                  {habitCheckList.getPostureDetail.includes(
                    "POSTURE_DETAIL_I"
                  ) ? (
                    <CheckBoxRow checked={true} text={"무지외반증이 있다."} />
                  ) : (
                    <CheckBoxRow text={"무지외반증이 있다."} />
                  )}
                  {habitCheckList.getPostureDetail.includes(
                    "POSTURE_DETAIL_J"
                  ) ? (
                    <CheckBoxRow
                      checked={true}
                      text={"다리가 휘어 있다 (안으로, 밖으로 등)."}
                    />
                  ) : (
                    <CheckBoxRow
                      text={"다리가 휘어 있다 (안으로, 밖으로 등)."}
                    />
                  )}
                  {habitCheckList.postureDetailEtc.length !== 0 && (
                    <FormikInput
                      editable={false}
                      label="기타"
                      value={habitCheckList.postureDetailEtc}
                      onChange={setFieldValue}
                      onTouch={setFieldTouched}
                      name="postureDetailEtc"
                      placeholder="기타"
                    />
                  )}
                </Box>
                <Divider
                  text={"체온조절을 위해 어떤 일을 하고 계시나요? (중복 가능)"}
                  color={"dark"}
                />
                <Box>
                  {habitCheckList.getBodyHeat.includes("BODY_HEAT_A") ? (
                    <CheckBoxRow
                      checked={true}
                      text={"열이 많아서 옷을 얇게 입는다."}
                    />
                  ) : (
                    <CheckBoxRow text={"열이 많아서 옷을 얇게 입는다."} />
                  )}
                  {habitCheckList.getBodyHeat.includes("BODY_HEAT_B") ? (
                    <CheckBoxRow checked={true} text={"찬물을 피한다."} />
                  ) : (
                    <CheckBoxRow text={"찬물을 피한다."} />
                  )}
                  {habitCheckList.getBodyHeat.includes("BODY_HEAT_C") ? (
                    <CheckBoxRow checked={true} text={"찬물을 즐겨 마신다."} />
                  ) : (
                    <CheckBoxRow text={"찬물을 즐겨 마신다."} />
                  )}
                  {habitCheckList.getBodyHeat.includes("BODY_HEAT_D") ? (
                    <CheckBoxRow
                      checked={true}
                      text={"뜨거운 차를 자주 마신다."}
                    />
                  ) : (
                    <CheckBoxRow text={"뜨거운 차를 자주 마신다."} />
                  )}
                  {habitCheckList.getBodyHeat.includes("BODY_HEAT_E") ? (
                    <CheckBoxRow
                      checked={true}
                      text={"핫팩을 자주 붙이고 다닌다."}
                    />
                  ) : (
                    <CheckBoxRow text={"핫팩을 자주 붙이고 다닌다."} />
                  )}
                  {habitCheckList.getBodyHeat.includes("BODY_HEAT_F") ? (
                    <CheckBoxRow
                      checked={true}
                      text={"목도리, 장갑 등을 챙겨서 한다."}
                    />
                  ) : (
                    <CheckBoxRow text={"목도리, 장갑 등을 챙겨서 한다."} />
                  )}
                  {habitCheckList.getBodyHeat.includes("BODY_HEAT_G") ? (
                    <CheckBoxRow checked={true} text={"내의를 챙겨 입는다."} />
                  ) : (
                    <CheckBoxRow text={"내의를 챙겨 입는다."} />
                  )}
                  {habitCheckList.getBodyHeat.includes("BODY_HEAT_H") ? (
                    <CheckBoxRow
                      checked={true}
                      text={"발을 항상 따듯하게 해 준다."}
                    />
                  ) : (
                    <CheckBoxRow text={"발을 항상 따듯하게 해 준다."} />
                  )}
                  {habitCheckList.getBodyHeat.includes("BODY_HEAT_I") ? (
                    <CheckBoxRow
                      checked={true}
                      text={"발이 답답해서 집에서 맨발로 다닌다."}
                    />
                  ) : (
                    <CheckBoxRow text={"발이 답답해서 집에서 맨발로 다닌다."} />
                  )}
                  {habitCheckList.getBodyHeat.includes("BODY_HEAT_J") ? (
                    <CheckBoxRow
                      checked={true}
                      text={"찜질팩, 돌뜸 등을 늘 챙겨서 한다."}
                    />
                  ) : (
                    <CheckBoxRow text={"찜질팩, 돌뜸 등을 늘 챙겨서 한다."} />
                  )}
                  {habitCheckList.getBodyHeat.includes("BODY_HEAT_K") ? (
                    <CheckBoxRow
                      checked={true}
                      text={"족탕, 반신욕, 찜질 등을 한다."}
                    />
                  ) : (
                    <CheckBoxRow text={"족탕, 반신욕, 찜질 등을 한다."} />
                  )}
                  {habitCheckList.bodyHeatEtc.length !== 0 && (
                    <FormikInput
                      editable={false}
                      label="기타"
                      value={habitCheckList.bodyHeatEtc}
                      onChange={setFieldValue}
                      onTouch={setFieldTouched}
                      name="bodyHeatEtc"
                      placeholder="기타"
                    />
                  )}
                </Box>
                <Line />
                <FormikInput
                  editable={false}
                  label="지금 하고 있는 운동이 있으신가요?"
                  value={habitCheckList.exercise}
                  onChange={setFieldValue}
                  onTouch={setFieldTouched}
                  name="exercise"
                  placeholder="헬스, 요가, 걷기, 마라톤 등등"
                />
                <Divider text={"잠은 어떻게 주무시나요?"} color={"dark"} />
                <Box>
                  {habitCheckList.getSleeping.includes("SLEEPING_A") ? (
                    <CheckBoxRow
                      checked={true}
                      text={"머리를 대면 바로 잠든다."}
                    />
                  ) : (
                    <CheckBoxRow text={"머리를 대면 바로 잠든다."} />
                  )}
                  {habitCheckList.getSleeping.includes("SLEEPING_B") ? (
                    <CheckBoxRow
                      checked={true}
                      text={"한참을 뒤척이다 자야 한다."}
                    />
                  ) : (
                    <CheckBoxRow text={"한참을 뒤척이다 자야 한다."} />
                  )}
                  {habitCheckList.getSleeping.includes("SLEEPING_C") ? (
                    <CheckBoxRow
                      checked={true}
                      text={"새벽에 꼭 한 번(이상) 일어난다."}
                    />
                  ) : (
                    <CheckBoxRow text={"새벽에 꼭 한 번(이상) 일어난다."} />
                  )}
                  {habitCheckList.getSleeping.includes("SLEEPING_D") ? (
                    <CheckBoxRow checked={true} text={"잠을 못 잔다."} />
                  ) : (
                    <CheckBoxRow text={"잠을 못 잔다."} />
                  )}
                  {habitCheckList.sleepingEtc.length !== 0 && (
                    <FormikInput
                      editable={false}
                      label="기타"
                      value={habitCheckList.sleepingEtc}
                      onChange={setFieldValue}
                      onTouch={setFieldTouched}
                      name="sleepingEtc"
                      placeholder="기타"
                    />
                  )}
                </Box>
                <Divider text={"자기 전 주로 하는 일은?"} color={"dark"} />
                <Box>
                  {habitCheckList.getBeforeSleeping.includes(
                    "BEFORE_SLEEPING_A"
                  ) ? (
                    <CheckBoxRow checked={true} text={"스마트폰"} />
                  ) : (
                    <CheckBoxRow text={"스마트폰"} />
                  )}
                  {habitCheckList.getBeforeSleeping.includes(
                    "BEFORE_SLEEPING_B"
                  ) ? (
                    <CheckBoxRow checked={true} text={"TV시청"} />
                  ) : (
                    <CheckBoxRow text={"TV시청"} />
                  )}
                  {habitCheckList.getBeforeSleeping.includes(
                    "BEFORE_SLEEPING_C"
                  ) ? (
                    <CheckBoxRow
                      checked={true}
                      text={"책, 잡지, 신문 등 읽기"}
                    />
                  ) : (
                    <CheckBoxRow text={"책, 잡지, 신문 등 읽기"} />
                  )}
                  {habitCheckList.getBeforeSleeping.includes(
                    "BEFORE_SLEEPING_D"
                  ) ? (
                    <CheckBoxRow checked={true} text={"일기, 글쓰기"} />
                  ) : (
                    <CheckBoxRow text={"일기, 글쓰기"} />
                  )}
                  {habitCheckList.getBeforeSleeping.includes(
                    "BEFORE_SLEEPING_E"
                  ) ? (
                    <CheckBoxRow checked={true} text={"야식"} />
                  ) : (
                    <CheckBoxRow text={"야식"} />
                  )}
                  {habitCheckList.beforeSleepingEtc.length !== 0 && (
                    <FormikInput
                      editable={false}
                      label="기타"
                      value={habitCheckList.beforeSleepingEtc}
                      onChange={setFieldValue}
                      onTouch={setFieldTouched}
                      name="beforeSleepingEtc"
                      placeholder="기타"
                    />
                  )}
                </Box>
                <Line />
                <FormikInput
                  editable={false}
                  label="나의 좋은 습관은 무엇인가요?"
                  value={habitCheckList.goodThing}
                  onChange={setFieldValue}
                  onTouch={setFieldTouched}
                  name="goodThing"
                />
                <FormikInput
                  editable={false}
                  label="나의 고치고 싶은 습관은 무엇인가요? 자세히 적어주세요."
                  value={habitCheckList.badThing}
                  onChange={setFieldValue}
                  onTouch={setFieldTouched}
                  name="badThing"
                />
                <WhiteSpace />
              </>
            )}
          </Formik>
        </KeyboardAwareScrollView>
      </>
    );
  }
};
export default HabitCheckListDetailScreen;

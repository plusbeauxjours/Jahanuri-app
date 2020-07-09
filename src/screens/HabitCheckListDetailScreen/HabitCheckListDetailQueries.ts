import gql from "graphql-tag";

export const GET_HABIT_CHECK_LIST_DETAIL = gql`
  query GetHabitCheckListDetail($habitCheckListUuid: String) {
    getHabitCheckListDetail(habitCheckListUuid: $habitCheckListUuid) {
      habitCheckList {
        wakeupTime
        wakeupLong
        getWakeupCondition
        wakeupConditionEtc
        getWakeupFirstThing
        wakeupFirstThingEtc
        meal
        getMealDuring
        mealDuringEtc
        mealWithWater
        mealWithSnack
        mealWithNightFood
        getAfterLunch
        afterLunchEtc
        getSaying
        sayingEtc
        sayingRepeat
        getWalking
        walkingEtc
        getPosture
        postureEtc
        getPostureDetail
        postureDetailEtc
        getBodyHeat
        bodyHeatEtc
        exercise
        getSleeping
        sleepingEtc
        getBeforeSleeping
        beforeSleepingEtc
        goodThing
        badThing
      }
    }
  }
`;

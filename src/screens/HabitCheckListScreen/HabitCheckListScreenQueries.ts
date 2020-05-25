import gql from "graphql-tag";


export const SUBMIT_HABIT_CHECK_LIST = gql`
  mutation SubmitHabitCheckList(
    $wakeupTime: String!
    $wakeupLong: String!
    $wakeupCondition: [String]
    $wakeupConditionEtc: String
    $wakeupFirstThing: [String]
    $wakeupFirstThingEtc: String
    $meal: String!
    $mealDuring: [String]
    $mealDuringEtc: String
    $mealWithWater: String!
    $mealWithSnack: String!
    $mealWithNightFood: String!
    $afterLunch: [String]
    $afterLunchEtc: String
    $saying: [String]
    $sayingEtc: String
    $sayingRepeat: String!
    $walking: [String]
    $walkingEtc: String
    $posture: [String]
    $postureEtc: String
    $postureDetail: [String]
    $postureDetailEtc: String
    $bodyHeat: [String]
    $bodyHeatEtc: String
    $exercise: String!
    $sleeping: [String]
    $sleepingEtc: String
    $beforeSleeping: [String]
    $beforeSleepingEtc: String
    $goodThing: String!
    $badThing: String!
  ) {
    submitHabitCheckList(
      wakeupTime: $wakeupTime
      wakeupLong: $wakeupLong
      wakeupCondition: $wakeupCondition
      wakeupConditionEtc: $wakeupConditionEtc
      wakeupFirstThing: $wakeupFirstThing
      wakeupFirstThingEtc: $wakeupFirstThingEtc
      meal: $meal
      mealDuring: $mealDuring
      mealDuringEtc: $mealDuringEtc
      mealWithWater: $mealWithWater
      mealWithSnack: $mealWithSnack
      mealWithNightFood: $mealWithNightFood
      afterLunch: $afterLunch
      afterLunchEtc: $afterLunchEtc
      saying: $saying
      sayingEtc: $sayingEtc
      sayingRepeat: $sayingRepeat
      walking: $walking
      walkingEtc: $walkingEtc
      posture: $posture
      postureEtc: $postureEtc
      postureDetail: $postureDetail
      postureDetailEtc: $postureDetailEtc
      bodyHeat: $bodyHeat
      bodyHeatEtc: $bodyHeatEtc
      exercise: $exercise
      sleeping: $sleeping
      sleepingEtc: $sleepingEtc
      beforeSleeping: $beforeSleeping
      beforeSleepingEtc: $beforeSleepingEtc
      goodThing: $goodThing
      badThing: $badThing
    ) {
      ok
    }
  }
`;

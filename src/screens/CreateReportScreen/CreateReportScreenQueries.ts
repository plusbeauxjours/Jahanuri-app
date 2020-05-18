import gql from "graphql-tag";

export const CREATE_REPORT = gql`
  mutation CreateReport(
    $reportCoverUuid: String!
    $saengSikMorning: String
    $saengSikNoon: String
    $saengSikEvening: String
    $aminoMorning: String
    $aminoNoon: String
    $aminoEvening: String
    $sangiSoMorning: String
    $sangiSoNoon: String
    $sangiSoEvening: String
    $jeunHaeJil: Boolean
    $meal: String
    $mealCheck: String
    $sleeping: String
    $stool: String
    $hotGrain: String
    $hotWater: String
    $strolling: String
    $workout: String
    $lecture: String
    $etc: String
    $diary: String
  ) {
    createReport(
      reportCoverUuid: $reportCoverUuid
      saengSikMorning: $saengSikMorning
      saengSikNoon: $saengSikNoon
      saengSikEvening: $saengSikEvening
      aminoMorning: $aminoMorning
      aminoNoon: $aminoNoon
      aminoEvening: $aminoEvening
      sangiSoMorning: $sangiSoMorning
      sangiSoNoon: $sangiSoNoon
      sangiSoEvening: $sangiSoEvening
      jeunHaeJil: $jeunHaeJil
      meal: $meal
      mealCheck: $mealCheck
      sleeping: $sleeping
      stool: $stool
      hotGrain: $hotGrain
      hotWater: $hotWater
      strolling: $strolling
      workout: $workout
      lecture: $lecture
      etc: $etc
      diary: $diary
    ) {
      report {
        uuid
        reportCover {
          classOrder {
            order
            startDate
            endDate
          }
          uuid
          reportType
        }
        saengSikMorning
        saengSikNoon
        saengSikEvening
        aminoMorning
        aminoNoon
        aminoEvening
        sangiSoMorning
        sangiSoNoon
        sangiSoEvening
        jeunHaeJil
        meal
        mealCheck
        sleeping
        stool
        hotGrain
        hotWater
        strolling
        workout
        lecture
        etc
        diary
      }
    }
  }
`;

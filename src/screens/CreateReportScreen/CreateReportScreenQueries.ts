import gql from "graphql-tag";

export const CREATE_REPORT = gql`
  mutation CreateReport(
    $saengSikMorning: String
    $saengSikNoon: String
    $saengSikEvening: String
    $aminoMorning: String
    $aminoNoon: String
    $aminoEvening: String
    $sangiSoMorning: String
    $sangiSoNoon: String
    $sangiSoEvening: String
    $jeunHaeJilA: Boolean
    $jeunHaeJilB: Boolean
    $jeunHaeJilC: Boolean
    $jeunHaeJilD: Boolean
    $meal: String!
    $mealCheck: String!
    $sleeping: String!
    $stool: String!
    $hotGrain: String!
    $hotWater: String!
    $strolling: String!
    $workout: String!
    $lecture: String!
    $etc: String!
    $diary: String!
    $reportDate: DateTime!
  ) {
    createReport(
      saengSikMorning: $saengSikMorning
      saengSikNoon: $saengSikNoon
      saengSikEvening: $saengSikEvening
      aminoMorning: $aminoMorning
      aminoNoon: $aminoNoon
      aminoEvening: $aminoEvening
      sangiSoMorning: $sangiSoMorning
      sangiSoNoon: $sangiSoNoon
      sangiSoEvening: $sangiSoEvening
      jeunHaeJilA: $jeunHaeJilA
      jeunHaeJilB: $jeunHaeJilB
      jeunHaeJilC: $jeunHaeJilC
      jeunHaeJilD: $jeunHaeJilD
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
      reportDate: $reportDate
    ) {
      report {
        uuid
        reportDate
      }
    }
  }
`;

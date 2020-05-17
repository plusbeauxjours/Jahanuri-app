import gql from "graphql-tag";

export const CREATE_REPORT = gql`
  mutation CreateReport(
    $reportCoverUuid: String!
    $saengSik: String
    $amino: String
    $sangiSo: String
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
      saengSik: $saengSik
      amino: $amino
      sangiSo: $sangiSo
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
        saengSik
        amino
        sangiSo
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

import gql from "graphql-tag";

export const GET_REPORT_DETAIL = gql`
  query GetReportDetail($reportUuid: String) {
    getReportDetail(reportUuid: $reportUuid) {
      report {
        classOrder{
          order
          startDate
          endDate
        }
        uuid
        saengSikMorning
        saengSikNoon
        saengSikEvening
        aminoMorning
        aminoNoon
        aminoEvening
        sangiSoMorning
        sangiSoNoon
        sangiSoEvening
        jeunHaeJilA
        jeunHaeJilB
        jeunHaeJilC
        jeunHaeJilD
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
        reportDate
      }
    }
  }
`;

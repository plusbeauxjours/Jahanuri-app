import gql from "graphql-tag";

export const GET_REPORT_DETAIL = gql`
  query GetReportDetail($reportUuid: String) {
    getReportDetail(reportUuid: $reportUuid) {
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
        reportDate
      }
    }
  }
`;

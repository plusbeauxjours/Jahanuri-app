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
        saengSik
        amino
        sangiSo
        jeunHaeJil
        jeunHaeJilTime
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

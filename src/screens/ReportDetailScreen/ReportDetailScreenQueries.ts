import gql from "graphql-tag";

export const GET_REPORT_DETAIL = gql`
  query GetReportDetail($reportUuid: String) {
    getReportDetail(reportUuid: $reportUuid) {
      report {
        uuid
      }
    }
  }
`;

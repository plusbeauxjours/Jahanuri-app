import gql from "graphql-tag";

export const GET_REPORT_LIST = gql`
  query GetReportList {
    getReportList{
      reports {
        uuid
        reportDate
      }
    }
  }
`;

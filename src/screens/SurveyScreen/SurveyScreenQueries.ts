import gql from "graphql-tag";



export const GET_SURVEY_LIST = gql`
  query GetSurveyList {
    getSurveyList {
      surveys {
        uuid
        createdAt
      }
    }
  }
`;

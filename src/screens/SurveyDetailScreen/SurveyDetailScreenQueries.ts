import gql from "graphql-tag";


export const GET_SURVEY_DETAIL = gql`
  query GetSurveyDetail ($surveyUuid: String!) {
    getSurveyDetail (surveyUuid: $surveyUuid) {
      survey {
        hasMarried
        hasMarriedEtc
        hasChildbirth
        hasChildbirthEtc
        status
        change
        agreePersonalInformation
        confirm
      }
    }
  }
`;
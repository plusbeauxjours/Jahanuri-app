import gql from "graphql-tag";


export const SUBMIT_SURVEY = gql`
  mutation SubmitSurvey(
        $hasMarried: Boolean!
        $hasMarriedEtc: String
        $hasChildbirth: Boolean!
        $hasChildbirthEtc: String
        $status: String!
        $change: String!
        $agreePersonalInformation: Boolean!
        $confirm: Boolean!
  ) {
    submitSurvey(
        hasMarried: $hasMarried
        hasMarriedEtc:$hasMarriedEtc
        hasChildbirth:$hasChildbirth
        hasChildbirthEtc:$hasChildbirthEtc
        status:$status
        change:$change
        agreePersonalInformation:$agreePersonalInformation
        confirm:$confirm
    ) {
      ok
    }
  }
`;

export const GET_SURVEY = gql`
  query GetSurvey {
    getSurvey {
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


import gql from "graphql-tag";

export const GET_CHECK_LIST_ANSWERS = gql`
  query GetCheckListAnswers {
    getCheckListAnswers {
      checkListAnswers {
        uuid
        previousAnswer
        laterAnswer
        question {
          uuid
          question
        }
      }
    }
  }
`;

export const SUBMIT_CHECK_LIST = gql`
  mutation SubmitCheckList(
    $isPreviousAnswer: Boolean!
    $trueAnswerQuestionUuids: [String]
  ) {
    submitCheckList(
      isPreviousAnswer: $isPreviousAnswer
      trueAnswerQuestionUuids: $trueAnswerQuestionUuids
    ) {
      ok
    }
  }
`;

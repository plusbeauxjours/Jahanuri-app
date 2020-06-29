import gql from "graphql-tag";

export const GET_CHECK_LIST_QUESTIONS = gql`
  query GetCheckListQuestions {
    getCheckListQuestions {
      checkListQuestions {
        question
        uuid
      }
      checkListAnswers {
        uuid
        question {
          uuid
          question
        }
        previousAnswer
        laterAnswer
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
      checkListAnswers {
        uuid
        question {
          uuid
          question
        }
        previousAnswer
        laterAnswer
      }
    }
  }
`;

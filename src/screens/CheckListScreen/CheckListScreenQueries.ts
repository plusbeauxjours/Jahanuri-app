import gql from "graphql-tag";

export const GET_CHECK_LIST_QUESTIONS = gql`
  query GetCheckListQuestions {
    getCheckListQuestions {
      checkListQuestions {
        question
        uuid
        questionSet {
          previousAnswer
          laterAnswer
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
      checkListQuestions {
        question
        uuid
        questionSet {
          previousAnswer
          laterAnswer
        }
      }
    }
  }
`;

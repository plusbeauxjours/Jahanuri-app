import gql from "graphql-tag";

export const GET_CHECK_LIST_QUESTIONS = gql`
  query GetCheckListQuestions {
    getCheckListQuestions {
      checkListQuestions {
        uuid
        question
        questionSet {
          checkListCover {
            uuid
            previousSubmit
            laterSubmit
          }
          previousAnswer
          laterAnswer
        }
      }
    }
  }
`;

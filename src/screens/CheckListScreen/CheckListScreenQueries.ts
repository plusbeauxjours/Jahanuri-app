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

interface CheckListSet {
  uuid: String;
  previous: Boolean;
  later: Boolean;
}

export const CHECK_LIST = gql`
  mutation CheckList(
    $checkListCoverUuid: String!
    $checkListSet: CheckListSet
  ) {
    checkList(
      checkListCoverUuid: $checkListCoverUuid
      checkListSet: $checkListSet
    ) {
      ok
    }
  }
`;

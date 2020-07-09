import gql from "graphql-tag";

export const GET_HABIT_CHECK_LIST_LIST = gql`
  query GetHabitCheckListList {
    getHabitCheckListList {
      habitCheckLists {
        uuid
        createdAt
      }
    }
  }
`;

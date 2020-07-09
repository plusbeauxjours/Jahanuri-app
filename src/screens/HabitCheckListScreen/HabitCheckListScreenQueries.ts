import gql from "graphql-tag";

export const GET_HABIT_CHECK_LIST_List = gql`
  query GetHabitCheckListList {
    getHabitCheckListList {
      habitCheckLists {
        uuid
        createdAt
      }
    }
  }
`;

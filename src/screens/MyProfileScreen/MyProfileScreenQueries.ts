import gql from "graphql-tag";

export const ME = gql`
  query Me {
    me {
      user {
        uuid
        username
        firstName
        lastName
        bio
        userImg
        classOrder {
          order
        }
        hasSubmitedCheckList
        hasSubmitedApplication
        hasPaid
        hasKakaoAccount
      }
    }
  }
`;

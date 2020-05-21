import gql from "graphql-tag";

export const UPDATE_USER = gql`
  mutation UpdateUser(
    $firstName: String!
    $lastName: String!
    $password: String!
    $userImg: Upload
  ) {
    updateUser(
      firstName: $firstName
      lastName: $lastName
      password: $password
      userImg: $userImg
    ) {
      user {
        firstName
        lastName
        userImg
      }
    }
  }
`;

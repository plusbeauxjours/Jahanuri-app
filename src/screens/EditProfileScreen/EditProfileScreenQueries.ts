import gql from "graphql-tag";

export const UPDATE_USER = gql`
  mutation UpdateUser(
    $firstName: String!
    $lastName: String!
    $password: String!
    $userImg: Upload
    $address: String
    $job: String
    $phoneNumber: String
    $email: String
  ) {
    updateUser(
      firstName: $firstName
      lastName: $lastName
      password: $password
      userImg: $userImg
      address: $address
      job: $job
      phoneNumber: $phoneNumber
      email: $email
    ) {
      user {
        firstName
        lastName
        userImg
      }
    }
  }
`;

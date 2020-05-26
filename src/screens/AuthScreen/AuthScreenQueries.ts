import gql from 'graphql-tag';

export const LOGIN = gql`
  mutation Login($username: String!, $password: String!) {
    tokenAuth(username: $username, password: $password) {
      token
    }
  }
`;

export const SIGNUP = gql`
  mutation Signup(
    $username: String!
    $password: String!
    $firstName: String!
    $lastName: String!
  ) {
    createUser(
      username: $username
      password: $password
      firstName: $firstName
      lastName: $lastName
    ) {
      user {
        uuid
        username
        firstName
        lastName
        userImg
        classOrder {
          order
          startDate
          endDate
          uuid
        }
        reportCoverUuid
        hasSubmittedPreviousCheckList
        hasSubmittedLaterCheckList
        hasSubmittedApplication
        hasSubmittedSurvey
        hasPaid
        hasKakaoAccount
        hasAppleAccount
        isStaff
      }
    }
  }
`;

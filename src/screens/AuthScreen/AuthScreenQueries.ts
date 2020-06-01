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
        classOrder {
          order
          startDate
          endDate
          uuid
        }
        address
        job
        phoneNumber
        email
        reportCoverUuid
        hasSubmittedPreviousCheckList
        hasSubmittedLaterCheckList
        hasSubmittedHabitCheckList
        hasSubmittedApplication
        hasSubmittedSurvey
        hasPaid
        hasAppleAccount
        appleId
        pushToken
        isStaff
      }
    }
  }
`;

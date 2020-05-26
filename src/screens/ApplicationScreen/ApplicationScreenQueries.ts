import gql from "graphql-tag";

export const SUBMIT_APPLICATION = gql`
  mutation SubmitApplication(
    $gender: String!
    $birthDate: DateTime
    $address: String!
    $job: String!
    $phoneNumber: String!
    $emailAddress: String!
    $approach: [String]
    $approachEtc: String
    $confirm: Boolean!
  ) {
    submitApplication(
      gender: $gender
      birthDate: $birthDate
      address: $address
      job: $job
      phoneNumber: $phoneNumber
      emailAddress: $emailAddress
      approach: $approach
      approachEtc: $approachEtc
      confirm: $confirm
    ) {
      ok
    }
  }
`;
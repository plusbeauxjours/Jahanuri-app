import gql from "graphql-tag";

export const ME = gql`
  query Me {
    me {
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

export const GET_FEED_LIST = gql`
  query GetFeedList {
    getFeedList {
      feeds {
        classOrder {
          order
          startDate
          endDate
          uuid
        }
        user {
          username
        }
        uuid
        text
        createdAt
      }
    }
  }
`;

export const GET_FEED_LIST_STAFF = gql`
  query GetFeedListStaff($classOrderUuid: String!) {
    getFeedListStaff(classOrderUuid: $classOrderUuid) {
      feeds {
        classOrder {
          order
          startDate
          endDate
          uuid
        }
        user {
          username
        }
        uuid
        text
        createdAt
      }
    }
  }
`;

export const GET_CLASS_LIST = gql`
  query GetClassList {
    getClassList {
      classes {
        order
        startDate
        endDate
        uuid
      }
    }
  }
`;

export const CREATE_FEED = gql`
  mutation CreateFeed($classOrderUuid: String!, $text: String!) {
    createFeed(classOrderUuid: $classOrderUuid, text: $text) {
      feed {
        classOrder {
          order
          startDate
          endDate
          uuid
        }
        user {
          username
        }
        uuid
        text
        createdAt
      }
      users{
        firstName
        pushToken
      }
    }
  }
`;

export const REMOVE_FEED = gql`
  mutation RemoveFeed($feedUuid: String!) {
    removeFeed(feedUuid: $feedUuid) {
      uuid
    }
  }
`;

export const REGISTER_PUSH = gql`
  mutation RegisterPush($pushToken: String!) {
    registerPush(pushToken: $pushToken) {
      ok
    }
  }
`;
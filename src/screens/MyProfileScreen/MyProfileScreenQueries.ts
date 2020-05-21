import gql from "graphql-tag";

export const ME = gql`
  query Me {
    me {
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
        hasPreviousCheckListSubmitted
        hasLaterCheckListSubmitted
        hasSubmitedApplication
        hasPaid
        hasKakaoAccount
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

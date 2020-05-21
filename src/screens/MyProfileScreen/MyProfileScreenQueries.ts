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
        }
        reportCoverUuid
        hasPreviousCheckListSubmitted
        hasLaterCheckListSubmitted
        hasSubmitedApplication
        hasPaid
        hasKakaoAccount
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

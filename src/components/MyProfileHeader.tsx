import React from "react";
import { Caption, Headline } from "react-native-paper";
import { Avatar } from "react-native-elements";
import styled from "styled-components";

import { MEDIA_URL } from "../constants/urls";
import Moment from "moment";

const UserInfoContainer = styled.View`
  align-items: center;
  justify-content: center;
  background-color: #fff;
  height: 250px;
`;
const Staff = styled.Text`
  margin-top: 10px;
  font-weight: 600;
  color: red;
`;
const Row = styled.View`
  flex-direction: row;
  width: 100%;
  padding: 0 20px;
  margin-top: 10px;
  align-items: center;
  justify-content: space-between;
`;
const Order = styled.Text`
  align-self: center;
  width: 70px;
  font-weight: 600;
`;
const DateFont = styled.Text`
  font-size: 10px;
  font-weight: 100;
`;

interface IProps {
  order?: number;
  startDate?: string;
  endDate?: string;
  isStaff: boolean;
  name: string;
  username: string;
}

const MyProfileHeader: React.FC<IProps> = ({
  order,
  startDate,
  endDate,
  isStaff,
  name,
  username,
}) => {
  return (
    <UserInfoContainer>
      <Avatar
        size="large"
        rounded
        containerStyle={{ marginVertical: 5 }}
        source={{
          uri:
            "https://gblobscdn.gitbook.com/spaces%2F-L-nWFFFG5HNhz4YeOI_%2Favatar.png?generation=1523478414663564&alt=media",
        }}
      />
      <Headline>{name}</Headline>
      <Caption>{`@${username}`}</Caption>
      {/* {isStaff ? (
        <Staff>스태프 권한</Staff>
      ) : (
        <>
          {startDate && endDate && (
            <Row>
              <Order>{order}기</Order>
              <DateFont>
                {Moment(startDate).format("Y년 M월 D일")}
                &nbsp;~&nbsp;
                {Moment(endDate).format("Y년 M월 D일")}
              </DateFont>
            </Row>
          )}
        </>
      )} */}
    </UserInfoContainer>
  );
};

export default MyProfileHeader;

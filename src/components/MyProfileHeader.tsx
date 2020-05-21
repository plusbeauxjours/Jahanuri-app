import React from "react";
import { Caption, Headline } from "react-native-paper";
import { Avatar } from "react-native-elements";
import styled from "styled-components";

import { MEDIA_URL } from "../constants/urls";
import dimensions from "../constants/dimensions";
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
  margin-top: 10px;
`;
const Order = styled.Text`
  align-self: center;
  padding: 0 5px;
  width: 70px;
  text-align: center;
  font-weight: 600;
`;
const Date = styled.Text`
  width: ${dimensions.width - 100};
  text-align: center;
`;

interface IProps {
  order?: number;
  startDate?: string;
  endDate?: string;
  isStaff: boolean;
  userImg?: string;
  name: string;
  username: string;
}

const MyProfileHeader: React.FC<IProps> = ({
  order,
  startDate,
  endDate,
  isStaff,
  userImg = null,
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
          uri: userImg
            ? MEDIA_URL + userImg
            : "https://gblobscdn.gitbook.com/spaces%2F-L-nWFFFG5HNhz4YeOI_%2Favatar.png?generation=1523478414663564&alt=media",
        }}
      />
      <Headline>{name}</Headline>
      <Caption>{`@${username}`}</Caption>
      {isStaff ? (
        <Staff>스태프 권한</Staff>
      ) : (
        <>
          {startDate && endDate && (
            <Row>
              <Order>{order}기</Order>
              <Date>
                {Moment(startDate).format("Y년 M월 D일")}
                &nbsp;~&nbsp;
                {Moment(endDate).format("Y년 M월 D일")}
              </Date>
            </Row>
          )}
        </>
      )}
    </UserInfoContainer>
  );
};

export default MyProfileHeader;

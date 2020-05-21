import React from "react";
import Moment from "moment";
import styled from "styled-components";
import { ActivityIndicator } from "react-native";
import { useQuery } from "react-apollo-hooks";
import { GetClassList } from "../types/api";
import { GET_CLASS_LIST } from "../screens/MyProfileScreen/MyProfileScreenQueries";
import dimensions from "../constants/dimensions";

const Container = styled.View`
  flex: 1;
  justify-content: center;
`;
const View = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 15px;
  min-height: 100px;
`;
const GreyLine = styled.View`
  margin: 0 20px;
  border-bottom-width: 0.5px;
  border-bottom-color: #999;
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

interface IProps {}

const StaffFeeds: React.FC<IProps> = () => {
  const {
    data: { getClassList: { classes = null } = {} } = {},
    loading,
  } = useQuery<GetClassList>(GET_CLASS_LIST);
  if (loading) {
    return (
      <ActivityIndicator
        size="large"
        style={{
          margin: 20,
        }}
      />
    );
  } else {
    return (
      <>
        <Container>
          {classes.map((classe: any) => (
            <React.Fragment key={classe.uuid}>
              <View>
                <Order>{classe.order}기:</Order>
                <Date>
                  {Moment(classe.startDate).format("Y년 M월 D일")}
                  &nbsp;~&nbsp;
                  {Moment(classe.endDate).format("Y년 M월 D일")}
                </Date>
              </View>
              <GreyLine />
            </React.Fragment>
          ))}
        </Container>
        <GreyLine />
      </>
    );
  }
};

export default StaffFeeds;

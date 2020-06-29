import React from "react";
import styled from "styled-components";
import { ActivityIndicator } from "react-native";
import { withNavigation } from "react-navigation";
import { Me } from "../types/api";
import { ME } from "../screens/MyProfileScreen/MyProfileScreenQueries";
import { useQuery } from "react-apollo-hooks";

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const View = styled.View`
  flex: 1;
  min-height: 100px;
  align-items: center;
  justify-content: center;
  padding: 10px 20px 20px 20px;
`;
const GreyLine = styled.View`
  margin: 0 20px;
  border-bottom-width: 0.5px;
  border-bottom-color: #999;
`;
const DateFont = styled.Text`
  font-size: 10px;
  font-weight: 100;
`;
const Text = styled.Text`
  font-size: 16px;
  font-weight: 100;
  margin-bottom: 10px;
`;
const Touchable = styled.TouchableOpacity``;

export default withNavigation(({ navigation }) => {
  const {
    data: { me: { user: me = null } = {} } = {},
    loading: meLoading,
  } = useQuery<Me>(ME);
  if (meLoading) {
    return (
      <Container>
        <ActivityIndicator />
      </Container>
    );
  } else {
    if (!me.hasSubmittedApplication) {
      return (
        <>
          <View>
            <Text>아직 신청서를 제출하지 않았습니다.</Text>
            <Touchable onPress={() => navigation.navigate("ApplicationScreen")}>
              <DateFont>신청서를 제출하려면 여기를 탭하세요.</DateFont>
            </Touchable>
          </View>
          <GreyLine />
        </>
      );
    } else if (!me.hasPaid) {
      return (
        <>
          <View>
            <Text>아직 결제를 하지 않았습니다.</Text>
            <Touchable
              onPress={() => navigation.navigate("PaymentInformationScreen")}
            >
              <DateFont>결제 정보를 보려면 여기를 탭하세요.</DateFont>
            </Touchable>
          </View>
          <GreyLine />
        </>
      );
    } else if (!me.hasSubmittedPreviousCheckList) {
      return (
        <>
          <View>
            <Text>체크리스트를 제출하지 않았습니다.</Text>
            <Touchable onPress={() => navigation.navigate("CheckListScreen")}>
              <DateFont>체크리스트를 제출하려면 여기를 탭하세요.</DateFont>
            </Touchable>
          </View>
          <GreyLine />
        </>
      );
    } else {
      return null;
    }
  }
});

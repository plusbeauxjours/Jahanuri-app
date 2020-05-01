import React, { FC } from "react";
import styled from "styled-components";
import { useMe } from "../context/meContext";
import { ActivityIndicator } from "react-native";
import { withNavigation } from "react-navigation";

const View = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const Text = styled.Text``;
const Touchable = styled.TouchableOpacity``;

export default withNavigation(({ navigation }) => {
  const { me, loading } = useMe();
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
    if (!me.user.hasPreviousCheckListSubmitted) {
      return (
        <View>
          <Text>You didn't submit check list yet, please submit checklist</Text>
          <Touchable onPress={() => navigation.push("CheckListScreen")}>
            <Text>go to check list</Text>
          </Touchable>
        </View>
      );
    } else if (!me.user.hasSubmitedApplication) {
      return (
        <View>
          <Text>
            You didn't submit application yet, please submit application
          </Text>
          <Touchable onPress={() => navigation.push("ApplicationScreen")}>
            <Text>go to application</Text>
          </Touchable>
        </View>
      );
    } else if (!me.user.hasPaid) {
      return (
        <View>
          <Text>You didn't pay yet, please pay</Text>
          <Touchable
            onPress={() => navigation.push("PaymentInformationScreen")}
          >
            <Text>go to payment information</Text>
          </Touchable>
        </View>
      );
    }
  }
});

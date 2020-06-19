import React, { useState } from "react";
import styled from "styled-components";
import * as AppleAuthentication from "expo-apple-authentication";
import { useMutation } from "react-apollo-hooks";
import { APPLE_CONNECT } from "./AppleApproachQueries";
import Toast from "react-native-root-toast";
import { ActivityIndicator, AsyncStorage } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { AppleConnect, AppleConnectVariables } from "../../types/api";
import { withNavigation } from "react-navigation";

const Touchable = styled.TouchableOpacity``;

const Container = styled.View`
  flex-direction: row;
  background-color: #000;
  width: 160px;
  height: 40px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`;

const LoginTextContainer = styled.View`
  width: 145px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Text = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: 400;
`;

export default withNavigation(({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [appleConnectFn, { loading: appleConnectLoading }] = useMutation<
    AppleConnect,
    AppleConnectVariables
  >(APPLE_CONNECT);
  const toast = (message: string) => {
    Toast.show(message, {
      duration: 1000,
      position: Toast.positions.CENTER,
      shadow: true,
      animation: true,
      hideOnPress: true,
      delay: 0,
    });
  };
  const appleLogin = async () => {
    try {
      const credential = await AppleAuthentication.signInAsync({
        requestedScopes: [
          AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
          AppleAuthentication.AppleAuthenticationScope.EMAIL,
        ],
      });
      try {
        const {
          data: { appleConnect },
        } = await appleConnectFn({
          variables: {
            firstName: credential.fullName.givenName,
            lastName: credential.fullName.familyName,
            email: credential.email,
            appleId: credential.user,
          },
        });
        await AsyncStorage.setItem("jwt", appleConnect.token);
        if (appleConnect.token) {
          await toast(`환영합니다!`);
          await setLoading(false);
          navigation.navigate("AuthLoadingContainer");
        }
      } catch ({ message }) {
        console.log(`Apple Login Error: ${message}`);
        setLoading(false);
      }
    } catch ({ message }) {
      console.log(`Apple Login Error: ${message}`);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Touchable
      disabled={loading}
      onPress={() => {
        setLoading(true), appleLogin();
      }}
    >
      <Container>
        {loading ? (
          <ActivityIndicator color={"white"} />
        ) : (
          <LoginTextContainer>
            <FontAwesome name={"apple"} color={"white"} size={20} />
            <Text>Apple로 로그인</Text>
          </LoginTextContainer>
        )}
      </Container>
    </Touchable>
  );
});

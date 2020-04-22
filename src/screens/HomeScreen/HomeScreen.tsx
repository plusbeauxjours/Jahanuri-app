import React from "react";
import styled from "styled-components";

import { NavigationStackScreenComponent } from "react-navigation-stack";
import KakaoLogin from "../../components/KakaoLogin";

const View = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const Text = styled.Text``;
const Touchabel = styled.TouchableOpacity`
  margin-bottom: 30px;
`;

const HomeScreen: NavigationStackScreenComponent = ({ navigation }) => (
  <View>
    <Touchabel onPress={() => navigation.navigate("AboutScreen")}>
      <Text>ABOUT JAHANURI</Text>
    </Touchabel>
    <Touchabel onPress={() => navigation.navigate("ContactScreen")}>
      <Text>CONTACT</Text>
    </Touchabel>
    <Touchabel onPress={KakaoLogin}>
      <Text>KAKAO LOGIN</Text>
    </Touchabel>
    <Touchabel onPress={() => navigation.navigate("Login")}>
      <Text>LOGIN</Text>
    </Touchabel>
  </View>
);

export default HomeScreen;

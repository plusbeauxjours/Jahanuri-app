import React, { useState } from "react";
import { ImageBackground, Platform } from "react-native";
import styled from "styled-components";

import { NavigationStackScreenComponent } from "react-navigation-stack";
import KakaoLogin from "../../components/KakaoLogin";
import Divider from "../../components/Divider";
import AppleApproach from "../../components/AppleApproach/index";

const View = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const Text = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: 400;
`;
const Touchable = styled.TouchableOpacity``;
const TouchableBorder = styled(Touchable)`
  width: 160px;
  height: 40px;
  border-radius: 5px;
  border-width: 0.5px;
  border-color: #fff;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const WhiteSpace = styled.View`
  height: 40px;
`;
const Sign = styled.Text`
  text-align: center;
  margin-bottom: 20px;
  color: #fff;
  font-size: 10px;
`;

const HomeScreen: NavigationStackScreenComponent = ({ navigation }) => {
  const [isHomePart, setIsHomePart] = useState<boolean>(true);
  const LoginPart = () => {
    return (
      <View>
        <TouchableBorder onPress={() => navigation.navigate("Login")}>
          <Text>계정 로그인</Text>
        </TouchableBorder>
        <WhiteSpace />
        <TouchableBorder onPress={KakaoLogin}>
          <Text>카카오 로그인</Text>
        </TouchableBorder>
        <WhiteSpace />
        {Platform.OS === "ios" && <AppleApproach />}
        <WhiteSpace />
        <Divider text="OR" />
        <WhiteSpace />
        <Touchable onPress={() => setIsHomePart(true)}>
          <Text>돌아가기</Text>
        </Touchable>
      </View>
    );
  };
  const HomePart = () => {
    return (
      <View>
        <Touchable onPress={() => navigation.navigate("AboutScreen")}>
          <Text>직관의 몸공부란</Text>
        </Touchable>
        <WhiteSpace />
        <Touchable onPress={() => navigation.navigate("ContactScreen")}>
          <Text>고마센터 알아가기</Text>
        </Touchable>
        <WhiteSpace />
        <Touchable onPress={() => setIsHomePart(false)}>
          <Text>로그인</Text>
        </Touchable>
      </View>
    );
  };
  return (
    <ImageBackground
      style={{
        width: "100%",
        height: "100%",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
      source={require("../../images/MainImage.jpg")}
      resizeMode="stretch"
    >
      {isHomePart ? <HomePart /> : <LoginPart />}
      <Sign>Handcrafted by plusbeauxjours © twentytwenty</Sign>
    </ImageBackground>
  );
};
HomeScreen.navigationOptions = () => ({
  title: "결제",
  headerStyle: {
    backgroundColor: "red",
  },
  headerTintColor: "#fff",
});

export default HomeScreen;

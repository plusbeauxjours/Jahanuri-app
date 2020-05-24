import React, { useState } from "react";
import { ImageBackground } from "react-native";
import styled from "styled-components";

import { NavigationStackScreenComponent } from "react-navigation-stack";
import KakaoLogin from "../../components/KakaoLogin";
import Divider from "../../components/Divider";

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
const Touchabel = styled.TouchableOpacity``;
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
        <Touchabel onPress={() => navigation.navigate("Login")}>
          <Text>계정 로그인</Text>
        </Touchabel>
        <WhiteSpace />
        <Touchabel onPress={KakaoLogin}>
          <Text>카카오 로그인</Text>
        </Touchabel>
        <WhiteSpace />
        <Touchabel onPress={KakaoLogin}>
          <Text>애플 로그인</Text>
        </Touchabel>
        <WhiteSpace />
        <Divider text="OR" />
        <WhiteSpace />
        <Touchabel onPress={() => setIsHomePart(true)}>
          <Text>돌아가기</Text>
        </Touchabel>
      </View>
    );
  };
  const HomePart = () => {
    return (
      <View>
        <Touchabel onPress={() => navigation.navigate("AboutScreen")}>
          <Text>직관의 몸공부란</Text>
        </Touchabel>
        <WhiteSpace />
        <Touchabel onPress={() => navigation.navigate("ContactScreen")}>
          <Text>고마센터 알아가기</Text>
        </Touchabel>
        <WhiteSpace />
        <Touchabel onPress={() => setIsHomePart(false)}>
          <Text>로그인</Text>
        </Touchabel>
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

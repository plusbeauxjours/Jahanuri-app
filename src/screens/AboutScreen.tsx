import React from "react";
import styled from "styled-components";
import Swiper from "react-native-swiper";
import { NavigationStackScreenComponent } from "react-navigation-stack";
import { ImageBackground } from "react-native";

const View = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const Text = styled.Text``;

const AboutScreen: NavigationStackScreenComponent = () => (
  <Swiper dotColor={"#ffffff"} loop={false}>
    <ImageBackground
      style={{ width: "100%", height: "100%" }}
      source={require("../images/AboutImages/FirstPage.jpg")}
      resizeMode="stretch"
    />
    <ImageBackground
      style={{ width: "100%", height: "100%" }}
      source={require("../images/AboutImages/SecondPage.jpg")}
      resizeMode="stretch"
    />
    <ImageBackground
      style={{ width: "100%", height: "100%" }}
      source={require("../images/AboutImages/ThirdPage.jpg")}
      resizeMode="stretch"
    />
    <ImageBackground
      style={{ width: "100%", height: "100%" }}
      source={require("../images/AboutImages/FourthPage.jpg")}
      resizeMode="stretch"
    />
    <ImageBackground
      style={{ width: "100%", height: "100%" }}
      source={require("../images/AboutImages/FifthPage.jpg")}
      resizeMode="stretch"
    />
  </Swiper>
);
AboutScreen.navigationOptions = () => ({});

export default AboutScreen;

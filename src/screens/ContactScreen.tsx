import React from "react";
import styled from "styled-components";
import { Linking } from "react-native";
import { ImageBackground } from "react-native";
import { NavigationStackScreenComponent } from "react-navigation-stack";

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.3);
  align-items: center;
  justify-content: center;
  padding: 30px 0;
`;
const Box = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

const Text = styled.Text`
  color: white;
  font-size: 14px;
`;
const TitleBox = styled.View`
  flex-direction: column;
`;
const Title = styled(Text)`
  font-weight: 400;
  font-size: 20px;
`;

const WhiteSpace = styled.View`
  height: 30px;
`;

const LogoContainer = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  border: 1px solid red;
`;
const Logo = styled.Image`
  width: 50px;
  height: 80px;
`;

const ContactScreen: NavigationStackScreenComponent = () => {
  const urls = {
    web_gomaschool: "https://www.gomaschool.co.kr",
    web_jahanuri: "http://www.jahanuri.net",
    web_hanmuye: "http://www.hanmuye.com",
    web_gomaon: "http://www.gomaon.co.kr",
    channel_youtube: "https://www.youtube.com/channel/UCn1gZg25yEw4WTe__OPu1wA",
    channel_instagram_gomaon: "https://www.instagram.com/gomaon_seoul",
    channel_facebook_gomaon: "https://www.facebook.com/jhonhealing",
    channel_blog_gomaschool: "https://blog.naver.com/jh_onhealing",
    channel_blog_gomaon: "https://blog.naver.com/salt__planet",
    channel_blog_hanmuye: "https://blog.naver.com/hanmuye",
    community_cafe_jahanuri: "https://cafe.naver.com/jahanuri",
    shop_gomashop: "https://www.gomashop.co.kr",
    shop_naturevitameals: "https://www.naturevitameals.co.kr",
  };
  const onPress = (name: string) => {
    console.log(name);
    Linking.canOpenURL(urls[name])
      .then((supported) => {
        if (supported) {
          console.log(urls[name]);
          return Linking.openURL(urls[name]);
        } else {
          return null;
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <ImageBackground
      style={{ width: "100%", height: "100%" }}
      source={require("../images/Contact/Contact.jpg")}
      resizeMode="stretch"
    >
      <Container>
        <TitleBox>
          <Title>공식홈페이지</Title>
        </TitleBox>
        <Box>
          <LogoContainer onPress={() => onPress("web_gomaschool")}>
            <Logo
              resizeMode={"contain"}
              source={require(`../images/Contact/web_gomaschool.png`)}
            />
            <Text>고마스쿨</Text>
          </LogoContainer>
          <LogoContainer onPress={() => onPress("web_jahanuri")}>
            <Logo
              resizeMode={"contain"}
              source={require(`../images/Contact/web_jahanuri.png`)}
            />
            <Text>자하누리</Text>
          </LogoContainer>
          <LogoContainer onPress={() => onPress("web_hanmuye")}>
            <Logo
              resizeMode={"contain"}
              source={require(`../images/Contact/web_hanmuye.png`)}
            />
            <Text>한무예연구소</Text>
          </LogoContainer>
          <LogoContainer onPress={() => onPress("web_gomaon")}>
            <Logo
              resizeMode={"contain"}
              source={require(`../images/Contact/web_gomaon.png`)}
            />
            <Text>고마온</Text>
          </LogoContainer>
        </Box>
        <TitleBox>
          <Title>SNS 채널</Title>
        </TitleBox>
        <Box>
          <LogoContainer onPress={() => onPress("channel_youtube")}>
            <Logo
              resizeMode={"contain"}
              source={require(`../images/Contact/channel_youtube.png`)}
            />
            <Text>@몸공부TV</Text>
          </LogoContainer>
          <LogoContainer onPress={() => onPress("channel_instagram_gomaon")}>
            <Logo
              resizeMode={"contain"}
              source={require(`../images/Contact/channel_instagram_gomaon.png`)}
            />
            <Text>@gomaon_seoul</Text>
          </LogoContainer>
          <LogoContainer onPress={() => onPress("channel_facebook_gomaon")}>
            <Logo
              resizeMode={"contain"}
              source={require(`../images/Contact/channel_facebook_gomaon.png`)}
            />
            <Text>@고마와 건강자립학교</Text>
          </LogoContainer>
        </Box>
        <Box>
          <LogoContainer onPress={() => onPress("channel_blog_gomaschool")}>
            <Logo
              resizeMode={"contain"}
              source={require(`../images/Contact/blog.png`)}
            />
            <Text>고마스쿨</Text>
          </LogoContainer>
          <LogoContainer onPress={() => onPress("channel_blog_gomaon")}>
            <Logo
              resizeMode={"contain"}
              source={require(`../images/Contact/blog.png`)}
            />
            <Text>고마온</Text>
          </LogoContainer>
          <LogoContainer onPress={() => onPress("channel_blog_hanmuye")}>
            <Logo
              resizeMode={"contain"}
              source={require(`../images/Contact/blog.png`)}
            />
            <Text>한무예연구소</Text>
          </LogoContainer>
        </Box>
        <TitleBox>
          <Title>커뮤니티</Title>
        </TitleBox>
        <Box>
          <LogoContainer onPress={() => onPress("community_cafe_jahanuri")}>
            <Logo
              resizeMode={"contain"}
              source={require(`../images/Contact/community_cafe_jahanuri.png`)}
            />
            <Text>자하누리카페</Text>
          </LogoContainer>
        </Box>
        <TitleBox>
          <Title>SHOP</Title>
        </TitleBox>
        <Box>
          <LogoContainer onPress={() => onPress("shop_gomashop")}>
            <Logo
              resizeMode={"contain"}
              source={require(`../images/Contact/shop_gomashop.png`)}
            />
            <Text>고마샵</Text>
          </LogoContainer>
          <LogoContainer onPress={() => onPress("shop_naturevitameals")}>
            <Logo
              resizeMode={"contain"}
              source={require(`../images/Contact/shop_naturevitameals.png`)}
            />
            <Text>네이쳐 비타밀스</Text>
          </LogoContainer>
        </Box>
      </Container>
    </ImageBackground>
  );
};
ContactScreen.navigationOptions = () => ({});

export default ContactScreen;

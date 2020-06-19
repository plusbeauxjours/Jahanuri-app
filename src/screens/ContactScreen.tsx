import React from "react";
import styled from "styled-components";
import { Linking, ImageBackground, ScrollView } from "react-native";
import dimensions from "../constants/dimensions";
import { Ionicons } from "@expo/vector-icons";
import { withNavigation } from "react-navigation";

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.3);
  align-items: center;
  justify-content: center;
  padding-top: 30px;
  padding: 0 10px;
`;
const Box = styled.View`
  flex: 1;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 0 10px;
`;
const Text = styled.Text`
  text-align: center;
  color: white;
  font-size: 14px;
  font-weight: 200;
`;
const TitleBox = styled.View`
  margin: 30px 0 10px 0;
  padding: 15px;
  flex-direction: row;
`;
const Title = styled(Text)`
  font-weight: 600;
  font-size: 20px;
  align-self: center;
  padding: 0 5px;
  color: #ffffff;
  opacity: 0.7;
`;
const Line = styled.View`
  background-color: #999;
  height: 1px;
  flex: 1;
  opacity: 0.4;
  align-self: center;
`;
const RowWhiteSpace = styled.View`
  width: 30px;
`;
const ColumnWhiteSpace = styled.View`
  height: 30px;
`;
const LogoContainer = styled.TouchableOpacity`
  width: 130px;
  align-items: center;
  justify-content: center;
`;
const Logo = styled.Image`
  width: 50px;
  height: 80px;
`;
const IconContainer = styled.TouchableOpacity`
  position: absolute;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  top: 45px;
  left: 10px;
  z-index: 10;
`;
const ContactScreen: React.FC = () => {
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
  const LeftComponent = withNavigation(({ navigation }) => {
    return (
      <IconContainer
        onPress={() =>
          navigation.toggleDrawer
            ? navigation.toggleDrawer()
            : navigation.goBack()
        }
      >
        <Ionicons size={24} name={"ios-menu"} color={"white"} />
      </IconContainer>
    );
  });
  const onPress = (name: string) => {
    Linking.canOpenURL(urls[name])
      .then((supported) => {
        if (supported) {
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
        <ScrollView style={{ width: dimensions.width }}>
          <LeftComponent />
          <ColumnWhiteSpace />
          <TitleBox>
            <Line />
            <Title>공식홈페이지</Title>
            <Line />
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
            <Line />
            <Title>SNS 채널</Title>
            <Line />
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
            <Line />
            <Title>커뮤니티</Title>
            <Line />
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
            <Line />
            <Title>SHOP</Title>
            <Line />
          </TitleBox>
          <Box>
            <RowWhiteSpace />
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
            <RowWhiteSpace />
          </Box>
        </ScrollView>
        <ColumnWhiteSpace />
      </Container>
    </ImageBackground>
  );
};

export default ContactScreen;

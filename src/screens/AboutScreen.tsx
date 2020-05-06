import React from "react";
import styled from "styled-components";
import Swiper from "react-native-swiper";
import { NavigationStackScreenComponent } from "react-navigation-stack";
import { ImageBackground, ScrollView } from "react-native";
import dimensions from "../constants/dimensions";

const Container = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.3);
  align-items: center;
  justify-content: flex-start;
`;
const View = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`;
const WhiteSpace = styled.View`
  height: 30px;
`;
const Text = styled.Text`
  color: white;
  font-size: 14px;
  margin-bottom: 12px;
`;
const Bold = styled(Text)`
  font-size: 18px;
  font-weight: 500;
`;
const TitleBox = styled.View`
  margin-top: 100px;
  align-items: center;
`;
const Title = styled(Text)`
  font-weight: 400;
  font-size: 28px;
`;
const SecondTitle = styled(Title)`
  margin-top: 0px;
`;

const AboutScreen: NavigationStackScreenComponent = () => (
  <Swiper dotColor={"#ffffff"} loop={false}>
    <ImageBackground
      style={{
        width: "100%",
        height: "100%",
      }}
      source={require("../images/AboutImages/FirstPage.jpg")}
      resizeMode="stretch"
    >
      <Container>
        <TitleBox>
          <Title>직관의 몸공부 2주 과정</Title>
        </TitleBox>
        <View>
          <Text>뜻대로 사는 힘을 기르는 생기충전 프로젝트, </Text>
          <Text>습관 혁명으로 백년 면역력 키우기 </Text>
          <WhiteSpace />
          <Text>직관의 몸공부 2주과정은</Text>
          <Text>자연섭생 원리 공부와 함께</Text>
          <Text>먹고 움직이며 호흡하는 ‘생활 습관의 변화’를 통해</Text>
          <Text>‘체력’을 기르고 실제 건강해지는 프로그램입니다.</Text>
          <Text>몸쓰는 원리, 에너지를 만들고 조절하는 원리를 </Text>
          <Text>배우고 익혀 스스로 몸과 마음을 돌보는 힘을 키웁니다. </Text>
          <WhiteSpace />
          <Text>만인의 건강자립을 모토로 20년이상 축적해온</Text>
          <Text>고마스쿨의 자연건강법 노하우, </Text>
          <Text>이론과 실제가 통합된 내 몸 리뉴얼 과정, </Text>
          <Text>직관의 몸공부! 지금 시작해보세요. </Text>
        </View>
      </Container>
    </ImageBackground>
    <ImageBackground
      style={{ width: "100%", height: "100%" }}
      source={require("../images/AboutImages/SecondPage.jpg")}
      resizeMode="stretch"
    >
      <Container>
        <TitleBox>
          <Title>몸공부 구성</Title>
        </TitleBox>
        <View>
          <Text>생활습관 체크리스트, 사전 설문과 체질 등을 분석해 </Text>
          <Text>
            개인 상태에 맞춘 자연건강식단제공과 맞춤 운동 프로그램 진행.
          </Text>
          <WhiteSpace />
          <Bold>1. 자연건강식단</Bold>
          <Text>개별 몸상태에 맞춤으로 구성한 자연섭생식키트</Text>
          <Text>맞춤 섭생식, 천연영양제, 전해질 보충제로 몸의 불균형 해소</Text>
          <WhiteSpace />
          <Bold>2. 1:1 맞춤운동</Bold>
          <Text>근본부터 바로잡는 척추, 경락 운동 실습과 미션</Text>
          <WhiteSpace />
          <Bold>3. 원리 공부</Bold>
          <Text>깊이있고 체계적인 자연 섭생 원리 강의,</Text>
          <Text>
            내 몸과 마음의 증상과 신호 이해하고 스스로 돌보는 방법 익히기
          </Text>
          <WhiteSpace />
          <Bold>4. 습관 길잡이 키트</Bold>
          <Text>식사, 운동, 수면, 체온조절 등 핵심 생활 습관을</Text>
          <Text>기록하고 피드백 관리</Text>
        </View>
      </Container>
    </ImageBackground>
    <ImageBackground
      style={{ width: "100%", height: "100%" }}
      source={require("../images/AboutImages/ThirdPage.jpg")}
      resizeMode="stretch"
    >
      <Container>
        <TitleBox>
          <Title>몸공부 진행</Title>
        </TitleBox>
        <View>
          <Text> 오프라인으로 강의와 운동참여 6회, </Text>
          <Text>온라인과 앱으로 매일 과제 제출과 피드백</Text>
          <WhiteSpace />
          <Text>원리 강의 - 김은숙 원장 (치유본능 저자, 고마스쿨 대표)</Text>
          <Text>
            운동 지도 - 신성욱 소장(한무예 연구소 소장, 고마스쿨 강사)
          </Text>
          <Text>생활 습관 - 고마스쿨의 전문 강사들이 1:1로 관리합니다</Text>
          <WhiteSpace />
          <Bold>특전</Bold>
          <Text>
            -참가자들에게 무료 개인 상담 기회가 제공됩니다.(김은숙 원장)
          </Text>
          <Text>-디톡스와 체온 조절을 돕는 고마 소금방 체험권을 드립니다 </Text>
        </View>
      </Container>
    </ImageBackground>
    <ImageBackground
      style={{ width: "100%", height: "100%" }}
      source={require("../images/AboutImages/FourthPage.jpg")}
      resizeMode="stretch"
    >
      <Container>
        <TitleBox>
          <Title>몸공부,</Title>
          <SecondTitle>이런 분들께 더욱 추천합니다</SecondTitle>
        </TitleBox>
        <View>
          <Text>1.&nbsp;자연적인 방법으로 건강을 회복하고 싶은 분</Text>
          <WhiteSpace />
          <Text>2.&nbsp;근본적인 몸과 마음의 변화를 경험하고 싶은 분</Text>
          <WhiteSpace />
          <Text>
            3.&nbsp;쏟아지는 건강 정보 속에서 자기 중심을 잡고 싶은 분
          </Text>
          <WhiteSpace />
          <Text>4.&nbsp;건강 을 증진하고 삶의 질을 높이고 싶은 분 </Text>
          <WhiteSpace />
          <Text>5.&nbsp;불면증, 만성피로, 소화불량, 수족냉증, 피부문제 등</Text>
          <Text>크고 작은 몸의 증상으로 어려움을 겪고 있는 분</Text>
          <WhiteSpace />
          <Text>6.&nbsp;우울증, 무기력, 갱년기, 분노조절장애, 번아웃 등</Text>
          <Text>의 문제를 해결하고 싶은 분</Text>
        </View>
      </Container>
    </ImageBackground>
    <ImageBackground
      style={{ width: "100%", height: "100%" }}
      source={require("../images/AboutImages/FifthPage.jpg")}
      resizeMode="stretch"
    >
      <Container>
        <ScrollView style={{ width: dimensions.width }}>
          <TitleBox>
            <Title>몸공부 일정과 비용, 신청방법</Title>
          </TitleBox>
          <WhiteSpace />
          <WhiteSpace />
          <View>
            <Bold>일시</Bold>
            <Text>2020년 5월 25일 ~ 6월 5일 </Text>
            <Text>낮반 : 월, 수,금 11:00 ~ 14:00 총 6회</Text>
            <Text>저녁반: 화, 목, 토 7:30~10:00 </Text>
            <WhiteSpace />
            <Bold>장소</Bold>
            <Text>고마스쿨 교육관 (자하누리)</Text>
            <WhiteSpace />
            <Bold>참가비</Bold>
            <Text>45만원</Text>
            <WhiteSpace />
            <Bold>입금계좌</Bold>
            <Text>우리 은행 1002-050-722288</Text>
            <Text>장진기 (카드 결제 가능 링크)</Text>
            <WhiteSpace />
            <Bold>신청</Bold>
            <Text>신청링크 들어가서 신청서 작성후 참가비 입금</Text>
            <WhiteSpace />
            <Bold>신청/문의</Bold>
            <Text>02-876-2236 / 010-4052-2236</Text>
            <Text>카카오톡 @자하누리</Text>
            <WhiteSpace />
            <Text>
              1:1 관리로 이루어지는 프로그램 특성상 소수 정예로 진행됩니다.
            </Text>
            <Text>인원 제한이 있으니 신청을 서둘러주세요. </Text>
            <WhiteSpace />
            <WhiteSpace />
            <WhiteSpace />
          </View>
        </ScrollView>
      </Container>
    </ImageBackground>
  </Swiper>
);
AboutScreen.navigationOptions = () => ({});

export default AboutScreen;

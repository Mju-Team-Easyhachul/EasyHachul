import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";
import Header from "../../Components/Header";

/* Top 관련 Style*/
// Top 호선, 역이름 표시 담당 Container
const TopContainer = styled.div`
  background-color: #18a51f;
  justify-content: center;
  display: grid;
  height: 140px;
  margin-top: 2%;
  margin-left: 2%;
  margin-right: 2%;
  border-radius: 50px;
`;
// Top 배경 위에 타원
const LineDisplay = styled.div`
  background-color: #ffffff;
  height: 130px;
  width: 320px;
  border: solid;
  border-color: #84e0cb;
  border-radius: 50px;
  position: relative;
`;
// 배경색있는 노선숫자
const LineDisplayText1 = styled.div`
  text-align: center;
  margin-top: 12%;
  margin-left: 35%;
  background-color: #18a51f;
  border: solid;
  border-radius: 20px;
  border-color: #ffffff;
  display: inline-block;
  text-align: center;
  font-size: 50px;
`;
// 노선숫자
const LineDisplayText2 = styled.div`
  text-align: center;
  display: inline-block;
  font-size: 40px;
`;

/* Top 아래관련 Style*/
// 역정보, 열차시간표, 주변지도 선택관련 Style
const ChoiceContainer = styled.div`
  display: grid;
  border-radius: 50px;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  margin-top: 5px;
  background-color: #353535;
  height: 100px;
  color: #ffffff;
  margin-left: 2%;
  margin-right: 2%;
`;
const ChoiceText = styled.div`
  text-align: center;
  font-size: 35px;
  margin-top: 40px;
`;

/* Middle 관련 Style*/
// Middle Text&Divider Style
const Divider = styled.hr`
  width: 95%;
`;
const MiddleText1 = styled.div`
  margin-top: 50px;
  margin-left: 3%;
  font-size: 30px;
`;
const MiddleText2 = styled.div`
  display: inline;
  margin-top: 20px;
  margin-left: 3%;
  font-size: 30px;
`;

/* Bottom 관련 Style*/
// Bottom 위치한 Text Style
const BottomText = styled.div`
  color: #ffffff;
  margin-top: 8px;
  text-align: center;
  font-size: 30px;
`;
// Bottom 평일,토요일,공휴일
const BottomContainer1 = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 3%;
  margin-left: 2%;
  margin-right: 2%;
`;
const DayDisplay = styled.div`
  background-color: #353535;
  height: 40px;
  width: 100%;
  border-radius: 50px;
`;

//Bottom 노선,종착역,첫차,막차 및 정보칸
const BottomContainer2 = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  margin-left: 2%;
  margin-right: 2%;
`;
const LineInfoDisplay = styled.div`
  background-color: #84e0cb;
  height: 40px;
  width: 100%;
  margin-top: 1%;
  border-radius: 50px;
`;
const LineInfoDetail = styled.div`
  margin-top: 1%;
  background-color: #ffffff;
  height: 950%;
  width: 99%;
  border: solid;
  border-color: #535353;
  border-radius: 30px;
`;

const DetailPresenter = () => (
  <>
    <Helmet>
      <title>Detail | EasyHachul</title>
    </Helmet>
    <Header></Header>

    <TopContainer>
      <LineDisplay>
        <LineDisplayText1>1</LineDisplayText1>
        <LineDisplayText2>101</LineDisplayText2>
      </LineDisplay>
    </TopContainer>

    <ChoiceContainer>
      <ChoiceText>역정보</ChoiceText>
      <ChoiceText>열차시간표</ChoiceText>
      <ChoiceText>주변지도</ChoiceText>
    </ChoiceContainer>

    <MiddleText1>기본정보</MiddleText1>
    <Divider></Divider>
    <MiddleText2>역이름: 201</MiddleText2>

    <BottomContainer1>
      <DayDisplay>
        <BottomText>평일</BottomText>
      </DayDisplay>
      <DayDisplay>
        <BottomText>토요일</BottomText>
      </DayDisplay>
      <DayDisplay>
        <BottomText>공휴일</BottomText>
      </DayDisplay>
    </BottomContainer1>

    <BottomContainer2>
      <LineInfoDisplay>
        <BottomText>노선</BottomText>
      </LineInfoDisplay>
      <LineInfoDisplay>
        <BottomText>종착역</BottomText>
      </LineInfoDisplay>
      <LineInfoDisplay>
        <BottomText>첫차</BottomText>
      </LineInfoDisplay>
      <LineInfoDisplay>
        <BottomText>막차</BottomText>
      </LineInfoDisplay>
      <LineInfoDetail />
      <LineInfoDetail />
      <LineInfoDetail />
      <LineInfoDetail />
    </BottomContainer2>
  </>
);

export default DetailPresenter;

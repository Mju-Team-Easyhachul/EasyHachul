import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";
import Logo from "../../Components/Logo";
import LeftIcon from "../../assets/Quoteleft.png";
import RightIcon from "../../assets/Quoteright.png";
import ArrowIcon from "../../assets/Forwardarrow.png";
import BackgroundImage from "../../assets/homebackground.png";


//EASY하철 전체
const Titlecontainer = styled.div `
  padding: 9% 38% 0% 38%;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 900px) {
   margin-top : 13.3%;
  }
`;

//왼쪽따옴표 아이콘
const Icon1 = styled.img.attrs({
  src: LeftIcon,
})`
  width: 44px;
  height: 44px;
  @media screen and (max-width: 900px) {
    width : 36px;
    height : 36px;
  }
`;

//오른쪽따옴표 아이콘
const Icon2 = styled.img.attrs({
  src: RightIcon,
})`
  width: 44px;
  height: 44px;
  @media screen and (max-width: 900px) {
    width : 36px;
    height : 36px;
  }
`;

//로고 이미지
const Logocontainer = styled.div `
  margin-left: 2.3%;
  width: 67px;
  height: 67px;
  odjext-fit:contain;
  @media screen and (max-width: 900px) {
    width : 10.1%;
    margin-right : 25%
  }
`;

//EASY하철 텍스트
const Title = styled.div `
  width: 272px;
  height: 63px;
  font-size: 55px;
  line-height: 1.15;
  text-align: left;
  color: black;
  margin-left : 2.3%;
  margin-right : 2.3%;
  white-space:nowrap;
  @media screen and (max-width: 900px) {
    font-size : 35px;
  }
`;

//부가설명 문구 전체
const TextContainer = styled.div `
  width: 538px;
  height: 80px;
  display : block;
  margin : 6% auto;
  @media screen and (max-width: 900px) {
   margin-top : 4.9%;
   width:67%;
   
  }
`;

//부가설명 텍스트
const Text = styled.div `
  text-align : center;
  line-height: 1.14;
  font-weight: 500;
  -webkit-text-stroke: 1px #000000;
  font-size: 34px;
  color: black;
  @media screen and (max-width: 900px) {
    font-size: 16px;
  }
`;

//버튼전체
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (max-width: 900px) {
   display: block ;
   margin-top:12.7%;
  }
`;

//버튼모양
const Button = styled.div`
  width: 231px;
  height: 231px;
  border-radius: 50%;
  border: none;
  background-color: #84e0cb;
  margin: 4% 8.9% 0 0;
  @media screen and (max-width: 900px) {
    width: 202px;
    height: 55px;
    border-radius: 5px;
    margin : 5% auto ;
    display : flex;
  }
`;

//마지막버튼
const Button1 = styled.div`
  width: 231px;
  height: 231px;
  border-radius: 50%;
  border: none;
  background-color: #84e0cb;
  margin-top : 4%;
  @media screen and (max-width: 900px) {
    width: 202px;
    height: 55px;
    border-radius: 5px;
    margin : 0 auto ;
    display : flex;
  }
`;

//버튼 텍스트
const ButtonText = styled.div`
  width: 135px;
  height: 40px;
  font-size: 35px;
  color: black;
  margin: 36.3% 21.6% 8.2% 19.9%;
  text-align:center;

  @media screen and (max-width: 900px) {
    font-size: 15px;
    -webkit-text-stroke: 1px #000000;
    margin: 15% auto auto ;
  }
`;

//버튼 텍스트(노선로 다운로드)
const ButtonText1 = styled.div`
  width: 116px;
  height: 70px;
  font-size: 30px;
  -webkit-text-stroke: 1px #000000;
  color: black;
  margin: 30.7% 24.6% -7.8% 25.1%;
  text-align:center;
  
  @media screen and (max-width: 900px) {
    width: 135px;
    height: 40px;
    font-size: 15px;
    -webkit-text-stroke: 1px #000000;
    margin: 15% 0 0 13.5%;
  }
`;

//화살표이미지박스
const ArrowContainer = styled.div`
  width: 21.6%;
  height: 21.6%;
  margin: 8.2% 36.7% auto auto;
  @media screen and (max-width: 900px) {
    width:27px;
    height:27px;
    margin : auto 10%;
  }
`;

//화살표 이미지
const Icon3 = styled.img.attrs({
  src: ArrowIcon,
})`
  width: 100%;
  height: 100%;
`;

//배경화면
const BackImage = styled.div`

  background-image: url(${BackgroundImage});
  background-size: cover;
  position: fixed;
  left: 0;
  top: 0;
  right:0;
  bottom:0;
  @media screen and (max-width: 900px) {
    background-size: 100% 100%;
    background-repeat: no-repeat;
    position: absolute; 
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const DownloadButtonContainer = styled.div `
  display: flex;
  justify-content: center;
`;

const DownloadButton = styled.div `
width: 327px;
height: 64px;
border-radius: 4px;
margin-top: 4%;
background-color: #7ad9c4;
display : flex;
@media screen and (max-width: 900px) {
  width: 202px;
  height: 55px;
  border-radius: 5px;
  margin : 5% auto ;
}
`;

const DownloadButtonText = styled.div `
width: 196px;
height: 25px;
font-size: 29px;
text-align : center;
margin: auto 0 auto 18%;
@media screen and (max-width: 900px) {
  width: 113px;
  height: 40px;
  font-size: 15px;
  -webkit-text-stroke: 1px #000000;
  margin: 10% 0 0 13.5%;
}
`;

const DownloadArrow = styled.div `
  width: 24px;
  height: 24px;
  margin: auto 9.1% auto 5.5%;
  @media screen and (max-width: 900px) {
    width:27px;
    height:27px;
    margin : auto 9%;
  }
`;

const HomePresenter = () => (

  <>

    <Helmet>
      <title>Home | EasyHachul</title>
    </Helmet>

    <BackImage>


      <Titlecontainer>
        <Icon1></Icon1>
        <Logocontainer>
          <Logo width="67px" height="67px" />
        </Logocontainer>
        <Title>EASY하철</Title>
        <Icon2></Icon2>
      </Titlecontainer>

      <TextContainer>
        <Text>
          가장 쉽고 빠른 지하철 길찾기,
          EASY하철에서 바로 확인해보세요!
      </Text>
      </TextContainer>

      <ButtonContainer>

        <Button>
          <Link to="Search" style={{ textDecoration: "none" }}>
            <ButtonText>경로검색</ButtonText>
          </Link>
          <ArrowContainer>
            <Icon3></Icon3>
          </ArrowContainer>
        </Button>

        <Button>
          <Link to="Download" style={{ textDecoration: "none" }}>
            <ButtonText1>노선로 다운로드</ButtonText1>
          </Link>
          <ArrowContainer>
            <Icon3></Icon3>
          </ArrowContainer>
        </Button>

        <Button>
          <Link to="Report" style={{ textDecoration: "none" }}>
            <ButtonText>민원신고</ButtonText>
          </Link>
          <ArrowContainer>
            <Icon3></Icon3>
          </ArrowContainer>
        </Button>

        <Button1>
          <Link to="Faq" style={{ textDecoration: "none" }}>
            <ButtonText>FAQ</ButtonText>
          </Link>
          <ArrowContainer>
            <Icon3></Icon3>
          </ArrowContainer>
        </Button1>

      </ButtonContainer>
      <DownloadButtonContainer>
        <DownloadButton>
        <DownloadButtonText>노선도보러가기</DownloadButtonText>
        <DownloadArrow><Icon3></Icon3></DownloadArrow>
        </DownloadButton>
        </DownloadButtonContainer>
    </BackImage>

  </>
);


export default HomePresenter;

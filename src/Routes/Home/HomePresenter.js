import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import Logo from '../../Components/Logo';
import LeftIcon from '../../assets/Quoteleft.png';
import RightIcon from '../../assets/Quoteright.png';
import ArrowIcon from '../../assets/Forwardarrow.png';
import BackgroundImage from '../../assets/homebackground.png';

//EASY하철 전체
const Titlecontainer = styled.div`
  padding: 5% 38% 0% 38%;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 900px) {
    margin-top: 13.3%;
    width: 35%;
    padding: 5% 30% 0% 33%;
  }
`;

//왼쪽따옴표 아이콘
const Icon1 = styled.img.attrs({
  src: LeftIcon,
})`
  width: 44px;
  height: 44px;
  @media screen and (max-width: 900px) {
    width: 40px;
    height: 36px;
  }
`;

//오른쪽따옴표 아이콘
const Icon2 = styled.img.attrs({
  src: RightIcon,
})`
  width: 44px;
  height: 44px;
  @media screen and (max-width: 900px) {
    width: 36px;
    height: 36px;
  }
`;

//로고 이미지
const Logocontainer = styled.div`
  margin-left: 2.3%;
  width: 67px;
  height: 67px;
  @media screen and (max-width: 900px) {
    width: 10.1%;
    margin-right: 25%;
  }
`;

//EASY하철 텍스트
const Title = styled.div`
  width: 272px;
  height: 63px;
  font-size: 55px;
  line-height: 1.15;
  text-align: left;
  color: black;
  margin-left: 2.3%;
  margin-right: 2.3%;
  white-space: nowrap;
  @media screen and (max-width: 900px) {
    font-size: 35px;
  }
`;

//부가설명 문구 전체
const TextContainer = styled.div`
  width: 538px;
  height: 80px;
  display: block;
  margin: 6% auto;
  @media screen and (max-width: 900px) {
    margin-top: 4.9%;
    width: 67%;
  }
`;

//부가설명 텍스트
const Text = styled.div`
  text-align: center;
  line-height: 1.14;
  font-weight: 500;
  -webkit-text-stroke: 1px #000000;
  font-size: 34px;
  color: black;
  @media screen and (max-width: 900px) {
    font-size: 19px;
    margin-bottom: 2%;
  }
`;

//버튼전체
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 60%;
  margin: 0 auto;
  justify-content: space-between;
  @media screen and (max-width: 900px) {
    display: block;
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
  display: inline-block;

  @media screen and (max-width: 900px) {
    width: 202px;
    height: 55px;
    line-height: 0;
    border-radius: 5px;
    margin: 5% auto;
    display: flex;
  }
`;

//마지막버튼
const Button1 = styled.div`
  width: 231px;
  height: 231px;
  border-radius: 50%;
  border: none;
  background-color: #84e0cb;
  margin-top: 4%;
  display: inline-block;
  margin-left: 15%;
  @media screen and (max-width: 900px) {
    width: 202px;
    height: 55px;
    border-radius: 5px;
    margin: 0 auto;
    display: flex;
  }
`;

//버튼 텍스트
const ButtonText = styled.div`
  width: 135px;
  height: 40px;
  line-height: 0;
  font-size: 35px;
  color: black;
  margin: 36% 21% 8% 19%;
  text-align: center;

  @media screen and (max-width: 900px) {
    font-size: 15px;
    -webkit-text-stroke: 1px #000000;
    margin: 15% auto auto;
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
  text-align: center;

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
    width: 27px;
    height: 27px;
    display: inline-block;
    margin: auto 9%;
  }
`;

//화살표 이미지
const Icon3 = styled.img.attrs({
  src: ArrowIcon,
})`
  width: 100%;
  height: 100%;
  @media screen and (max-width: 900px) {
    margin-top: 5%;
  }
`;

//배경화면
const BackImage = styled.div`
  background-image: url(${BackgroundImage});
  background-size: cover;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  @media screen and (max-width: 900px) {
    background-size: 100% 100%;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const DownloadButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const DownloadButton = styled.div`
  width: 327px;
  height: 64px;
  border-radius: 4px;
  margin-top: 4%;
  background-color: #7ad9c4;
  display: flex;
  @media screen and (max-width: 900px) {
    width: 202px;
    height: 55px;
    border-radius: 5px;
    margin: 5% auto;
  }
`;

const DownloadButtonText = styled.div`
  width: 196px;
  height: 25px;
  font-size: 29px;
  text-align: center;
  color: black;
  margin: auto 0 auto 18%;
  &:visited {
    text-decoration: none;
    color: black;
  }
  @media screen and (max-width: 900px) {
    width: 113px;
    font-size: 15px;
    -webkit-text-stroke: 1px #000000;
    margin: 10% 0 0 13.5%;
  }
`;

const DownloadArrow = styled.div`
  width: 24px;
  height: 24px;
  margin: auto 9.1% auto 5.5%;
  @media screen and (max-width: 900px) {
    width: 27px;
    height: 27px;
    display: inline-block;
    margin: auto 9%;
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
        <Text>가장 쉽고 빠른 지하철 길찾기,</Text>
        <Text> EASY하철에서 </Text>
        <Text>바로 확인해보세요!</Text>
      </TextContainer>

      <ButtonContainer>
        <Link to="/Search" style={{ textDecoration: 'none' }}>
          <Button>
            <ButtonText>경로검색</ButtonText>
            <ArrowContainer>
              <Icon3></Icon3>
            </ArrowContainer>
          </Button>
        </Link>

        <Link to="/Download" style={{ textDecoration: 'none' }}>
          <Button>
            <ButtonText1>노선로 다운로드</ButtonText1>
            <ArrowContainer>
              <Icon3></Icon3>
            </ArrowContainer>
          </Button>
        </Link>

        <Link to="/Report" style={{ textDecoration: 'none' }}>
          <Button>
            <ButtonText>민원신고</ButtonText>
            <ArrowContainer>
              <Icon3></Icon3>
            </ArrowContainer>
          </Button>
        </Link>

        <Link to="/Faq" style={{ textDecoration: 'none' }}>
          <Button1>
            <ButtonText>FAQ</ButtonText>
            <ArrowContainer>
              <Icon3></Icon3>
            </ArrowContainer>
          </Button1>
        </Link>
      </ButtonContainer>
      <Link to="/Faq" style={{ textDecoration: 'none' }}>
        <DownloadButtonContainer>
          <DownloadButton>
            <DownloadButtonText>노선도보러가기</DownloadButtonText>
            <DownloadArrow>
              <Icon3></Icon3>
            </DownloadArrow>
          </DownloadButton>
        </DownloadButtonContainer>
      </Link>
    </BackImage>
  </>
);

export default HomePresenter;

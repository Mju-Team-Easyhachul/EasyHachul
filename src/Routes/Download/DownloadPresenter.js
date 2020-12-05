import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';

const DownloadHeader = styled.div`
  background-color: #84e0cb;
  color: white;
  text-align: center;
  height: 60px;
  line-height: 60px;
  font-size: 20px;
`;

const DownloadPanel = styled.div`
  background-color: rgba(132, 224, 203, 0.6);
  border: solid 1px #707070;
  width: 740px;
  height: 615px;
  margin: 0 auto;
  margin-top: 5%;
  display: flex;
  flex-direction: column;
  @media (min-width: 320px) and (max-width: 480px) {
    width: 100%;
    margin-top: 0;
  }
`;

const DownloadTextContainer = styled.div`
  margin-left: 10%;
  margin-top: 15%;
`;
const DownloadText1 = styled.div`
  font-size: 25px;
  margin-bottom: 3%;
`;
const DownloadText2 = styled.div`
  font-size: 40px;
  margin-bottom: 3%;
`;
const DownloadText3 = styled.div`
  font-size: 15px;
`;

const ButtonContainer = styled.div`
  margin: 0 auto;
  margin-top: 30%;
`;

const ButtonText = styled.div`
  font-size: 15px;
  margin-bottom: 10%;
`;

const Button = styled.div`
  width: 80%;
  margin: 0 auto;
  background-color: #7ad9c4;
  text-align: center;
  font-size: 30px;
  color: white;
  border-radius: 5px;
  height: 45px;
  line-height: 45px;
  &:hover {
    border: solid 1px white;
  }
`;

const DownloadPresenter = () => (
  <>
    <Helmet>
      <title>Download | EasyHachul</title>
    </Helmet>
    <Header></Header>
    <DownloadHeader>지하철 노선도 이미지 다운로드</DownloadHeader>
    <DownloadPanel>
      <DownloadTextContainer>
        <DownloadText1>Download the latest version</DownloadText1>
        <DownloadText2>노선도 파일 크기 : 70KB</DownloadText2>
        <DownloadText3>Release data December 7, 2020</DownloadText3>
      </DownloadTextContainer>
      <ButtonContainer>
        <ButtonText>아래의 버튼을 눌러 지하철 노선도 이미지를 다운로드</ButtonText>

        <a style={{ textDecoration: 'none' }} href={process.env.PUBLIC_URL + '/files/myFile.png'} download>
          <Button>→</Button>
        </a>
      </ButtonContainer>
    </DownloadPanel>
    <Footer></Footer>
  </>
);

export default DownloadPresenter;

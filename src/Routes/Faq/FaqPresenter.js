import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';

const FaqBoardContainer = styled.div`
  height: 1008px;
  width: 80%;
  padding-top: 0.1%;
  position: relative;
  margin-top: 3%;
  left: 28%;
  @media screen and (max-width: 900px) {
    height: 730px;
    width: 375px;
    position: relative;
    top: 4.2%;
    left: 0;
  }
  z-index: 0;
`;

const Spacer = styled.div`
  @media screen and (max-width: 900px) {
    height: 500px;
  }
`;
//반려동물
const FaqBoard1 = styled.div`
  height: 20%;
  width: 45%;
  margin-bottom: 4.76%;
  padding: 3% 10.9% 5.8% 3.9%;
  border-radius: 50px;
  background-color: #b6e6db;
  @media screen and (max-width: 900px) {
    width: 374.6px;
    height: 35%;
    border-radius: 35px;
    margin-bottom: 15%;
    padding: 0 0;
  }
`;

//부정승차
const FaqBoard2 = styled.div`
  height: 20%;
  width: 45%;
  margin-bottom: 4.76%;
  padding: 3% 10.9% 5.8% 3.9%;
  border-radius: 50px;
  background-color: #b6e6db;
  @media screen and (max-width: 900px) {
    width: 374.6px;
    height: 51%;
    border-radius: 35px;
    margin-bottom: 15%;
    padding: 0 0;
  }
`;

//분실물
const FaqBoard3 = styled.div`
  height: 20%;
  width: 45%;
  margin-bottom: 4.76%;
  padding: 3% 10.9% 5.8% 3.9%;
  border-radius: 50px;
  background-color: #b6e6db;
  @media screen and (max-width: 900px) {
    width: 374.6px;
    height: 45%;
    border-radius: 35px;
    margin-bottom: 15%;
    padding: 0 0;
  }
`;

const FaqText1 = styled.div`
  font-size: 21px;
  font-weight: bold;
  text-align: left;
  margin-bottom: 2%;
  @media screen and (max-width: 900px) {
    height: 8%;
    font-size: 15px;
    margin-left: 8%;
    line-height: 30px;
    padding-top: 3%;
  }
`;

const FaqText2 = styled.div`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 2%;
  @media screen and (max-width: 900px) {
    font-size: 12px;
    margin-left: 8%;
  }
`;

const FaqText3 = styled.div`
  width: 683px;
  height: 182px;
  font-size: 15px;
  line-height: 24px;
  @media screen and (max-width: 900px) {
    width: 287px;
    height: 124px;
    font-size: 14px;
    margin-left: 11.7%;
    line-height: 1.4;
  }
`;

const FaqTextline = styled.div`
  margin-bottom: 3%;
`;

const FaqPresenter = () => (
  <>
    <Helmet>
      <title>FAQ | EasyHachul</title>
    </Helmet>
    <Header></Header>

    <FaqBoardContainer>
      <FaqBoard1>
        <FaqText1>반려 동물과 대중교통 이용, 이것만 알아두세요!</FaqText1>
        <FaqText2>Easy하철 알림</FaqText2>
        <FaqText3>
          <FaqTextline>
            이번 포스팅에서는 반려동물과 함께 대중교통을 이용할 때 알아두면 좋을 이용규정을 소개합니다.
          </FaqTextline>
          <FaqTextline>★ 이동장비(케이지)에 넣는 등 안전조치를 취한 후 탑승하기</FaqTextline>
          <FaqTextline>
            (「도시철도법」 제32조, 「광역철도 여객운송 약관」 제31조제2호, 제32조제1항, 「서울교통공사 여객운송약관」
            제34조제1항제4호).
          </FaqTextline>
        </FaqText3>
      </FaqBoard1>
      <FaqBoard2>
        <FaqText1>대중교통 부정승차 시, 이렇게 처벌받아요!</FaqText1>
        <FaqText2>Easy하철 알림</FaqText2>
        <FaqText3>
          <FaqTextline>
            <p>지하철과 버스는 정해진 운임요금과 승차방법으로 편리함을 제공하는 교통 수단입니다.</p>★ 지하철에 부정승차
            할 경우 승차 구간에 해당하는 운임 외에 30배의 범위에서 부가운임을 징수할 수 있습니다 (「철도사업법」
            제10조제1항) 부가운임을 납부하지 않을 경우 형사고발 될 수 있습니다.
          </FaqTextline>
          <FaqTextline>
            ★ 시내버스 부정승차로 적발되면 그 운임 또는 부족하게 지불한 운임과 그 운임의 30배를 부가금으로 지불해야
            하며, 부가금을 현금으로 납부해야 합니다[「시내버스 운송사업 약관」(서울시버스정책과-15198호, 2020. 6. 1.
            발령, 2020. 6. 11. 시행) 제13조의2]. 부가운임을 납부하지 않을 경우 형사고발 될 수 있습니다.
          </FaqTextline>
        </FaqText3>
      </FaqBoard2>
      <FaqBoard3>
        <FaqText1>지하철에 물건을 두고 내렸을 때 이렇게!</FaqText1>
        <FaqText2>Easy하철 알림</FaqText2>
        <FaqText3>
          <FaqTextline>
            대중교통을 타고 가다가 목적지에 황급히 내리거나, 다른곳에 집중하다 내려서 물건을 깜빡 두고 내리는 경험
            있으실겁니다. 선물을 담은 쇼핑백, 비가왔던 날의 우산, 바지 뒷주머니의 지갑 등 소중한 물건을 두고 내린 순간을
            알게되면 굉장히 당혹스러움을 느끼며 어떻게 찾아야할지 우왕좌왕하게 됩니다.
          </FaqTextline>
          <FaqTextline>
            대중교통 이용 중 물건을 두고 내렸을 때 알아두면 좋은 경찰청 유실물 통합 포털 LOST112 를 소개합니다 !
          </FaqTextline>
          <FaqTextline>★ (경찰청 유실물 통합포털 시스템 : www.lost112.go.kr)</FaqTextline>
        </FaqText3>
      </FaqBoard3>
    </FaqBoardContainer>
    <Footer></Footer>
    <Spacer></Spacer>
  </>
);

export default FaqPresenter;

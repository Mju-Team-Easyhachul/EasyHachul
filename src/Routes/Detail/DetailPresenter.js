import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Helmet from 'react-helmet';
import Header from '../../Components/Header';
import MapContent from './MapContent';
import { propTypes } from 'react-bootstrap/esm/Image';

const TopContainer = styled.div`
  @media screen and (max-width: 900px) {
    height: 5%;
  }
  width: 79%;
  height: 10%;
  margin: 1% 10% 0 10.5%;
  background: ${props => props.color || 'black'};
`;
const LineNumber = styled.div`
  @media (max-width: 900px) {
    height: 92%;
  }
  width: 20%;
  height: 96%;
  margin: 0 0 0 40%;
  border: 2px solid;
  background: white;
  border-radius: 30px;
`;
const LineNumberFont = styled.h1`
  @media (max-width: 900px) {
    margin-top: 20%;
    font-size: 20px;
  }
  margin-top: 11%;
  font-size: 45px;
  text-align: center;
`;

const SelectContainer = styled.div`
  @media screen and (max-width: 900px) {
    margin: 1% 10% 1% 10.4%;
  }
  width: 80%;
  height: 10%;
  margin: 0.5% 10% 1% 10.4%;
`;
const SelectButton = styled.button`
  @media screen and (max-width: 900px) {
    font-size: 16px;
    height: 80%;
  }
  width: 33%;
  height: 100%;
  background: ${props => props.color || '#303747'};
  font-size: 45px;
  color: white;
`;
const SelectInfoButton = styled.button`
  @media screen and (max-width: 900px) {
    font-size: 16px;
    height: 80%;
  }
  width: 33%;
  height: 100%;
  background: ${props => props.color || 'black'};
  font-size: 45px;
  color: white;
`;

const BottomContainer = styled.div`
  width: 80%;
  height: 80%;
  margin: 1px 10% 1% 10.4%;
`;
const BaseInfoDivider = styled.hr`
  width: 98.6%;
  border: solid;
  margin: 1px 10% 1% 0;
`;
const BaseInfoText = styled.h2`
  @media (max-width: 900px) {
    font-size: 20px;
  }
  font-size: 25px;
  text-align: left;
`;

const InfoButton = styled.button`
  @media (max-width: 900px) {
    font-size: 17px;
    height: 7%;
  }
  width: 24.8%;
  height: 10%;
  background: #303747;
  font-size: 35px;
  color: white;
`;
const LineInfoDetail = styled.div`
  @media (max-width: 930px) {
    height: 20%;
    width: 23.5%;
    border-radius: 0px;
  }
  background-color: #ffffff;
  margin-top: 1%;
  margin-bottom: 2%;
  height: 50%;
  width: 24.5%;
  display: inline-block;
  border: 2px solid;
  border-color: #535353;
  border-radius: 30px;
`;
const LineInfoDivider = styled.hr`
  @media (max-width: 930px) {
    border: 0;
  }
  align: center;
  border: 1px solid #717171;
  margin-top: 24%;
`;
const LineInfoFont1 = styled.h1`
  @media screen and (max-width: 930px) {
    font-size: 24px;
    margin-top: 30px;
    margin-bottom: 20px;
  }
  text-align: center;
  font-size: 23.74px;
  margin-top: 24%;
`;
const LineInfoFont2 = styled.h1`
  @media screen and (max-width: 930px) {
    font-size: 24px;
    margin: auto;
  }
  text-align: center;
  font-size: 23.74px;
  margin-top: 24%;
`;
const LineInfoFont3 = styled.h1`
  @media screen and (max-width: 930px) {
    font-size: 11px;
    margin-top: 30px;
    margin-bottom: 20px;
  }
  text-align: center;
  font-size: 23.74px;
  margin-top: 24%;
`;
const LineInfoFont4 = styled.h1`
  @media screen and (max-width: 930px) {
    font-size: 11px;
    margin: auto;
  }
  text-align: center;
  font-size: 23.74px;
  margin-top: 24%;
`;

const DetailPresenter = props => (
  <>
    <Helmet>
      <title>Detail | EasyHachul</title>
    </Helmet>
    <Header />

    {/* 역 번호 */}
    <TopContainer color={props.LineColor}>
      <LineNumber>
        <LineNumberFont>{props.LineNumber}</LineNumberFont>
      </LineNumber>
    </TopContainer>

    {/* 버튼 선택 */}
    <SelectContainer>
      {props.Active === '역정보' ? (
        <SelectInfoButton color={props.LineColor} onClick={(() => props.setActive('역정보'), () => props.setActive())}>
          역정보
        </SelectInfoButton>
      ) : (
        <SelectButton onClick={() => props.setActive('역정보')}>역정보</SelectButton>
      )}
      {props.Active === '열차시간표' ? (
        <SelectInfoButton
          color={props.LineColor}
          onClick={(() => props.setActive('열차시간표'), () => props.setActive())}
        >
          열차시간표
        </SelectInfoButton>
      ) : (
        <SelectButton onClick={() => props.setActive('열차시간표')}>열차시간표</SelectButton>
      )}
      {props.Active === '주변지도' ? (
        <SelectInfoButton
          color={props.LineColor}
          onClick={(() => props.setActive('주변지도'), () => props.setActive())}
        >
          주변지도
        </SelectInfoButton>
      ) : (
        <SelectButton onClick={() => props.setActive('주변지도')}>주변지도</SelectButton>
      )}
    </SelectContainer>

    {/* 기본정보 */}
    {props.Active === '역정보' && (
      <BottomContainer>
        <BaseInfoText>기본정보</BaseInfoText>
        <BaseInfoDivider />
        <BaseInfoText>역이름 : {props.LineNumber} </BaseInfoText>
      </BottomContainer>
    )}

    {/* 열차시간표 */}
    {props.Active === '열차시간표' && (
      <BottomContainer>
        <InfoButton>노선</InfoButton>
        <InfoButton>종착역</InfoButton>
        <InfoButton>첫차</InfoButton>
        <InfoButton>막차</InfoButton>
        <LineInfoDetail>
          <LineInfoFont1>{props.RouteUp}</LineInfoFont1>
          <LineInfoDivider />
          <LineInfoFont2>{props.RouteDown}</LineInfoFont2>
        </LineInfoDetail>
        <LineInfoDetail>
          <LineInfoFont1>{props.LastStationUp}</LineInfoFont1>
          <LineInfoDivider />
          <LineInfoFont2>{props.LastStationDown}</LineInfoFont2>
        </LineInfoDetail>
        <LineInfoDetail>
          <LineInfoFont3>(평일)05:20 (주말)06:00</LineInfoFont3>
          <LineInfoDivider />
          <LineInfoFont4>(평일)05:20 (주말)06:00</LineInfoFont4>
        </LineInfoDetail>
        <LineInfoDetail>
          <LineInfoFont3>(평일)24:20 (주말)23:30</LineInfoFont3>
          <LineInfoDivider />
          <LineInfoFont4>(평일)24:20 (주말)23:30</LineInfoFont4>
        </LineInfoDetail>
      </BottomContainer>
    )}

    {/* 주변지도 */}
    {props.Active === '주변지도' && <MapContent></MapContent>}
  </>
);

// prop type 안맞으면 오류 나도록 지정
DetailPresenter.propTypes = {
  LineColor: PropTypes.string.isRequired,
  LineNumber: PropTypes.string.isRequired,
  LastStationUp: PropTypes.string.isRequired,
  LastStationDown: PropTypes.string.isRequired,
  RouteUp: PropTypes.string.isRequired,
  RouteDown: PropTypes.string.isRequired,
  Active: PropTypes.string.isRequired,
  setActive: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      nodeId: PropTypes.string.isRequired,
    }),
  }),
};

export default DetailPresenter;

import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Header from "../../Components/Header";
import Clock from "../../assets/Clock.png";
import Cancel from "../../assets/Cancel.png";
import UpDownArrow from "../../assets/Up Down arrow.png";
import Search from "../../assets/Search.png";
import Space1 from "../../assets/Space1.png";
import Space2 from "../../assets/Space2.png";

const SearchHeader = styled.div`
  display: flex;
`;

const SearchTab = styled.div`
  width: 640px;
  height: 70px;
  background-color: #303747;
  border: solid 1px #ffffff;
  color: white;
  text-align: center;
  line-height: 70px;
  font-size: 30px;

  @media (min-width: 320px) and (max-width: 480px){
    width: 160px;
    height: 50px;
    line-height: 50px;
    font-size: 22px;
  }
`;

const ActiveSearchTab = styled.div`
  width: 640px;
  height: 70px;
  background-color: #84e0cb;
  border: solid 1px #ffffff;
  color: white;
  text-align: center;
  line-height: 70px;
  font-size: 30px;

  @media (min-width: 320px) and (max-width: 480px){
    width: 160px;
    height: 50px;
    line-height: 50px;
    font-size: 22px;
  }
`;

const SearchPanel = styled.div`
  height: 260px;
  border: solid 1px #ffffff;
  background-color: #84e0cb;
  text-align: center;
  padding: 8px;

  @media (min-width: 320px) and (max-width: 480px){
    height: 180px;
  }
`;

const SearchList = styled.div``;

const SearchImg = styled.img`
  vertical-align: middle;

  @media (min-width: 320px) and (max-width: 480px){
    width: 28px;
    height: 28px;
  }
`;

const SearchInput = styled.input`
  width: 664px;
  height: 60px;
  color: white;
  font-size: 27px;
  background-color: #84e0cb;
  border-radius: 10px;
  border: solid 3px #ffffff;
  margin: 8px;

  ::placeholder,
  ::-webkit-input-placeholder {
    left: 10px;
    color: white;
  }
  :-ms-input-placeholder {
    left: 10px;
    color: white;
  }

  @media (min-width: 320px) and (max-width: 480px){
    width: 80%;
    height: 40px;
  }
`;
const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  
  @media (min-width: 320px) and (max-width: 480px){
    display: block;
  }
`;

const SearchResult = styled.div`
  width: 30%;
  height: 100%;
  margin: 0;
  padding: 0;

  @media (min-width: 320px) and (max-width: 480px){
    width: 100%;
    height: 20%;
  }
`;

const SearchResultFont1 = styled.p`
  font-size: 45px;
  margin: 28px;
  text-align: center;

  @media (min-width: 320px) and (max-width: 480px){
    font-size: 22px;
    margin: 20px;
  }
`;

const SearchResultFont2 = styled.p`
  font-size: 40px;
  margin: 28px;
  text-align: center;

  @media (min-width: 320px) and (max-width: 480px){
    font-size: 22px;
    margin: 20px;
  }
`;

const SearchResultMap = styled.div`
  width: 70%;
  height: 100%;
  margin: 50px;
  font-size: 50px;
  text-align: center;

  @media (min-width: 320px) and (max-width: 480px){
    width: 375px;
    height: 60px;
  }
`;

const SearchShareButton = styled.div`
  width: 166px;
  height: 66px;
  border-radius: 16px;
  border: solid 2px #2699fb;
  text-align: center;
  margin: 28px auto;
  color: #2699fb;
  line-height: 70px;

  @media (min-width: 320px) and (max-width: 480px){
    width: 207px;
    height: 50px;
    border-radius: 16px;
    margin: 10px auto;
    line-height: 50px;
  }
`;

const SharePanel = styled.div`
  background-color: #ffffff;
  border: solid 2px #84e0cb;
  border-radius: 44px;
  width: 40%;
  height: 703px;
  margin: 0 auto;
  margin-top: 4%;
  display: flex;
  flex-direction: column;

  @media (min-width: 320px) and (max-width: 480px){
    width: 90%;
    height: 42%;
    border-radius: 44px;
    margin: 100px auto;
  }
`;

const ShareInput = styled.input`
  width: 478px;
  height: 60px;
  border-radius: 10px;
  border: solid 3px #84e0cb;
  margin: 0 auto;

  @media (min-width: 320px) and (max-width: 480px){
    width: 80%;
    height: 40px;
  }
`;

const ShareButton = styled.div`
  width: 166px;
  height: 66px;
  border-radius: 16px;
  border: solid 2px #84e0cb;
  text-align: center;
  line-height: 70px;
  color: #84e0cb;
  margin: 60px auto;

  @media (min-width: 320px) and (max-width: 480px){
    width: 134px;
    height: 46px;
    border-radius: 16px;
    border: solid 2px #84e0cb;
    font-weight: bold;
    line-height: 50px;
    margin: 30px auto;
  }
`;

const SearchPresenter = (props) => (
  <>
    <Helmet>
      <title>경로검색 | EasyHachul</title>
    </Helmet>

    <Header></Header>

    <SearchHeader>
      {props.ActiveTab === "최소시간" ? (
        <ActiveSearchTab onClick={() => props.setActiveTab("최소시간")}>
          최소시간
        </ActiveSearchTab>
      ) : (
        <SearchTab onClick={() => props.setActiveTab("최소시간")}>
          최소시간
        </SearchTab>
      )}
      {props.ActiveTab === "최단거리" ? (
        <ActiveSearchTab onClick={() => props.setActiveTab("최단거리")}>
          최단거리
        </ActiveSearchTab>
      ) : (
        <SearchTab onClick={() => props.setActiveTab("최단거리")}>
          최단거리
        </SearchTab>
      )}
      {props.ActiveTab === "최소비용" ? (
        <ActiveSearchTab onClick={() => props.setActiveTab("최소비용")}>
          최소비용
        </ActiveSearchTab>
      ) : (
        <SearchTab onClick={() => props.setActiveTab("최소비용")}>
          최소비용
        </SearchTab>
      )}
    </SearchHeader>

    {props.Share === false ? (
      <SearchPanel>
        <SearchList>
          <SearchImg src={Clock} />
          <SearchInput
           type="time" 
           placeholder="출발시간 설정"
           onChange={props.setDepartureTime}
           ></SearchInput>
          <SearchImg src={Search} onClick={props.setActiveSearchResult} />
        </SearchList>
        <SearchList>
          <SearchImg src={Cancel} />
          <SearchInput
            placeholder="출발지 검색"
            value={props.DepartureStation}
            onChange={props.setDepartureStation}
          ></SearchInput>
          <SearchImg src={Space1} />
        </SearchList>
        <SearchList>
          <SearchImg src={UpDownArrow} />
          <SearchInput
            placeholder="도착지 검색"
            value={props.ArrivalStation}
            onChange={props.setArrivalStation}
          ></SearchInput>
          <SearchImg src={Space2} />
        </SearchList>
      </SearchPanel>
    ) : (
      <SharePanel>
        <SearchResultFont1>{props.ActiveTab}</SearchResultFont1>
        <SearchResultFont2>
          {props.SearchDepartureStation} → {props.SearchArrivalStation}
        </SearchResultFont2>
        <SearchResultFont2>~~분, ~~개 정류장 이동</SearchResultFont2>
        <SearchResultFont2>~~시, ~~분 도착예정</SearchResultFont2>
        <ShareInput placeholder="이메일 입력"></ShareInput>
        <ShareButton>이메일 보내기</ShareButton>
      </SharePanel>
    )}

    {props.SearchResult ? (
      <Container>
        <SearchResult>
          <SearchResultFont1>{props.ActiveTab}</SearchResultFont1>
          <SearchResultFont2>
            {props.SearchDepartureStation} → {props.SearchArrivalStation}
          </SearchResultFont2>
          <SearchResultFont2>~~분, ~~개 정류장 이동</SearchResultFont2>
          <SearchResultFont2>~~시, ~~분 도착예정</SearchResultFont2>
          <SearchShareButton onClick={() => props.setActiveShare()}>
            도착시간 공유
          </SearchShareButton>
        </SearchResult>

        <SearchResultMap>지하철 노선도가 들어갈 자리</SearchResultMap>
      </Container>
    ) : (
      <Container></Container>
    )}
  </>
);
SearchPresenter.propTypes = {
  ActiveTab: PropTypes.string.isRequired,
  DepartureTime: PropTypes.string.isRequired,
  DepartureStation: PropTypes.number.isRequired,
  ArrivalStation: PropTypes.number.isRequired,
  SearchDepartureTime: PropTypes.string.isRequired,
  SearchDepartureStation: PropTypes.number.isRequired,
  SearchArrivalStation: PropTypes.number.isRequired,
  SearchResult: PropTypes.bool.isRequired,
  Share: PropTypes.bool.isRequired,

  setActiveTab: PropTypes.func.isRequired,
  setDepartureTime: PropTypes.func.isRequired,
  setDepartureStation: PropTypes.func.isRequired,
  setArrivalStation: PropTypes.func.isRequired,
  setActiveSearchResult: PropTypes.func.isRequired,
  setActiveShare: PropTypes.func.isRequired,
};

export default SearchPresenter;

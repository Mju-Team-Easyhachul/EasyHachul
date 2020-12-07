import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import Header from '../../Components/Header';
import Clock from '../../assets/Clock.png';
import Cancel from '../../assets/Cancel.png';
import CancelRed from '../../assets/CancelRed.png';
import UpDownArrow from '../../assets/Up Down arrow.png';
import Search from '../../assets/Search.png';
import Space1 from '../../assets/Space1.png';
import Space2 from '../../assets/Space2.png';

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

  @media (min-width: 320px) and (max-width: 480px) {
    width: 34%;
    height: 100%;
    line-height: 230%;
    font-size: 135%;
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

  @media (min-width: 320px) and (max-width: 480px) {
    width: 34%;
    height: 100%;
    line-height: 230%;
    font-size: 135%;
  }
`;

const SearchPanel = styled.div`
  height: 260px;
  border: solid 1px #ffffff;
  background-color: #84e0cb;
  text-align: center;
  padding: 8px;

  @media (min-width: 320px) and (max-width: 480px) {
    height: 35%;
  }
`;

const SearchList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchTimeFont = styled.div`
  width: 45px;
  height: 35px;
  line-height: 33px;
  color: #303747;
  margin-top: -30px;
  font-size: 23px;

  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 18px;
  }
`;

const SearchCancelImg = styled.img`
  vertical-align: middle;
  width: 40px;
  height: 40px;

  @media (min-width: 320px) and (max-width: 480px) {
    width: 10%;
    height: 10%;
    margin-left: 1%;
  }
`;

const SearchChangeImg = styled.img`
  vertical-align: middle;
  width: 45px;
  height: 45px;
  color: #303747;

  @media (min-width: 320px) and (max-width: 480px) {
    width: 10%;
    height: 10%;
    margin-left: 1%;
  }
`;

const SearchSpaceImg = styled.img`
  vertical-align: middle;
  width: 45px;
  height: 40px;

  @media (min-width: 320px) and (max-width: 480px) {
    width: 12%;
    height: 12%;
  }
`;

const SearchButton = styled.div`
  vertical-align: middle;
  width: 45px;
  height: 35px;
  border-radius: 16px;
  border: solid 2px #303747;
  text-align: center;
  line-height: 37px;
  color: #303747;
  margin-top: 0px;

  @media (min-width: 320px) and (max-width: 480px) {
    -webkit-appearance: none;
    width: 13%;
    height: 5%;
    border-radius: 16px;
    font-weight: bold;
    font-size: 13px;
    line-height: 300%;
    margin: 0% auto;
  }
`;

const SearchInput = styled.input`
  width: 664px;
  height: 60px;
  color: #303747;
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

  @media (min-width: 320px) and (max-width: 480px) {
    -webkit-appearance: none;
    width: 70%;
    height: 40%;
  }
`;
const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;

  @media (min-width: 320px) and (max-width: 480px) {
    display: block;
  }
`;

const SearchResult = styled.div`
  width: 30%;
  height: 100%;
  margin: 0;
  padding: 0;

  @media (min-width: 320px) and (max-width: 480px) {
    width: 100%;
    height: 40%;
  }
`;

const SearchFont1 = styled.p`
  font-size: 45px;
  margin: 28px;
  text-align: center;

  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 150%;
    margin: 5%;
  }
`;

const SearchFont2 = styled.p`
  font-size: 40px;
  margin: 28px;
  text-align: center;

  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 130%;
    margin: 5%;
  }
`;

const SearchResultMap = styled.div`
  width: 70%;
  height: 100%;
  margin: 50px;
  font-size: 50px;
  text-align: center;
  border: solid 2px #000000;

  @media (min-width: 320px) and (max-width: 480px) {
    margin: 10%;
    width: 80%;
    height: 100%;
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

  @media (min-width: 320px) and (max-width: 480px) {
    width: 50%;
    height: 15%;
    border-radius: 16px;
    margin: 5% auto;
    line-height: 320%;
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

  @media (min-width: 320px) and (max-width: 480px) {
    width: 90%;
    height: 50%;
    border-radius: 44px;
    margin: 25% auto;
  }
`;

const ShareInput = styled.input`
  width: 478px;
  height: 60px;
  border-radius: 10px;
  border: solid 3px #84e0cb;
  margin: 0 auto;

  @media (min-width: 320px) and (max-width: 480px) {
    width: 80%;
    height: 10%;
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

  @media (min-width: 320px) and (max-width: 480px) {
    -webkit-appearance: none;
    width: 40%;
    height: 11%;
    border-radius: 16px;
    border: solid 2px #84e0cb;
    font-weight: bold;
    line-height: 300%;
    margin: 10% auto;
  }
`;

const RecentlySearch = styled.div`
  width: 30%;
  height: 30%;
  margin: 0;
  padding: 0;

  @media (min-width: 320px) and (max-width: 480px) {
    width: 100%;
    height: 30%;
  }
`;

const RecentlySearchList = styled.div`
  display: flex;
`;

const CancelImg = styled.img`
  vertical-align: middle;
  margin-top: 35px;
  width: 20px;
  height: 20px;

  @media (min-width: 320px) and (max-width: 480px) {
    margin-top: 6%;
    width: 4%;
    height: 4%;
  }
`;

const SearchPresenter = props => (
  <>
    <Helmet>
      <title>경로검색 | EasyHachul</title>
    </Helmet>

    <Header></Header>

    <SearchHeader>
      {props.ActiveTab === '최소시간' ? (
        <ActiveSearchTab onClick={() => props.setActiveTab('최소시간')}>최소시간</ActiveSearchTab>
      ) : (
        <SearchTab onClick={() => props.setActiveTab('최소시간')}>최소시간</SearchTab>
      )}
      {props.ActiveTab === '최단거리' ? (
        <ActiveSearchTab onClick={() => props.setActiveTab('최단거리')}>최단거리</ActiveSearchTab>
      ) : (
        <SearchTab onClick={() => props.setActiveTab('최단거리')}>최단거리</SearchTab>
      )}
      {props.ActiveTab === '최소비용' ? (
        <ActiveSearchTab onClick={() => props.setActiveTab('최소비용')}>최소비용</ActiveSearchTab>
      ) : (
        <SearchTab onClick={() => props.setActiveTab('최소비용')}>최소비용</SearchTab>
      )}
    </SearchHeader>

    {props.Share === false ? (
      <SearchPanel>
        <SearchList>
          <SearchTimeFont>출발시간</SearchTimeFont>
          {/* <SearchImg src={Clock} /> */}
          <SearchInput
            type="time"
            placeholder="출발시간을 입력해 주세요."
            value={props.DepartureTime}
            onChange={props.setDepartureTime}
          ></SearchInput>
          <SearchSpaceImg src={Space1} />
        </SearchList>
        <SearchList>
          <SearchCancelImg src={Cancel} onClick={() => props.deleteDepArrStation()} />
          <SearchInput
            placeholder="출발지 검색"
            value={props.DepartureStation}
            onChange={props.setDepartureStation}
            onKeyPress={props.pressEnter}
          ></SearchInput>
          <SearchSpaceImg src={Space1} />
        </SearchList>
        <SearchList>
          <SearchChangeImg src={UpDownArrow} onClick={() => props.changeDepArrStation()} />
          <SearchInput
            placeholder="도착지 검색"
            value={props.ArrivalStation}
            onChange={props.setArrivalStation}
            onKeyPress={props.pressEnter}
          ></SearchInput>
          <SearchButton onClick={props.setActiveSearchResult}>검색</SearchButton>
        </SearchList>
      </SearchPanel>
    ) : (
      <SharePanel>
        <SearchFont1>{props.ActiveTab}</SearchFont1>
        <SearchFont2>
          {props.SearchDepartureStation} → {props.SearchArrivalStation}
        </SearchFont2>
        <SearchFont2>
          {props.DijkstraMinute}분, {props.DijkstraSecond}초 소요, {props.DijkstraStationNum}개 정류장 이동
        </SearchFont2>
        <SearchFont2>{props.DijkstraArrivalTime} 도착예정</SearchFont2>
        <ShareInput onChange={props.handleChange} placeholder="이메일 입력"></ShareInput>
        <ShareButton onClick={e => props.sendEmail(e)}>이메일 보내기</ShareButton>
      </SharePanel>
    )}

    {props.SearchResult ? (
      <Container>
        <SearchResult>
          <SearchFont1>{props.ActiveTab}</SearchFont1>
          <SearchFont2>
            {props.SearchDepartureStation} → {props.SearchArrivalStation}
          </SearchFont2>
          <SearchFont2>
            {props.DijkstraMinute}분, {props.DijkstraSecond}초 소요, {props.DijkstraStationNum}개 정류장 이동
          </SearchFont2>
          <SearchFont2>{props.DijkstraDistance}M</SearchFont2>
          <SearchFont2>{props.DijkstraMoney}원</SearchFont2>
          <SearchFont2>{props.DijkstraArrivalTime} 도착예정</SearchFont2>
          <SearchShareButton onClick={() => props.setActiveShare()}>도착시간 공유</SearchShareButton>
        </SearchResult>

        <SearchResultMap>지하철 노선도가 들어갈 자리</SearchResultMap>
      </Container>
    ) : props.Share === false ? (
      <Container>
        <RecentlySearch>
          <SearchFont1>최근검색</SearchFont1>
          {props.SearchList.map((Search, index) => (
            <RecentlySearchList key={index}>
              <SearchFont2 key={index} onClick={() => props.updateSearchInput(index)}>
                {Search}
              </SearchFont2>
              <CancelImg src={CancelRed} key={index} onClick={() => props.deleteSearchList(index)} />
            </RecentlySearchList>
          ))}
        </RecentlySearch>
      </Container>
    ) : props.Share === false ? (
      <Container>
        <RecentlySearch>
          <SearchFont1>최근검색</SearchFont1>
          {props.SearchList.map((Search, index) => (
            <RecentlySearchList key={index}>
              <SearchFont2 key={index} onClick={() => props.updateSearchInput(index)}>
                {Search}
              </SearchFont2>
              <CancelImg src={CancelRed} key={index} onClick={() => props.deleteSearchList(index)} />
            </RecentlySearchList>
          ))}
        </RecentlySearch>

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
  SearchList: PropTypes.array.isRequired,
  DijkstraMinute: PropTypes.string.isRequired,
  DijkstraSecond: PropTypes.string.isRequired,
  DijkstraStationNum: PropTypes.number.isRequired,
  DijkstraArrivalTime: PropTypes.string.isRequired,
  DijkstraDistance: PropTypes.number.isRequired,
  DijkstraMoney: PropTypes.number.isRequired,

  setActiveTab: PropTypes.func.isRequired,
  setDepartureTime: PropTypes.func.isRequired,
  setDepartureStation: PropTypes.func.isRequired,
  setArrivalStation: PropTypes.func.isRequired,
  deleteDepArrStation: PropTypes.func.isRequired,
  changeDepArrStation: PropTypes.func.isRequired,
  setActiveSearchResult: PropTypes.func.isRequired,
  pressEnter: PropTypes.func.isRequired,
  setActiveShare: PropTypes.func.isRequired,
  saveSearchList: PropTypes.func.isRequired,
  deleteSearchList: PropTypes.func.isRequired,
  updateSearchInput: PropTypes.func.isRequired,
  handleChange: PropTypes.func,
  sendEmail: PropTypes.func,
};

export default SearchPresenter;

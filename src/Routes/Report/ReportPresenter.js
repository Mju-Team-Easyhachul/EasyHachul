import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import Header from '../../Components/Header';
import Report from '../../assets/report.png';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap';

const LogoContainer = styled.div`
  width: 205px;
  margin: 0 auto;
  margin-top: 3%;
`;

const ReportLogo = styled.img``;

const TextContainer = styled.div`
  width: 570px;
  margin: 0 auto;
  margin-top: 1%;
  display: flex;
  flex-direction: row;
`;
const Quote = styled.div`
  color: #00b181;
  font-size: 80px;
  display: inline-block;
`;
const Text = styled.div`
  padding: 10px;
  font-size: 60px;
  color: black;
  display: inline-block;
`;

const ReportContainer = styled.div`
  width: 820px;
  margin: 0 auto;
  margin-top: 6%;
  display: flex;
  flex-direction: row;
`;

const ReportItem = styled.div`
  width: 220px;
  height: 220px;
  border-radius: 50%;
  background-color: #8fe4d1;
  text-align: center;
  &:nth-child(2) {
    margin-left: 80px;
    margin-right: 80px;
  }
`;

const ReportText = styled.div`
  font-size: 25px;
  margin-top: ${props => (props.marginTop ? '20%' : '30%')};
`;

const ReportButton = styled.div`
  display: inline-block;
  margin-top: 10%;
  color: white;
`;

const ReportPresenter = props => (
  <>
    <Helmet>
      <title>민원신고 | EasyHachul</title>
    </Helmet>
    <Header></Header>
    <LogoContainer>
      <ReportLogo src={Report} alt={'Report logo'}></ReportLogo>
    </LogoContainer>
    <TextContainer>
      <Quote>"</Quote>
      <Text>민원을 신고하세요</Text>
      <Quote>"</Quote>
    </TextContainer>
    <ReportContainer>
      {props.reportText.map((item, index) => (
        <ReportItem key={item.index}>
          {index === 0 ? (
            <ReportText key={item} marginTop={true}>
              <div dangerouslySetInnerHTML={{ __html: item.replace(new RegExp('\n', 'g'), '<br/>') }} />
            </ReportText>
          ) : (
            <ReportText key={item} marginTop={false}>
              <div dangerouslySetInnerHTML={{ __html: item.replace(new RegExp('\n', 'g'), '<br/>') }} />
            </ReportText>
          )}

          <ReportButton onClick={e => props.handleReportButton(e)}>신고하기 </ReportButton>
        </ReportItem>
      ))}
    </ReportContainer>
  </>
);

ReportPresenter.propTypes = {
  reportText: PropTypes.array.isRequired,
  handleReportButton: PropTypes.func.isRequired,
};

export default ReportPresenter;

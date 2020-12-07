import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import Report from '../../assets/report.png';
import PropTypes from 'prop-types';
import Modal from '../../Components/Modal';

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
`;
const LogoContainer = styled.div`
  width: 205px;
  margin: 0 auto;
  margin-top: 3%;

  @media (min-width: 320px) and (max-width: 480px) {
    margin: 0 auto;
    margin-left: 33%;
  }
`;

const ReportLogo = styled.img.attrs({
  src: Report,
})`
  @media (min-width: 320px) and (max-width: 480px) {
    margin: 0 auto;
    width: 130px;
  }
`;

const TextContainer = styled.div`
  margin-left: 35%;
  margin-top: 1%;
  display: flex;
  flex-direction: row;
  @media (min-width: 320px) and (max-width: 480px) {
    text-align: center;
    margin-left: 10%;
  }
`;
const Quote = styled.div`
  color: #00b181;
  font-size: 80px;
  display: inline-block;
  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 50px;
  }
`;
const Text = styled.div`
  padding: 10px;
  font-size: 60px;
  color: black;
  display: inline-block;
  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 30px;
  }
`;

const ReportContainer = styled.div`
  margin: 0 auto;
  margin-top: 6%;
  display: flex;
  width: 45%;
  flex-direction: row;
  @media (min-width: 320px) and (max-width: 480px) {
    flex-direction: column;
  }
`;

const ReportItem = styled.div`
  width: 220px;
  height: 220px;
  border-radius: 50%;
  background-color: #8fe4d1;
  text-align: center;
  &:hover {
    opacity: 80%;
  }
  &:nth-child(2) {
    margin-left: 80px;
    margin-right: 80px;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    margin: 0 auto;
    width: 100%;
    height: 150px;
    border-radius: 3%;
    margin-bottom: 20px;
    &:nth-child(2) {
      margin: 0 auto;
      margin-bottom: 20px;
      margin-right: 0;
    }
  }
`;

const ReportText = styled.div`
  font-size: 25px;
  margin-top: ${props => (props.marginTop ? '20%' : '30%')};
  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 20px;
  }
`;

const ReportButton = styled.div`
  display: inline-block;
  margin-top: 10%;
  color: white;
`;

const Spacer = styled.div`
  @media screen and (max-width: 900px) {
    height: 100px;
  }
`;

const ReportPresenter = props => (
  <>
    <Helmet>
      <title>민원신고 | EasyHachul</title>
    </Helmet>
    <Header></Header>
    <Container>
      <LogoContainer>
        <ReportLogo alt={'Report logo'}></ReportLogo>
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

            <ReportButton onClick={e => props.showModal(e)}>신고하기 &gt;</ReportButton>
          </ReportItem>
        ))}
      </ReportContainer>
    </Container>
    <Modal modalText={props.modalText} visible={props.isModalOpen} closeModal={props.showModal}>
      {props.modalText}
    </Modal>
    <Footer></Footer>
    <Spacer></Spacer>
  </>
);

ReportPresenter.propTypes = {
  showModal: PropTypes.func,
  isModalOpen: PropTypes.bool,
  modalText: PropTypes.string,
  reportText: PropTypes.array.isRequired,
  handleReportButton: PropTypes.func.isRequired,
};

export default ReportPresenter;

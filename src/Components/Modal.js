import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Report from '../assets/report.png';
import * as emailjs from 'emailjs-com';

const ModalWrapper = styled.div`
  box-sizing: border-box;
  display: ${props => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
`;

const ModalOverlay = styled.div`
  box-sizing: border-box;
  display: ${props => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;

const ModalInner = styled.div`
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #fff;
  border-radius: 10px;
  width: 360px;
  max-width: 480px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  padding: 40px 20px;
`;

const ContentsContainer = styled.div`
  position: relative;
`;
const CloseButton = styled.span`
  position: absolute;
  top: 0;
  right: 3%;
  @media (min-width: 320px) and (max-width: 480px) {
    position: absolute;
    top: 0;
    right: 3%;
  }
`;
const ReportLogo = styled.img.attrs({
  src: Report,
})`
  width: 150px;
  margin: 0 auto;
  margin-left: 27%;
  text-align: center;
  @media (min-width: 320px) and (max-width: 480px) {
    width: 70px;
    margin: 0 auto;
    margin-left: 38%;
    text-align: center;
  }
`;

const ReportPanel = styled.div`
  @media (min-width: 320px) and (max-width: 480px) {
    height: 200px;
  }
`;
const TextContainer = styled.div`
  margin-bottom: 3px;
  margin-top: 10px;
  font-size: 25px;
  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 20px;
  }
`;
const SendButton = styled.input`
  bottom: 0;
  position: relative;
  border-radius: 3%;
  width: 50%;
  margin-left: 25%;
  background: #1aab8a;
  color: #fff;
  border: none;
  height: 60px;
  font-size: 1em;
  padding: 0 2em;
  cursor: pointer;
  transition: 800ms ease all;
  outline: none;
  &:hover {
    background: #fff;
    color: #1aab8a;
  }
  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    height: 2px;
    width: 0;
    background: #1aab8a;
    transition: 400ms ease all;
  }
  &:after {
    right: inherit;
    top: inherit;
    left: 0;
    bottom: 0;
  }
  &:hover:before,
  &:hover:after {
    width: 100%;
    transition: 800ms ease all;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    -webkit-appearance: none;
  }
  font-weight: bold;
`;

const Form = styled.form``;

const Input = styled.textarea`
  border: 3px solid #85e0cb;
  border-radius: 3%;
  height: 160px;
  width: 100%;
  &:focus {
    outline: none;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    width: 90%;
  }
`;

class Modal extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { className: '', visible: false, children: '', sendText: '', modalText: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  closeModal() {
    this.setState({ visible: !this.state.visible });
  }

  handleChange(event) {
    this.setState({ sendText: event.target.value });
  }

  handleSubmit() {
    if (this.state.sendText.length === 0) {
      alert('민원사항을 적어주세요');
    } else {
      this.sendFeedback(process.env.REACT_APP_EMAILJS_TEMPLATE_KEY, {
        title: this.props.modalText,
        message_html: this.state.sendText,
        from_name: 'EASY 하철',
        reply_to: this.state.sendText,
      });
    }
  }

  sendFeedback(templateId, variables) {
    emailjs
      .send('dev.noah0316@gmail.com', templateId, variables, process.env.REACT_APP_EMAILJS_KEY)
      .then(res => {
        alert('관리자에게 이메일 제출이 완료되었습니다.');
        console.log('Email successfully sent!');
      })
      // Handle errors here however you like, or use a React error boundary
      .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err));
  }

  render() {
    console.log('이메일키' + process.env.REACT_APP_EMAILJS_TEMPLATE_KEY);
    const { className, children } = this.props;
    return (
      <>
        <ModalOverlay visible={this.props.visible} />
        <ModalWrapper className={className} tabIndex="-1" visible={this.props.visible}>
          <ModalInner tabIndex="0" className="modal-inner">
            <ContentsContainer>
              <CloseButton onClick={e => this.props.closeModal(e)}>X</CloseButton>
              <ReportLogo></ReportLogo>
              <TextContainer>{children}</TextContainer>
              <ReportPanel>
                <Form onSubmit={this.handleSubmit}>
                  <Input
                    onChange={this.handleChange}
                    style={{ fontSize: '20px' }}
                    placeholder={((<br />), `어떤 사항이 불편하신가요?`)}
                  ></Input>
                  <SendButton type={'submit'} value={'이메일 보내기'}></SendButton>
                </Form>
              </ReportPanel>
            </ContentsContainer>
          </ModalInner>
        </ModalWrapper>
      </>
    );
  }
}

Modal.propTypes = {
  className: PropTypes.string,
  visible: PropTypes.bool,
  children: PropTypes.string,
  closeModal: PropTypes.func,
  modalText: PropTypes.string,
};

export default Modal;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  @media (min-width: 320px) and (max-width: 480px) {
    position: relative;
  }
`;
const FooterContainer = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 60px;
  padding: 15px;
  background-color: #2d4b5a;
  @media (min-width: 320px) and (max-width: 480px) {
    position: sticky;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;

const FooterText = styled.p`
  color: white;
  line-height: 50px;
  margin-left: 3%;
`;
class Footer extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  render() {
    return (
      <>
        <Container>
          <FooterContainer>
            <FooterText>MJU (Nature) © 2020</FooterText>
          </FooterContainer>
        </Container>
      </>
    );
  }
}

export default Footer;

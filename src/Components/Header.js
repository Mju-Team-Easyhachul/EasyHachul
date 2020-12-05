import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from './Logo';

const HeaderContainer = styled.div`
  position: sticky;
  top: 0;
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  z-index: 100;
  border-bottom: solid 1px grey;
  @media (max-width: 900px) {
    height: 50px;
    line-height: 50px;
    margin-top: 3%;
  }
`;

const LogoContainer = styled.div`
  @media (max-width: 900px) {
    height: 50px;
  }
  height: 70px;
`;

const HeaderText = styled.div`
  @media (max-width: 900px) {
    font-size: 25px;
    line-height: 50px;
  }
  color: #84e0cb;
  line-height: 70px;
  margin-left: 2%;
  font-size: 30px;
`;

class Header extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  render() {
    return (
      <HeaderContainer>
        <Link to="Home">
          <LogoContainer>
            <Logo width="65px" height="65px" />
          </LogoContainer>
        </Link>
        <HeaderText>EASY하철</HeaderText>
      </HeaderContainer>
    );
  }
}

export default Header;

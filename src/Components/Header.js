import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from './Logo';

const HeaderContaienr = styled.div`
  position: sticky;
  top: 0;
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-bottom: solid 0.3px grey;
`;

const LogoContainer = styled.div`
  height: 70px;
`;

const HeaderText = styled.div`
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
      <HeaderContaienr>
        <Link to="Home">
          <LogoContainer>
            <Logo width="65px" height="65px" />
          </LogoContainer>
        </Link>
        <HeaderText>EASY하철</HeaderText>
      </HeaderContaienr>
    );
  }
}

export default Header;

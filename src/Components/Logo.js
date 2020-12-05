import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import logoPath from '../assets/logo.png';

const RestIcon = styled.img.attrs({
  src: logoPath,
})`
  @media (max-width: 900px) {
    width: 45px;
    height: 45px;
  }
  width: ${props => props.width};
  height: ${props => props.height};
`;

const Logo = (width, height) => (
  <>
    <RestIcon width={width} height={height}></RestIcon>
  </>
);

Logo.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};

export default Logo;

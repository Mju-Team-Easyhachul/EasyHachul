import React from 'react';
import Header from '../../Components/Header';
import RouteMap from './RouteMap';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import Footer from '../../Components/Footer';

const MapContainer = styled.div`
  @media (max-width: 900px) {
    height: 100%;
    width: 100%;
    overflow: scroll;
  }
`;

const RouteMapPresenter = () => (
  <>
    <Helmet>
      <title>Home | EasyHachul</title>
    </Helmet>
    <Header />
    <MapContainer>
      <RouteMap />
    </MapContainer>
    <Footer></Footer>
  </>
);

export default RouteMapPresenter;

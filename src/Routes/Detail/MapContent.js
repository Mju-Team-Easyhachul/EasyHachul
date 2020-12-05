/*global kakao*/
import React, { Component } from 'react';
import styled from 'styled-components';

class MapContent extends Component {
  componentDidMount() {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://dapi.kakao.com/v2/maps/sdk.js?appkey=본인의앱키&autoload=false';
    document.head.appendChild(script);

    script.onload = () => {
      kakao.maps.load(() => {
        let container = document.getElementById('Mymap');
        let options = {
          center: new kakao.maps.LatLng(37.50454335514392, 127.04894963305051),
          level: 2,
        };
        const map = new window.kakao.maps.Map(container, options);
        let markerPosition = new kakao.maps.LatLng(37.50454335514392, 127.04894963305051);
        let marker = new kakao.maps.Marker({
          position: markerPosition,
        });
        marker.setMap(map);
      });
    };
  }
  render() {
    return <MapContents id="Mymap"></MapContents>; // 이부분이 지도를 띄우게 될 부분.
  }
}

const MapContents = styled.div`
  width: 79%;
  height: 60%;
  margin-top: 3%;
  margin-left: 10.5%;
`;

export default MapContent;

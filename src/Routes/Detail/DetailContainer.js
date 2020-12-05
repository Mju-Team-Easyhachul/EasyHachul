/*global kakao*/
import React, { Component } from 'react';
import DetailPresenter from './DetailPresenter';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      LineNumber: '101',
      LineLastNumber1: '102',
      LineLastNumber2: '123',
      LineColor: '#18A51F',
      Active: ' ',
    };
    this.setActive = this.setActive.bind(this);
  }

  setActive = e => {
    this.setState({
      Active: e,
    });
  };

  render() {
    return (
      <DetailPresenter
        LineColor={this.state.LineColor}
        LineNumber={this.state.LineNumber}
        LineLastNumber1={this.state.LineLastNumber1}
        LineLastNumber2={this.state.LineLastNumber2}
        Active={this.state.Active}
        setActive={this.setActive}
      />
    );
  }
}

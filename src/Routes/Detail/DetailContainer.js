/*global kakao*/
import React, { Component } from 'react';
import DetailPresenter from './DetailPresenter';
import PropTypes from 'prop-types';

export class DetailContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      LineNumber: this.props.match.params.nodeId.substring(1),
      LineLastNumber1: '102',
      LineLastNumber2: '123',
      LineColor:
        this.props.match.params.nodeId.substring(1, 2) === '1'
          ? '#18A51D'
          : this.props.match.params.nodeId.substring(1, 2) === '2'
          ? '#091DA1'
          : this.props.match.params.nodeId.substring(1, 2) === '3'
          ? '#8B1C1C'
          : this.props.match.params.nodeId.substring(1, 2) === '4'
          ? '#FF0707'
          : this.props.match.params.nodeId.substring(1, 2) === '5'
          ? '#2A83D1'
          : this.props.match.params.nodeId.substring(1, 2) === '6'
          ? '#E9D83E'
          : this.props.match.params.nodeId.substring(1, 2) === '7'
          ? '#9DF39A'
          : this.props.match.params.nodeId.substring(1, 2) === '8'
          ? '#07CCFF'
          : '#471098',
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
    console.log(this.props.match.params.nodeId.substring(1, 2));
    console.log(this.props.match.params.nodeId.substring(1));
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
DetailContainer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      nodeId: PropTypes.string.isRequired,
    }),
  }),
};

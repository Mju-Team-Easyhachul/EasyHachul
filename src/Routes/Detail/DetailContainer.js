/*global kakao*/
import React, { Component } from 'react';
import DetailPresenter from './DetailPresenter';
import PropTypes from 'prop-types';

export class DetailContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      LineNumber: this.props.match.params.nodeId.substring(1),
      //상행(내선)
      LastStationUp:
        this.props.match.params.nodeId.substring(1, 2) === '1'
          ? '102'
          : this.props.match.params.nodeId.substring(1, 2) === '2'
          ? '217'
          : this.props.match.params.nodeId.substring(1, 2) === '3'
          ? '207'
          : this.props.match.params.nodeId.substring(1, 2) === '4'
          ? '216'
          : this.props.match.params.nodeId.substring(1, 2) === '5'
          ? '209'
          : this.props.match.params.nodeId.substring(1, 2) === '6'
          ? '602'
          : this.props.match.params.nodeId.substring(1, 2) === '7'
          ? '202'
          : this.props.match.params.nodeId.substring(1, 2) === '8'
          ? '214'
          : '211',
      //하행(외선)
      LastStationDown:
        this.props.match.params.nodeId.substring(1, 2) === '1'
          ? '123'
          : this.props.match.params.nodeId.substring(1, 2) === '2'
          ? '101'
          : this.props.match.params.nodeId.substring(1, 2) === '3'
          ? '107'
          : this.props.match.params.nodeId.substring(1, 2) === '4'
          ? '104'
          : this.props.match.params.nodeId.substring(1, 2) === '5'
          ? '109'
          : this.props.match.params.nodeId.substring(1, 2) === '6'
          ? '622'
          : this.props.match.params.nodeId.substring(1, 2) === '7'
          ? '614'
          : this.props.match.params.nodeId.substring(1, 2) === '8'
          ? '113'
          : '112',
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
      RouteUp:
        this.props.match.params.nodeId.substring(1, 2) === '1'
          ? '내선'
          : this.props.match.params.nodeId.substring(1, 2) === '6'
          ? '내선'
          : '상행',
      RouteDown:
        this.props.match.params.nodeId.substring(1, 2) === '1'
          ? '외선'
          : this.props.match.params.nodeId.substring(1, 2) === '6'
          ? '외선'
          : '하행',
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
        LastStationUp={this.state.LastStationUp}
        LastStationDown={this.state.LastStationDown}
        RouteUp={this.state.RouteUp}
        RouteDown={this.state.RouteDown}
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

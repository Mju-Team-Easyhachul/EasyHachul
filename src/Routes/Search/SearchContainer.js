import React from "react";
import SearchPresenter from "./SearchPresenter";
import SearchTab from "./SearchPresenter";
import SearchTabActive from "./SearchPresenter";

export default class extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      DepartureTime: 0,
      DepartureStation: 0,
      ArrivalStation: 0,
      SearchDepartureTime: 0,
      SearchDepartureStation: 0,
      SearchArrivalStation: 0,
      ActiveTab: "최소시간",
      SearchResult: false,
      Share: false,
    };
  }

  setActiveTab = (Tab) => {
    this.setState({
      ActiveTab: Tab,
      SearchResult: false,
      Share: false,
    });
  };

  setDepartureStation = (e) => {
    this.setState({
      DepartureStation: Number(e.target.value),
    });
  };

  setArrivalStation = (e) => {
    this.setState({
      ArrivalStation: Number(e.target.value),
    });
  };

  setActiveSearchResult = (e) => {
    if (this.state.SearchResult === false) {
      this.setState({
        SearchResult: true,
      });
    }
    this.setState({
      SearchDepartureStation: this.state.DepartureStation,
      SearchArrivalStation: this.state.ArrivalStation,
    });
  };

  setActiveShare = () => {
    if (this.state.Share === false) {
      this.setState({
        Share: true,
        SearchResult: false,
      });
    }
  };

  render() {
    return (
      <SearchPresenter
        ActiveTab={this.state.ActiveTab}
        DepartureTime={this.state.DepartureTime}
        DepartureStation={this.state.DepartureStation}
        ArrivalStation={this.state.ArrivalStation}
        SearchDepartureTime={this.state.SearchDepartureTime}
        SearchDepartureStation={this.state.SearchDepartureStation}
        SearchArrivalStation={this.state.SearchArrivalStation}
        SearchResult={this.state.SearchResult}
        Share={this.state.Share}
        setActiveTab={this.setActiveTab}
        setDepartureStation={this.setDepartureStation}
        setArrivalStation={this.setArrivalStation}
        setActiveSearchResult={this.setActiveSearchResult}
        setActiveShare={this.setActiveShare}
      />
    );
  }
}

import React, { Component } from 'react';
import CountryCard from '../cards/country.js';

export default class CountryStats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      status: "current"
    };

    this.currentCases = this.currentCases.bind(this);
    this.currentDeaths = this.currentDeaths.bind(this);
    this.currentRecovered = this.currentRecovered.bind(this);
  }

  currentCases() {
    if(this.state.status === "current") {

    } else {
      this.setState({
        status: "current"
      });
    }
  }

  currentDeaths() {
    if(this.state.status === "deaths") {

    } else {
      this.setState({
        status: "deaths"
      });
    }
  }

  currentRecovered() {
    if(this.state.status === "recovered") {

    } else {
      this.setState({
        status: "recovered"
      });
    }
  }

  componentDidMount() {
    fetch("https://disease.sh/v3/covid-19/countries")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <h1>Cases by Country</h1>
          <h6>Current Cases, Deaths, Recovered</h6>
          <div id="countryStats">
            {items.map(item => (
              <CountryCard info={item} status={this.state.status}/>
            ))}
          </div>
          <div className="stat-controls">
            <button onClick={this.currentCases}>Current Cases</button>
            <button onClick={this.currentDeaths}>Deaths</button>
            <button onClick={this.currentRecovered}>Recovered</button>
          </div>
        </div>
      );
    }
  }
}

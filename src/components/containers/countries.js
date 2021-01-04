import React, { Component } from 'react';
import CountryCard from '../cards/country.js';

export default class CountryStats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
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
          <CountryCard info={item} />
        ))}
      </div>
      </div>
      );
    }
  }
}

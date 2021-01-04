import React, { Component } from 'react';
import StateCard from '../cards/states.js';
import '../styles/styles.css';

export default class USStateStats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      deaths: true
    };
  }

  statsChange() {
    this.setState({
      deaths: !this.state.deaths
    });
  }

  componentDidMount() {
    fetch("https://api.covidtracking.com/v1/states/current.json")
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
          <h1>US State Level</h1>
          <h6>Current Cases, Deaths, Recovered</h6>
          <div id="currentStats">
            {items.map(item => (
              <StateCard info={item} deaths={this.state.deaths}/>
            ))}
          </div>
          <button onClick={this.statsChange}>Switch</button>
        </div>

      );
    }
  }
}

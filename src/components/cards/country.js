import React, { Component } from 'react';

export default class CountryCard extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    let item = this.props.info;
    if(this.props.status === "deaths") {
      return(
        <div className="country-card">
          <h1>{item.country}</h1>
          <p>Deaths: {item.deaths}</p>
        </div>
      );
    }
    else if(this.props.status === "recovered") {
      return(
        <div className="country-card">
          <h1>{item.country}</h1>
          <p>Recovered: {item.recovered}</p>
        </div>
      );
    }
    else {
      return(
        <div className="country-card">
          <h1>{item.country}</h1>
          <p>Current cases: {item.cases}</p>
          <p>Population: {item.population}</p>
        </div>
      );
    }
  }
};

import React, { Component } from 'react';

export default class CountryCard extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    let item = this.props.info;
    return(
      <div>
        <h1>{item.country}</h1>
        <p>Current cases: {item.cases}</p>
        <p>Deaths: {item.deaths}</p>
        <p>Recovered: {item.recovered}</p>
      </div>
    );
  }
};

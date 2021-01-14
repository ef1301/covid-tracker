import React, { Component } from 'react';

function abbrState(input, to){
  var states = new Map([
    ['Arizona', 'AZ'],
    ['Alabama', 'AL'],
    ['Alaska', 'AK'],
    ['Arkansas', 'AR'],
    ['California', 'CA'],
    ['Colorado', 'CO'],
    ['Connecticut', 'CT'],
    ['Delaware', 'DE'],
    ['Florida', 'FL'],
    ['Georgia', 'GA'],
    ['Hawaii', 'HI'],
    ['Idaho', 'ID'],
    ['Illinois', 'IL'],
    ['Indiana', 'IN'],
    ['Iowa', 'IA'],
    ['Kansas', 'KS'],
    ['Kentucky', 'KY'],
    ['Louisiana', 'LA'],
    ['Maine', 'ME'],
    ['Maryland', 'MD'],
    ['Massachusetts', 'MA'],
    ['Michigan', 'MI'],
    ['Minnesota', 'MN'],
    ['Mississippi', 'MS'],
    ['Missouri', 'MO'],
    ['Montana', 'MT'],
    ['Nebraska', 'NE'],
    ['Nevada', 'NV'],
    ['New Hampshire', 'NH'],
    ['New Jersey', 'NJ'],
    ['New Mexico', 'NM'],
    ['New York', 'NY'],
    ['North Carolina', 'NC'],
    ['North Dakota', 'ND'],
    ['Ohio', 'OH'],
    ['Oklahoma', 'OK'],
    ['Oregon', 'OR'],
    ['Pennsylvania', 'PA'],
    ['Rhode Island', 'RI'],
    ['South Carolina', 'SC'],
    ['South Dakota', 'SD'],
    ['Tennessee', 'TN'],
    ['Texas', 'TX'],
    ['Utah', 'UT'],
    ['Vermont', 'VT'],
    ['Virginia', 'VA'],
    ['Washington', 'WA'],
    ['West Virginia', 'WV'],
    ['Wisconsin', 'WI'],
    ['Wyoming', 'WY']
  ])
  if (to === 'abbr'){
    return states.get(input);
  } else if (to === 'name'){
    for(let [key, value] of states){
      if(value === input){
        return key;
      }
    }
  }
}


export default class StateCard extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    let item = this.props.info;
    if(this.props.status === "deaths") {
      return(
        <div className="state-card">
          <h1>{item.state}</h1>
          <p>Deaths: {item.deaths}</p>
        </div>
      );
    }
    else if(this.props.status === "recovered") {
      return(
        <div className="state-card">
          <h1>{item.state}</h1>
          <p>Recovered: {item.recovered}</p>
        </div>
      );
    }
    else {
      return(
        <div className="state-card">
          <h1>{item.state}</h1>
          <p>Current cases: {item.cases}</p>
          <p>Population: {item.population}</p>
        </div>
      );
    }
  }
};

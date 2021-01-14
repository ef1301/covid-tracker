import React, { Component } from 'react';
import * as ReactDOM from 'react-dom';
import { Map } from '@esri/react-arcgis';
import MyFeatureLayer from './MyFeatureLayer.js';

ReactDOM.render(
  <Map>
    <MyFeatureLayer
      featureLayerProperties=({
        url: 'https://opendata.arcgis.com/datasets/1cb306b5331945548745a5ccd290188e_1.geojson'
      })
    >
    </MyFeatureLayer>
  </Map>,
  document.getElementById('container')
);

export default class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      map: null,
      view: null
    };
    this.handleMapLoad = this.handleMapLoad.bind(this)
  }

  componentDidMount() {
    const map = new ArcGISMap({
      basemap: 'dark-gray'
    });
    this.view = new MapView({
      container: this.mapRef.current,
      map: map,
      center: [-118, 34],
      zoom: 8,
      ui: {
        components: ["attribution"]
      }
    });
  }

  componentWillUnmount() {
    if(this.view) {
      //destroy the map view
      this.view.container = null;
    }
  }

  render() {
    return (
      <div className="webmap" ref={this.mapRef} />
    );
  }
}

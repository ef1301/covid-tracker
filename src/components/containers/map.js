import React, { Component } from 'react';
import { MapView } from 'esri/views/MapView';
import Search from 'esri/widgets/Search';
import { WebMap } from 'esri/WebMap';

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
    const search = new Search({ view });
    this.view.ui.add(search, "top-right");
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

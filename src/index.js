import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker.js';
import reportWebVitals from './reportWebVitals';

import { Map } from '@esri/react-arcgis';
//import MyFeatureLayer from './components/containers/MyFeatureLayer.js';
import MyGeoJSONLayer from './components/containers/MyGeoJSON.js';

ReactDOM.render(
  <Map style={{height: '100vh', width: '100vw'}}
       mapProperties={{ basemap: 'dark-gray'}}
       viewProperties={{
         center: [-70, 25],
         zoom: 4
       }}
  >
    <MyGeoJSONLayer
      geoJSONLayerProperties={{
        url: 'https://opendata.arcgis.com/datasets/1cb306b5331945548745a5ccd290188e_1.geojson'
      }}
    >
    </MyGeoJSONLayer>
  </Map>
  ,
  document.getElementById('container')
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

serviceWorker.unregister();

import  { useState, useEffect } from 'react';
import { loadModules } from 'esri-loader';

const MyGeoJSONLayer = (props) => {
  const [myGeoJSONLayer, setMyGeoJSONLayer] = useState(null);
  useEffect(() => {
    loadModules([
      'esri/layers/GeoJSONLayer',

    ]).then(([GeoJSONLayer]) => {

      const renderer = {
        type: "simple",
        field: "mag",
        symbol: {
          type: "simple-marker",
          color: "orange",
          outline: {
            color: "white"
          }
        },
        visualVariables: [{
          type: "size",
          field: "mag",
          stops: [{
            value: 2.5,
            size: "4px"
          },
                  {
                    value: 8,
                    size: "40px"
                  }
          ]
        }]
      };

      const myGeoJSONLayer = new GeoJSONLayer({
        url: props.geoJSONLayerProperties.url,
        renderer: renderer
      });

      setMyGeoJSONLayer(myGeoJSONLayer);
      props.map.add(myGeoJSONLayer);
    }).catch((err) => console.error(err));

    return function cleanup() {
      //props.map.remove(myGeoJSONLayer);
    }
  }, [ props, myGeoJSONLayer ]);

  return null;
}

export default MyGeoJSONLayer;

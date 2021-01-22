import  { useState, useEffect } from 'react';
import { loadModules } from 'esri-loader';

//  Creates a client-side FeatureLayer from an array of graphics
function createLayer(graphics) {
  return new FeatureLayer({
    source: graphics,
    objectIdField: "OBJECTID",
    fields: [
      {
        name: "OBJECTID",
        type: "oid"
      },
      {
        name: "url",
        type: "string"
      }
    ],
    popupTemplate: {
      title: function (event) {
        return locatorTask
          .locationToAddress({
            location: event.graphic.geometry
          })
          .then(function (response) {
            return response.address;
          })
          .catch(function (error) {
            return "The middle of nowhere";
          });
      },
      content: "<img src='{url}'>"
    },
    renderer: {
      type: "simple",
      symbol: {
        type: "text",
        color: "#7A003C",
        text: "\ue661",
        font: {
          size: 20,
          family: "CalciteWebCoreIcons"
        }
      }
    }
  });
}

const MyFeatureLayer = (props) => {
  const [myFeatureLayer, setMyFeatureLayer] = useState(null);
  useEffect(() => {
    loadModules(['esri/layers/FeatureLayer']).then(([FeatureLayer]) => {
      const myFeatureLayer = new FeatureLayer({
        url: props.featureLayerProperties.url
      });

      setMyFeatureLayer(myFeatureLayer);
      props.map.add(myFeatureLayer);
    }).catch((err) => console.error(err));

    return function cleanup() {
      props.map.remove(myFeatureLayer);
    }
  }, [ props, myFeatureLayer ]);

  return null;
}

export default MyFeatureLayer;

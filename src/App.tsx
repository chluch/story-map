import React, { useState } from 'react';
import { LatLngTuple } from 'leaflet';
import './App.css';
import Map from './component/Map';
import { MarkersInfo } from './type/types';

function App() {
  const starter: LatLngTuple = [-33.86, 151.21]; // latitude, longitude 
  const [defaultPosition, setDefaultPosition] = useState(starter);

  const glebe: LatLngTuple = [-33.878, 151.186]; // test example
  const markersInfo: MarkersInfo = {
    places: [
      {
        position: glebe,
        title: "Glebe",
        description: "Coffee here!",
      },
      {
        position: starter,
        title: "Sydney",
        description: "Yay Sydney!",
      }
    ],
  }
  return (
    <div className="App">
      <Map
        position={defaultPosition}
        marker={true}
        markersInfo={markersInfo}
      />
    </div>
  );
}

export default App;

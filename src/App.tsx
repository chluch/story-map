import React, { useState } from 'react';
import { LatLngTuple } from 'leaflet';
import './App.css';
import Map from './component/Map';

function App() {
  const starter: LatLngTuple = [-33.86, 151.21]; // latitude, longitude 
  const [defaultPosition, setDefaultPosition] = useState(starter);
  return (
    <div className="App">
      <Map
        position={defaultPosition}
        marker={true}
        popupText="Sydney Yay!!"
      />
    </div>
  );
}

export default App;

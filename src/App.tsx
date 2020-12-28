import React, { useState } from 'react';
import { LatLngTuple } from 'leaflet';
import './App.css';
import { MarkersInfo } from './type/types';
import Map from './component/Map';

function App() {
  const starter: LatLngTuple = [-33.86, 151.21]; // latitude, longitude 
  const [centre, setCentre] = useState(starter);

  const glebe: LatLngTuple = [-33.878, 151.186]; // test example
  const markersInfo: MarkersInfo = {
    places: [
      {
        position: glebe,
        title: "Glebe",
        description: "Coffee here!",
      },
      {
        position: [-33.86, 151.21],
        title: "Sydney",
        description: "Yay Sydney!",
      },
      {
        position: [-33.896, 151.227],
        title: "Centennial Park",
        description: "Picnic!",
      },
      {
        position: [-33.920, 151.258],
        title: "Coogee",
        description: "Beach day!",
      },
    ],
  }

  return (
    <div className="App">
      <main>
        <Map
          centre={centre}
          showMarkers={true}
          markersInfo={markersInfo}
        />
      </main>
      <footer>
        <h1 id="page-title">Story Map</h1>
      </footer>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import { LatLngBounds, latLngBounds, LatLngTuple, Map as LeafletMap } from 'leaflet';
import './App.css';
import { MarkersInfo } from './type/types';
import Map from './component/Map';

const App = () => {
  const starter: LatLngTuple = [-33.86, 151.21]; // latitude, longitude 
  const [centre, setCentre] = useState<LatLngTuple>(starter);
  const [map, setMap] = useState<LeafletMap|null>(null);

  // Test example
  const markersInfo: MarkersInfo = {
    places: [
      {
        position: [-33.878, 151.186],
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
      {
        position: [-33.517, 150.367],
        title: "Mt Wilson, Blue Mountains",
        description: "Let's hike!",
      },
    ],
  }
  const bounds: LatLngBounds = latLngBounds(markersInfo.places.map((p) => p.position));
  const handleZoom: () => void = () => {
    map && map.fitBounds(bounds);
  }
  const handleCentre: () => void = () => {
    map && map.flyTo(centre, 13); // latlng, zoom
  }

  return (
    <div className="App">
      <main>
        <Map
          centre={centre}
          showMarkers={true}
          markersInfo={markersInfo}
          setMap={setMap}
        />
      </main>
      <footer>
        <h1 id="page-title">Story Map</h1>
        <div className="map-actions">
          <button onClick={handleZoom}>Zoom</button>
          <button onClick={handleCentre}>Centre</button>
        </div>
      </footer>
    </div>
  );
}

export default App;

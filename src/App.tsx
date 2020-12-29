import React, { useState } from 'react';
import { LatLngBounds, latLngBounds, LatLngTuple, Map as LeafletMap } from 'leaflet';
import { Feature, FeatureCollection, Point } from 'geojson';
import './App.css';
import Map from './component/Map';
import switchCoords from './util/switchCoords';
const GeoJSON = require('geojson');


const App = () => {
  const starter: LatLngTuple = [-33.86, 151.21]; // latitude, longitude 
  const [centre, setCentre] = useState<LatLngTuple>(starter);
  const [map, setMap] = useState<LeafletMap | null>(null);

  const example = [
    { name: "Glebe", description: "Coffee here!", category: "Personal", lat: -33.878, lng: 151.186 },
    { name: "Sydney", description: "Hello Sydney!", category: "Personal", lat: -33.86, lng: 151.21 },
    { name: "Centennial Park", description: "Picnic!", category: "Travel", lat: -33.896, lng: 151.227 },
    { name: "Coogee", description: "Beach day!", category: "Travel", lat: -33.920, lng: 151.258 },
    { name: "Mt Wilson, Blue Mountains", category: "Travel", description: "Let's hike!", lat: -33.517, lng: 150.367 },
  ];
  const exampleData: FeatureCollection<Point> = GeoJSON.parse(example, { Point: ['lat', 'lng'] });


  const bounds: LatLngBounds = latLngBounds(exampleData.features
      .map((location: Feature<Point>) => switchCoords(location.geometry.coordinates)));
 
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
          geoJson={exampleData}
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

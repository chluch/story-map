import React, { useState } from 'react';
import { LatLngBounds, latLngBounds, LatLngTuple, Map as LeafletMap } from 'leaflet';
import { Feature, FeatureCollection, Point } from 'geojson';
import '../App.css';
import styles from './Main.module.css';
import switchCoords from '../util/switchCoords';
import useModal from '../util/useModal';
import Map from '../component/Map';
import Modal from '../component/Modal/Modal';

const GeoJSON = require('geojson');

// TODO: Fix map dragging

const Main = () => {
  const starter: LatLngTuple = [-33.86, 151.21]; // latitude, longitude 
  const [centre, setCentre] = useState<LatLngTuple>(starter);
  const [map, setMap] = useState<LeafletMap | null>(null);
  const { showModal, toggleModal } = useModal();

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
    <>
      <main className={styles.main}>
        <Map
          centre={centre}
          showMarkers={true}
          geoJson={exampleData}
          setMap={setMap}
        />
      </main>
      <footer className={styles.footer}>
        <h1 className={styles.pageTitle}>Story Map</h1>
        <div className="map-actions">
          <button className={styles.actionButton} type="button" onClick={handleZoom}>Fit Markers</button>
          <button className={styles.actionButton} type="button" onClick={handleCentre}>Centre</button>
          <button className={styles.actionButton} type="button" onClick={toggleModal}>Modal</button>
          <Modal
            show={showModal}
            hide={toggleModal}
          />
        </div>
      </footer>
    </>
  );
}

export default Main;

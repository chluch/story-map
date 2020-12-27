import React from 'react';
import { LatLngTuple } from 'leaflet';
import { MapContainer, TileLayer } from 'react-leaflet'
import { InteractiveMapProps } from '../type/types';
import MapMarker from './MapMarker';

const Map = ({ latitude, longitude, marker, popupText }: InteractiveMapProps) => {
  const position: LatLngTuple = [latitude, longitude];
  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {marker
        ?
        <MapMarker
          position={position}
          popupText={popupText}
        />
        : null
      }
    </MapContainer>
  );
}

export default Map;

import React from 'react';
import { LeafletMouseEvent, Map } from 'leaflet';
import { Marker, Popup, useMap } from 'react-leaflet'
import { MarkerProps } from '../type/types';

const MapMarker = ({ position, properties }: MarkerProps) => {
  const map: Map = useMap();
  const centreMap = (e: LeafletMouseEvent): void => {
    map.setView(e.latlng, 13, { // latlng, zoom
      animate: false,
    });
  }

  return (
    <Marker
      position={position}
      eventHandlers={{
        click: (e) => {centreMap(e)}
      }}
    >
      <Popup>
        <h1>{properties.title}</h1>
        <p className="place-description">{properties.description}</p>
      </Popup>
    </Marker>
  );
}

export default MapMarker;

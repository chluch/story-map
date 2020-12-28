import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet'
import { MapProps } from '../type/types';
import MapMarker from './MapMarker';

const Map = ({ centre, showMarkers, markersInfo, setMap }: MapProps) => {
  return (
    <MapContainer center={centre} zoom={13} scrollWheelZoom={false} whenCreated={setMap}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {showMarkers
        ?
        <>
          {markersInfo.places.map((p, i) =>
            <MapMarker
              key={`${i}-${p.position}`}
              position={p.position}
              title={p.title}
              popupText={p.description}
            />
          )}
        </>
        : null
      }
    </MapContainer>
  );
}

export default Map;

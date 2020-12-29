import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet'
import { MapProps } from '../type/types';
import MapMarker from './MapMarker';
import switchCoords from '../util/switchCoords';
import { Feature, GeoJsonProperties, Point } from 'geojson';

const Map = ({ centre, showMarkers, geoJson, setMap }: MapProps) => {
  const data: { coords: [number, number], properties: GeoJsonProperties }[] = geoJson.features
    .map((location: Feature<Point>) => {
      return { coords: switchCoords(location.geometry.coordinates), properties: location.properties };
    });

  return (
    <MapContainer center={centre} zoom={13} scrollWheelZoom={false} whenCreated={setMap}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {showMarkers
        ?
        <>
          {data.map((location, i) =>
            <MapMarker
              key={`${i}-${location.coords}`}
              position={location.coords}
              properties={location.properties}
            />
          )}
        </>
        : null
      }
    </MapContainer>
  );
}

export default Map;

import React from 'react';
import { Marker, Popup, useMap } from 'react-leaflet'
import { MarkerProps } from '../type/types';

const MapMarker = ({ position, popupText }: MarkerProps) => {
  const map = useMap();

  const centreMap = (e: any) => {
    map.setView(e.latlng, map.getZoom(), {
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
        {popupText}
      </Popup>
    </Marker>
  );
}

export default MapMarker;

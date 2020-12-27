import { LatLngTuple } from 'leaflet';

export interface MapProps {
  position: LatLngTuple;
}

export interface InteractiveMapProps extends MapProps {
  marker: boolean;
  popupText?: string;
}

export interface MarkerProps {
  position: LatLngTuple;
  popupText?: string;
}

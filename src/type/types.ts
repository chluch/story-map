import { LatLngTuple } from 'leaflet';

export interface GenericMapProps {
  latitude: number;
  longitude: number;
}

export interface InteractiveMapProps extends GenericMapProps {
  marker: boolean;
  popupText?: string;
}

export interface MarkerProps {
  position: LatLngTuple;
  popupText?: string;
}

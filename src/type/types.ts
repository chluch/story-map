import { LatLngExpression, LatLngTuple } from 'leaflet';

export interface MapProps {
  position: LatLngExpression;
}

export interface MarkerInfo {
  position: LatLngTuple;
  title?: string;
  description?: string;
}

export interface MarkersInfo {
  places: MarkerInfo[];
}

export interface InteractiveMapProps extends MapProps {
  marker: boolean;
  markersInfo: MarkersInfo;
}

export interface MarkerProps {
  position: LatLngExpression;
  title?: string;
  popupText?: string;
}

export interface ModalProps {
  show: boolean;
  hide: any;
}

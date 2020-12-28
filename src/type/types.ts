import { LatLngExpression, LatLngTuple, Map } from 'leaflet';

export interface MapProps {
  centre: LatLngExpression;
  showMarkers: boolean;
  markersInfo: MarkersInfo;
  setMap: React.Dispatch<React.SetStateAction<Map | null>>;
}

export interface MarkerInfo {
  position: LatLngTuple;
  title?: string;
  description?: string;
}

export interface MarkersInfo {
  places: MarkerInfo[];
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

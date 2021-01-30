import { FeatureCollection, Point } from 'geojson';
import { LatLngExpression, Map } from 'leaflet';

export interface MapProps {
  centre: LatLngExpression;
  showMarkers: boolean;
  geoJson: FeatureCollection<Point>;
  // markersInfo: MarkersInfo;
  setMap: React.Dispatch<React.SetStateAction<Map | null>>;
}

export interface MarkerProps {
  position: LatLngExpression;
  properties: any;
}

export interface ModalProps {
  show: boolean;
  hide: () => void;
}

export interface FlipCardProps {
  front: React.ReactNode;
  back: React.ReactNode;
  options: number;
}

// [lng, lat] => [lat, lng]
const switchCoords = (coords: number[]): [number, number] => {
  if (coords.length !== 2) {
    throw new Error('switchCoords: Input must be in format: [lng, lat]');
  }
  return [coords[1], coords[0]]
};

export default switchCoords;


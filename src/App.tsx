import React from 'react';
import './App.css';
import Map from './component/Map';

function App() {
  return (
    <div className="App">
      <Map
        latitude={-33.86}
        longitude={151.21}
        marker={true}
        popupText="Sydney Yay!!"
      />
    </div>
  );
}

export default App;

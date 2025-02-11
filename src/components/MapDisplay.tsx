import { useEffect, useRef } from 'react';
import { map, view } from '../Scene';
import '../index.css';
import '../App.css';

function MapDisplay() {
  const mapDiv = useRef(null);

  useEffect(() => {
    if (mapDiv.current) {
      map.ground.navigationConstraint = {
        type: 'none',
      };

      view.container = mapDiv.current;
      view.ui.components = [];
      view.ui.empty('top-left');
    }
  }, []);

  return (
    <>
      <div className="mapDiv" ref={mapDiv}></div>
    </>
  );
}

export default MapDisplay;

import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

const apiKey = import.meta.env.VITE_MAPBOX_KEY as string;
mapboxgl.accessToken = apiKey

const Map: React.FC = () => {
  const mapContainer = useRef(null);

  useEffect(() => {
    if (mapContainer.current) {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [139, 38], // starting position [lng, lat]
        zoom: 4.5 // starting zoom
      });
      return () => map.remove();
    }
  }, []);

  return (
    <div className="map-container" ref={mapContainer} style={{ width: '100%', height: '100vh' }} />
  );
};

export default Map;

import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import { getLocations } from '../services/realtimeDatabase';

const apiKey = import.meta.env.VITE_MAPBOX_KEY as string;
mapboxgl.accessToken = apiKey

const Map: React.FC = () => {
  const mapContainer = useRef(null);
  const [map, setMap] = useState<mapboxgl.Map | null>(null);

  useEffect(() => {
    const initializeMap = async () => {
      if (mapContainer.current) {
        const mapInstance = new mapboxgl.Map({
          container: mapContainer.current,
          style: 'mapbox://styles/mapbox/light-v11',
          center: [139, 40],
          zoom: 4,
        });

        setMap(mapInstance);

        const fetchedLocations = await getLocations();

        fetchedLocations.forEach((location: { latitude: number, longitude: number, name: string, type: string }) => {
            const el = document.createElement('div');
            if (location.type === "whiskey") {
                el.className = 'whiskey';
            } else if (location.type === "beer") {
                el.className = 'beer'
            } else {
                el.className = 'sake'
            }
            new mapboxgl.Marker(el)
                .setLngLat([location.longitude, location.latitude])
                .setPopup(new mapboxgl.Popup().setHTML(`<h3>${location.name}</h3>`))
                .addTo(mapInstance);
        });
      }
    };

    initializeMap();

    return () => {
      if (map) {
        map.remove();
      }
    };
  }, []);

  return (
    <div className="map-container" ref={mapContainer} style={{ width: '100%', height: '100vh' }} />
  );
};

export default Map;

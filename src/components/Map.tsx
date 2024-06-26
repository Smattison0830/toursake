import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';
import { getLocations } from '../services/realtimeDatabase';
import LocationMapPopup from '../components/LocationMapPopup';

const apiKey = import.meta.env.VITE_MAPBOX_KEY as string;
mapboxgl.accessToken = apiKey

interface MapProps {
  selectedType: string | null;
}

const Map: React.FC<MapProps> = ({ selectedType }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const markers = useRef<mapboxgl.Marker[]>([]);

  useEffect(() => {
    if (mapContainer.current) {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v11',
        center: [139, 37],
        zoom: 4.5,
      });

      return () => map.current?.remove();
    }
  }, []);

  useEffect(() => {
    const updateMarkers = async () => {
      const fetchedLocations = await getLocations();

      markers.current.forEach(marker => marker.remove());
      markers.current = [];

      fetchedLocations
        .filter(location => !selectedType || location.type === selectedType)
        .forEach(location => {
          const el = document.createElement('div');
          el.className = `marker ${location.type}`;
          if (location.type === "whiskey") {
            el.className = 'whiskey';
          } else if (location.type === "beer") {
            el.className = 'beer'
          } else {
            el.className = 'sake'
          }
          const popupEl = document.createElement('div');
          ReactDOM.render(<LocationMapPopup name={location.name} />, popupEl);

          const marker = new mapboxgl.Marker(el)
            .setLngLat([location.longitude, location.latitude])
            .setPopup(new mapboxgl.Popup().setDOMContent(popupEl))
            .addTo(map.current!);
          markers.current.push(marker);
        });
    };

    if (map.current) {
      updateMarkers();
    }
  }, [selectedType]);
  return (
    <div className="map-container" ref={mapContainer} style={{ width: '100%', height: '100vh' }} />
  );
};

export default Map;

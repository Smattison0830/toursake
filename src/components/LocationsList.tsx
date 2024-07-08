import React, { useState, useEffect } from 'react';
import LocationItem from './LocationItem';
import { getLocations } from '../services/realtimeDatabase';

interface Location {
  id: string,
  name: string,
  address: string,
  city: string,
  description: string,
  picture: string,
  type: string,
  url: string,
  english: string,
  reservation: string;
  // Add other properties as needed
}

const LocationsList: React.FC = () => {
  const [locations, setLocations] = useState<Location[]>([]);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const data = await getLocations();
        setLocations(data);
      } catch (error) {
        console.error('Failed to fetch locations:', error);
      }
    };

    fetchLocations();
  }, []);

  return (
    <div className="text-center text-3xl">
      <h1>Locations Page</h1>
      <ul>
      {locations.map((location) => {
        return (
          <LocationItem
            key={location.id}
            name={location.name}
            address={location.address}
            city={location.city}
            description={location.description}
            picture={location.picture}
            url={location.url}
            english={location.english}
            reservation={location.reservation}
            type={location.type}
          />
        );
      })}
      </ul>
    </div>
  );
};

export default LocationsList;

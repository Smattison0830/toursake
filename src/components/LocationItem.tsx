import React from 'react';

interface LocationItem {
  key: number;
  name: string;
  address: string;
  type: string;
  city: string;
  description: string;
  picture: string;
  url: string;
  english: string;
  reservation: string;
}

const LocationItem: React.FC<LocationItem> = ({ name, city, address }) => {
  return (
    <div className="popup-content">
      <h3>{name}</h3>
      <h3>{city}</h3>
      <h3>{address}</h3>
    </div>
  );
};

export default LocationItem;
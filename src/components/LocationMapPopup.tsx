import React from 'react';

interface LocationMapPopup {
  name: string;
  city: string;
  address: string;
}

const LocationMapPopup: React.FC<LocationMapPopup> = ({ name, city, address }) => {
  return (
    <div className="popup-content">
      <h3>{name}</h3>
      <h3>{city}</h3>
      <h3>{address}</h3>
    </div>
  );
};

export default LocationMapPopup;
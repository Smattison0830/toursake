import React from 'react';

interface LocationPopup {
  name: string;
}

const LocationPopup: React.FC<LocationPopup> = ({ name }) => {
  return (
    <div className="popup-content">
      <h3>{name}</h3>
      <h3>{name}</h3>
      <h3>{name}</h3>
    </div>
  );
};

export default LocationPopup;
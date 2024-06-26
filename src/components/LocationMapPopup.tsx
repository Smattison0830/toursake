import React from 'react';

interface LocationMapPopup {
  name: string;
}

const LocationMapPopup: React.FC<LocationMapPopup> = ({ name }) => {
  return (
    <div className="popup-content">
      <h3>{name}</h3>
      <h3>{name}</h3>
      <h3>{name}</h3>
    </div>
  );
};

export default LocationMapPopup;
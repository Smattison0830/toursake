import React from 'react';
import LocationsList from '../components/LocationsList'; // Import the new component

const Locations: React.FC = () => {

  return (
    <div className='fixed w-full flex justify-center mt-4 z-10 top-20 bottom-4'>
      <div className=" bg-orange-500 bg-opacity-80 rounded-lg w-11/12 p-4 left-0 right-0 overflow-y-scroll">
        <LocationsList />
      </div>
    </div>
  );
};

export default Locations;

import React from 'react';
import whiskeyIcon from '../assets/whiskey.svg';
import sakeIcon from '../assets/sake.svg';
import beerIcon from '../assets/beer.svg';

const Sidebar: React.FC = () => {
    return (
        <div className="fixed top-24 left-10 w-1/8 bg-orange-500 bg-opacity-50 rounded-lg p-4 z-10">
         <h2 className="text-lg font-bold mb-4"></h2>
          <ul>
            <li className="mb-2 flex items-center cursor-pointer">
              <img src={whiskeyIcon} alt="Whiskey" className="w-6 h-6 mr-2" />
            </li>
            <li className="mb-2 flex items-center cursor-pointer">
              <img src={sakeIcon} alt="Sake" className="w-6 h-6 mr-2" />
            </li>
            <li className="mb-2 flex items-center cursor-pointer">
              <img src={beerIcon} alt="Beer" className="w-6 h-6 mr-2" />
            </li>
          </ul>
        </div>
      );
};

export default Sidebar;
import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <div className="fixed top-24 left-10 w-1/8 bg-orange-500 bg-opacity-50 rounded-lg p-4 z-10">
      <h2 className="text-sm mb-4"></h2>
      <ul>
        <li className="mb-2">Whiskey</li>
        <li className="mb-2">Beer</li>
        <li className="mb-2">Sake</li>
      </ul>
    </div>
  );
};

export default Sidebar;

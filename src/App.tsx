import React, {useState} from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Locations from './pages/Locations';
import About from './pages/About';
import Map from './components/Map';

const App: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const location = useLocation(); // Use location to determine the current route

  // Determine if the current route is '/'
  const isMapRoute = location.pathname === '/';

  return (
    <div className="App">
      <Navbar />
      <div className="flex">
        {isMapRoute && <Sidebar setSelectedType={setSelectedType} />}
        <div className="flex-1">
          <Map selectedType={selectedType} />
          <Routes>
            <Route path="/" element={<Map selectedType={selectedType} />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
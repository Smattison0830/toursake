import React, {useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import About from './pages/About';
import Contact from './pages/Contact';
import Map from './components/Map';

const App: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string | null>(null);

  return (
    <div className="App">
      <Navbar />
        <div className="flex">
          <Sidebar setSelectedType={setSelectedType} />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Map selectedType={selectedType} />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
      </div>
    </div>
  );
};

export default App;

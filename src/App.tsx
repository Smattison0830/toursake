import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
        <div className="flex">
          <Sidebar />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
      </div>
    </div>
  );
};

export default App;

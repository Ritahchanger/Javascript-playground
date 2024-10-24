import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Home from './pages/Home'; 

import Login from './pages/Login';

import Signup from './pages/Signup';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

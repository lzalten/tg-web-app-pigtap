import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Friends from './components/Friends';
import Coins from './components/Coins';
import Shop from './components/Shop';
import Pigs from './components/Pigs';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/coins" element={<Coins />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/pigs" element={<Pigs />} />
      </Routes>
    </Router>
  );
};

export default App;

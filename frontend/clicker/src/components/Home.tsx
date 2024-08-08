import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import pigGif from '../assets/pig.gif';

const sections = [
  { name: 'FRIENDS', path: '/friends' },
  { name: 'COINS', path: '/coins' },
  { name: 'SHOP', path: '/shop' },
  { name: 'PIGS', path: '/pigs' },
];

const Home: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  let startX: number | null = null;

  const handleTouchStart = (e: React.TouchEvent) => {
    startX = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!startX) return;

    const touch = e.touches[0];
    const diffX = startX - touch.clientX;

    if (diffX > 50) {
      setCurrentIndex((prevIndex) => (prevIndex === sections.length - 1 ? 0 : prevIndex + 1));
      startX = null;
    } else if (diffX < -50) {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? sections.length - 1 : prevIndex - 1));
      startX = null;
    }
  };

  const handleTouchEnd = () => {
    startX = null;
  };

  return (
    <div className="home-container">
      <div className="header">
        <p className="greeting">Hi, Дима 🎈</p>
        <p className="score">0</p>
      </div>

      <div className="centered-content">
        <img src={pigGif} alt="Pig" className="pig-image" />
        <div
          className="slider-button"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <Link to={sections[currentIndex].path} className="button-content">
            {sections[currentIndex].name}
          </Link>
          <div className="progress-bars">
            {sections.map((_, index) => (
              <div
                key={index}
                className={`progress-bar ${index === currentIndex ? 'active' : ''}`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

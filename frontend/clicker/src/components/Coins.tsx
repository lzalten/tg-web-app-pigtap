import React from 'react';
import './Coins.css';

const Coins: React.FC = () => {
  return (
    <div className="coins-container">
      <h1 className="coins-title">Coins</h1>

      <div className="action-section">
        <p className="action-text">🐷 Join our TG channel</p>
        <button className="action-button">🐽 500</button>
      </div>

      <div className="action-section">
        <p className="action-text">🐷 Join our Discord</p>
        <button className="action-button">🐽 500</button>
      </div>

      <div className="action-section">
        <p className="action-text">🐷 Follow us on X</p>
        <button className="action-button">🐽 500</button>
      </div>

      <div className="wallet-section">
        <button className="wallet-button">Connect Wallet 🐽 50,000</button>
      </div>
    </div>
  );
};

export default Coins;

import React from 'react';
import './Friends.css';

const Friends: React.FC = () => {
  return (
    <div className="friends-container">
      <h1 className="friends-title">Friends</h1>
      <p className="invite-subtitle">Invite friends to get bonuses</p>

      <div className="invite-section">
        <p className="invite-text">🐷 Invite friend</p>
        <button className="invite-button">🐽 500</button>
      </div>

      <div className="invite-section">
        <p className="invite-text">🐷 Invite Telegram Premium</p>
        <button className="invite-button premium">🐽 5000</button>
      </div>

      <div className="invited-friends">
        <h2 className="friends-list-title">Invited Friends</h2>
        <ul className="friends-list">
          {/* Здесь будут отображаться приглашенные друзья */}
          <li className="friend-item">Friend 1</li>
          <li className="friend-item">Friend 2</li>
          <li className="friend-item">Friend 3</li>
        </ul>
      </div>
    </div>
  );
};

export default Friends;

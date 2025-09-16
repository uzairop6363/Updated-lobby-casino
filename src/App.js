import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="top-profile">Profile</div>
        <button className="buy-coins">Buy Coins</button>
      </div>

      {/* Main Content */}
      <div className="content">
        <div className="game-item">
          <div className="game-logo">🎮</div>
          <div className="game-name">Game 1</div>
        </div>
        <div className="game-item">
          <div className="game-logo">🕹️</div>
          <div className="game-name">Game 2</div>
        </div>
        <div className="game-item">
          <div className="game-logo">⚡</div>
          <div className="game-name">Game 3</div>
        </div>
        <div className="game-item">
          <div className="game-logo">🎲</div>
          <div className="game-name">Game 4</div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bottom-bar">
        <div className="bottom-option">
          <div className="icon">🏠</div>
          Home
        </div>
        <div className="bottom-option">
          <div className="icon">🎮</div>
          Games
        </div>
        <div className="bottom-option">
          <div className="icon">💰</div>
          Coins
        </div>
        <div className="bottom-option">
          <div className="icon">⚙️</div>
          Settings
        </div>
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';

function App() {
  const bottomOptions = [
    { icon: "💸", label: "Withdraw" },
    { icon: "📢", label: "Promote" },
    { icon: "🏆", label: "Rankings" },
    { icon: "✉️", label: "E-Mail" },
    { icon: "🏦", label: "Bank" },
    { icon: "💎", label: "VIP" },
    { icon: "🎉", label: "Events" },
  ];

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
        <div className="game-item">
          <div className="game-logo">🎯</div>
          <div className="game-name">Game 5</div>
        </div>
        <div className="game-item">
          <div className="game-logo">🎰</div>
          <div className="game-name">Game 6</div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bottom-bar">
        {bottomOptions.map((option, index) => (
          <div key={index} className="bottom-option">
            <div className="icon">{option.icon}</div>
            {option.label}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

import React, { useRef } from 'react';
import './App.css';
import dragonTiger from './assets/dragon-vs-tiger.png'; // real image

function App() {
  const contentRef = useRef(null);

  // Bottom bar options
  const bottomOptions = [
    { icon: "💸", label: "Withdraw" },
    { icon: "📢", label: "Promote" },
    { icon: "🏆", label: "Rankings" },
    { icon: "✉️", label: "E-Mail" },
    { icon: "🏦", label: "Bank" },
    { icon: "💎", label: "VIP" },
    { icon: "🎉", label: "Events" },
  ];

  // Games array: Game 1 with real image, rest with emojis
  const games = [
    { logo: dragonTiger, name: "Dragon vs Tiger" },
    { logo: "🕹️", name: "Game 2" },
    { logo: "⚡", name: "Game 3" },
    { logo: "🎲", name: "Game 4" },
    { logo: "🎯", name: "Game 5" },
    { logo: "🎰", name: "Game 6" },
    { logo: "🎮", name: "Game 7" },
    { logo: "🕹️", name: "Game 8" },
    { logo: "⚡", name: "Game 9" },
    { logo: "🎲", name: "Game 10" },
    { logo: "🎯", name: "Game 11" },
    { logo: "🎰", name: "Game 12" },
  ];

  // Scroll functions for arrows
  const scrollLeft = () => {
    if (contentRef.current) {
      contentRef.current.scrollBy({ left: -500, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (contentRef.current) {
      contentRef.current.scrollBy({ left: 500, behavior: 'smooth' });
    }
  };

  return (
    <div>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="top-profile">Profile</div>
        <button className="buy-coins">Buy Coins</button>
      </div>

      {/* Horizontal Scrollable Games */}
      <div className="content-wrapper">
        <div className="arrow arrow-left" onClick={scrollLeft}>◀</div>
        <div className="content" ref={contentRef}>
          {games.map((game, index) => (
            <div key={index} className="game-item">
              {typeof game.logo === 'string' ? (
                <div className="game-logo">{game.logo}</div>
              ) : (
                <img src={game.logo} alt={game.name} className="game-logo" />
              )}
              <div className="game-name">{game.name}</div>
            </div>
          ))}
        </div>
        <div className="arrow arrow-right" onClick={scrollRight}>▶</div>
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

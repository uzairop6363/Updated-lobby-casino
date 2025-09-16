import React, { useRef } from 'react';
import './App.css';

function App() {
  const contentRef = useRef(null);

  const bottomOptions = [
    { icon: "💸", label: "Withdraw" },
    { icon: "📢", label: "Promote" },
    { icon: "🏆", label: "Rankings" },
    { icon: "✉️", label: "E-Mail" },
    { icon: "🏦", label: "Bank" },
    { icon: "💎", label: "VIP" },
    { icon: "🎉", label: "Events" },
  ];

  const games = Array.from({ length: 24 }, (_, i) => ({
    logo: "🎮",
    name: `Game ${i + 1}`,
  }));

  const scrollLeft = () => {
    contentRef.current.scrollBy({ left: -500, behavior: 'smooth' });
  };

  const scrollRight = () => {
    contentRef.current.scrollBy({ left: 500, behavior: 'smooth' });
  };

  return (
    <div>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="top-profile">Profile</div>
        <button className="buy-coins">Buy Coins</button>
      </div>

      {/* Horizontal Scrollable Game Content with Arrows */}
      <div className="content-wrapper">
        <div className="arrow arrow-left" onClick={scrollLeft}>◀</div>
        <div className="content" ref={contentRef}>
          {games.map((game, index) => (
            <div key={index} className="game-item">
              <div className="game-logo">{game.logo}</div>
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

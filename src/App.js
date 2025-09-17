import React, { useRef } from 'react';
import './App.css';

function App() {
  const contentRef = useRef(null);

  // Bottom bar options
  const bottomOptions = [
    { icon: "💸", label: "Withdraw" },
    { icon: "📢", label: "Promote" },
    { icon: "🏆", label: "Rankings" },
    { icon: "📧", label: "E-Mail" },
    { icon: "🏦", label: "Bank" },
    { icon: "👑", label: "VIP" },
    { icon: "🎉", label: "Events" },
  ];

  // Games with real icons (public folder)
  const games = [
    { logo: "/dragon-vs-tiger.png", name: "Dragon vs Tiger" },
    { logo: "/zoo-roulette.png", name: "Zoo Roulette" },
    { logo: "/car-roulette.png", name: "Car Roulette" },
    { logo: "/fortune-gems.png", name: "Fortune Gems" },
    { logo: "/9-coins.png", name: "9 Coins" },
    { logo: "/rocket.png", name: "Rocket" },
    { logo: "/7-thunder.png", name: "7 Thunder" },
    { logo: "/777-classic.png", name: "777 Classic" },
    { logo: "/baccarat.png", name: "Baccarat" },
    { logo: "/up-down.png", name: "Up Down" },
    { logo: "/mines.png", name: "Mines" },
    { logo: "/rummy.png", name: "Rummy" },
  ];

  // Scroll arrows
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
    <div className="App">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="top-profile">My Profile</div>
        <button className="buy-coins">Buy Coins</button>
      </div>

      {/* Horizontal Scrollable Games */}
      <div className="content-wrapper">
        <div className="arrow arrow-left" onClick={scrollLeft}>◀️</div>
        <div className="content" ref={contentRef}>
          {games.map((game, index) => (
            <div className="game-item" key={index}>
              <img src={game.logo} alt={game.name} className="game-logo" />
              <div className="game-name">{game.name}</div>
            </div>
          ))}
        </div>
        <div className="arrow arrow-right" onClick={scrollRight}>▶️</div>
      </div>

      {/* Bottom Bar */}
      <div className="bottom-bar">
        {bottomOptions.map((option, index) => (
          <div
            className={`bottom-option ${option.label === "Withdraw" ? "withdraw" : "small"}`}
            key={index}
          >
            <span className="icon">{option.icon}</span>
            <span>{option.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

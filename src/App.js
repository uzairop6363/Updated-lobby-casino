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

  const games = [
    { logo: "/dragon-vs-tiger.png", name: "Dragon vs Tiger", isImage: true },
    { logo: "/zoo-roulette.png", name: "Zoo Roulette", isImage: true },
    { logo: "/car-roulette.png", name: "Car Roulette", isImage: true },
    { logo: "/fortune-gems.png", name: "Fortune Gems", isImage: true },
    { logo: "/9-coins.png", name: "9 Coins", isImage: true },
    { logo: "/rocket.png", name: "Rocket", isImage: true },
    { logo: "/7-thunder.png", name: "7 Thunder", isImage: true },
    { logo: "/777-classic.png", name: "777 Classic", isImage: true },
    { logo: "/baccarat.png", name: "Baccarat", isImage: true },
    { logo: "/up-down.png", name: "UP Down", isImage: true },
    { logo: "/mines.png", name: "Mines", isImage: true },
    { logo: "/rummy.png", name: "Rummy", isImage: true },
  ];

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
              {game.isImage ? (
                <img src={game.logo} alt={game.name} className="game-logo" />
              ) : (
                <div className="game-logo">{game.logo}</div>
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

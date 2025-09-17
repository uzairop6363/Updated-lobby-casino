import React, { useRef, useState, useEffect } from "react";
import "./App.css";

function App() {
  const contentRef = useRef(null);

  // 🟢 Balance State (fixed 200 for now)
  const [balance, setBalance] = useState(200);

  useEffect(() => {
    const savedBalance = localStorage.getItem("userBalance");
    if (savedBalance) {
      setBalance(parseInt(savedBalance, 10));
    } else {
      localStorage.setItem("userBalance", "200");
      setBalance(200);
    }
  }, []);

  // 🕹️ Games array
  const games = [
    { logo: "/tiger-vs-dragon.png", name: "Dragon vs Tiger" },
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

  return (
    <div className="App">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="top-profile">Profile</div>

        <div className="coins-section">
          <button className="buy-coins">Buy Coins</button>
          <div className="balance-box">💸 {balance}</div>
        </div>
      </div>

      {/* Horizontal Games */}
      <div className="content-wrapper">
        <div className="content" ref={contentRef}>
          {games.map((game, index) => (
            <div className="game-item" key={index}>
              <img src={game.logo} alt={game.name} className="game-icon" />
              <div className="game-name">{game.name}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bottom-bar">
        <div className="bottom-option">💸 Withdraw</div>
        <div className="bottom-option">📢 Promote</div>
        <div className="bottom-option">🏆 Rankings</div>
        <div className="bottom-option">📧 E-Mail</div>
        <div className="bottom-option">🏦 Bank</div>
        <div className="bottom-option">💎 VIP</div>
        <div className="bottom-option">🎉 Events</div>
      </div>
    </div>
  );
}

export default App;

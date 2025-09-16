import React from "react";
import "./App.css";
import { FaGift, FaCoins, FaStar, FaUniversity, FaChartLine, FaEnvelope, FaCalendarAlt, FaBullhorn, FaMoneyBillWave } from "react-icons/fa";

// Sample games list with logos (we'll use emoji placeholders for now)
const games = [
  { name: "Dragon Tiger", logo: "🐉🐅" },
  { name: "Baccarat", logo: "🃏" },
  { name: "Andar Bahar", logo: "🎲" },
  { name: "Roulette", logo: "🎡" },
  { name: "Teen Patti", logo: "♠️♥️" },
  { name: "Poker", logo: "♣️♦️" },
  { name: "Slots", logo: "🍒" },
  { name: "Blackjack", logo: "♠️" },
];

const bottomOptions = [
  { name: "Free Bonus", icon: <FaGift /> },
  { name: "Withdraw", icon: <FaCoins /> },
  { name: "VIP", icon: <FaStar /> },
  { name: "Bank", icon: <FaUniversity /> },
  { name: "Ranking", icon: <FaChartLine /> },
  { name: "E-Mail", icon: <FaEnvelope /> },
  { name: "Event", icon: <FaCalendarAlt /> },
  { name: "Promote", icon: <FaBullhorn /> },
  { name: "Deposit", icon: <FaMoneyBillWave /> },
];

function App() {
  return (
    <div className="App">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="top-profile">Guest Profile</div>
        <button className="buy-coins">Buy Coins</button>
      </div>

      {/* Scrollable Content */}
      <div className="content">
        {games.map((game, idx) => (
          <div key={idx} className="game-item">
            <div className="game-logo">{game.logo}</div>
            <div className="game-name">{game.name}</div>
          </div>
        ))}
      </div>

      {/* Bottom Bar */}
      <div className="bottom-bar">
        {bottomOptions.map((opt, idx) => (
          <div key={idx} className="bottom-option">
            <div className="icon">{opt.icon}</div>
            <span>{opt.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

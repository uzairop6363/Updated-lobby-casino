import React, { useRef, useState, useEffect } from "react";
import "./App.css";
import LoginCreateForm from "./LoginCreateForm";

function App() {
  const contentRef = useRef(null);

  // ✅ User state
  const [user, setUser] = useState(null);

  // 🎲 Balance & Guest Info
  const [balance, setBalance] = useState(200);
  const [guestName, setGuestName] = useState("");
  const [guestId, setGuestId] = useState("");

  // Check if user is logged in
  useEffect(() => {
    const savedUser = localStorage.getItem("loggedInUser");
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  // Initialize balance and guest info after login
  useEffect(() => {
    if (!user) return;

    const savedBalance = localStorage.getItem("userBalance");
    if (savedBalance) {
      setBalance(parseInt(savedBalance, 10));
    } else {
      localStorage.setItem("userBalance", "200");
      setBalance(200);
    }

    let storedName = localStorage.getItem("guestName");
    let storedId = localStorage.getItem("guestId");

    if (!storedName || !storedId) {
      const randomNum = Math.floor(1000000 + Math.random() * 9000000);
      const randomId = Math.floor(10000000 + Math.random() * 90000000);
      storedName = `Guest${randomNum}`;
      storedId = `ID: ${randomId}`;
      localStorage.setItem("guestName", storedName);
      localStorage.setItem("guestId", storedId);
    }

    setGuestName(storedName);
    setGuestId(storedId);
  }, [user]);

  // 🎮 Games
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

  // 🔑 Show login if not logged in
  if (!user) {
    return <LoginCreateForm setUser={setUser} />;
  }

  return (
    <div className="App">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="user-info">
          <img src="/avatar.png" alt="Avatar" className="avatar" />
          <div className="user-text">
            <div className="guest-name">{guestName}</div>
            <div className="guest-id">{guestId}</div>
          </div>
        </div>
        <div className="coins-section">
          <div className="balance-box">💸 {balance}</div>
          <button className="buy-coins">Buy Coins</button>
        </div>
      </div>

      {/* Games */}
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

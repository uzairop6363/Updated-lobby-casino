import React, { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const contentRef = useRef(null);

  const chips = [100, 200, 500, 1000, 3000, 5000, 10000, 15000, 30000, 50000];

  const userEmail = "test@test.com"; // Replace with actual logged-in user

  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const fetchBalance = async () => {
      const res = await fetch(`http://localhost:5000/api/get-user-balance/${userEmail}`);
      const data = await res.json();
      setBalance(data.balance);
    };
    fetchBalance();
  }, []);

  const handleBuyCoins = async (amount) => {
    try {
      const res = await fetch("http://localhost:5000/api/create-easypaisa-transaction", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: userEmail, amount })
      });
      const data = await res.json();

      window.location.href = data.paymentUrl;

      // Demo: confirm payment after 5s
      setTimeout(async () => {
        const confirmRes = await fetch("http://localhost:5000/api/confirm-payment", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: userEmail })
        });
        const updated = await confirmRes.json();
        setBalance(updated.balance);
        alert(`Payment successful! ${amount} coins added.`);
      }, 5000);

    } catch (err) {
      console.error(err);
      alert("Payment failed!");
    }
  };

  const games = [
    { logo: "/dragon-vs-tiger.png", name: "Dragon vs Tiger" },
    { logo: "/zoo-roulette.png", name: "Zoo Roulette" },
  ];

  const scrollLeft = () => contentRef.current?.scrollBy({ left: -500, behavior: 'smooth' });
  const scrollRight = () => contentRef.current?.scrollBy({ left: 500, behavior: 'smooth' });

  return (
    <div className="App">
      <div className="top-bar">
        <div className="top-profile">User | 💸 {balance}</div>
        <div className="buy-coins">
          Buy Coins
          <div className="chips-dropdown">
            {chips.map((chip, idx) => (
              <div key={idx} className="chip" onClick={() => handleBuyCoins(chip)}>
                {chip}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="content-wrapper">
        <div className="arrow arrow-left" onClick={scrollLeft}>◀️</div>
        <div className="content" ref={contentRef}>
          {games.map((game, idx) => (
            <div key={idx} className="game-item">
              <img src={game.logo} alt={game.name} className="game-logo" />
              <div className="game-name">{game.name}</div>
            </div>
          ))}
        </div>
        <div className="arrow arrow-right" onClick={scrollRight}>▶️</div>
      </div>
    </div>
  );
}

export default App;

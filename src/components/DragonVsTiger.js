import React, { useState, useEffect } from "react";
import "./DragonVsTiger.css";

function DragonVsTiger() {
  const [balance, setBalance] = useState(1000);
  const [selectedChip, setSelectedChip] = useState(20);
  const [timer, setTimer] = useState(12);
  const [gameStarted, setGameStarted] = useState(false);
  const [winner, setWinner] = useState(null);
  const [flip, setFlip] = useState(false);

  const chips = [20, 50, 100, 200, 300, 500, 1000, 3000, 5000];

  useEffect(() => {
    if (!gameStarted) return;
    if (timer <= 0) {
      const win = Math.random() < 0.5 ? "dragon" : "tiger";
      setWinner(win);
      setFlip(true);
      return;
    }
    const interval = setInterval(() => setTimer((t) => t - 1), 1000);
    return () => clearInterval(interval);
  }, [gameStarted, timer]);

  const startGame = () => {
    if (balance < selectedChip) return alert("Not enough balance!");
    setBalance(balance - selectedChip);
    setGameStarted(true);
    setTimer(12);
    setWinner(null);
    setFlip(false);
  };

  return (
    <div className="dvt-container">
      <div className="dvt-balance">💸 Balance: {balance}</div>

      <div className="dvt-chips">
        {chips.map((chip) => (
          <button
            key={chip}
            className={`chip-btn ${selectedChip === chip ? "selected" : ""}`}
            onClick={() => setSelectedChip(chip)}
          >
            {chip}
          </button>
        ))}
      </div>

      <div className="dvt-timer">Timer: {timer}</div>

      <div className="dvt-cards">
        <div className={`dvt-card ${flip && winner === "dragon" ? "flip winner" : ""}`}>🐉</div>
        <div className={`dvt-card ${flip && winner === "tiger" ? "flip winner" : ""}`}>🐅</div>
      </div>

      {winner && <div className="dvt-result">{winner.toUpperCase()} Wins!</div>}

      <button className="dvt-btn-start" onClick={startGame}>
        Start
      </button>
    </div>
  );
}

export default DragonVsTiger;

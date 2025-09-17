import React, { useState, useEffect, useRef } from "react";
import "./DragonVsTiger.css";

function DragonVsTiger({ balance, setBalance, onClose }) {
  const chips = [20, 50, 100, 200, 300, 500, 1000, 3000, 5000];
  const [selectedChip, setSelectedChip] = useState(20);
  const [timer, setTimer] = useState(12);
  const [gameResult, setGameResult] = useState("");
  const [winnerCard, setWinnerCard] = useState(""); 
  const [isFlipped, setIsFlipped] = useState(false);
  const [roundActive, setRoundActive] = useState(false);

  const winSound = useRef(new Audio("/win.mp3"));
  const loseSound = useRef(new Audio("/lose.mp3"));

  // Countdown timer
  useEffect(() => {
    let interval;
    if (roundActive && timer > 0) {
      interval = setInterval(() => setTimer((t) => t - 1), 1000);
    } else if (roundActive && timer === 0) {
      playRound();
    }
    return () => clearInterval(interval);
  }, [roundActive, timer]);

  const startRound = () => {
    if (selectedChip > balance) {
      alert("Insufficient balance!");
      return;
    }
    setTimer(12);
    setGameResult("");
    setWinnerCard("");
    setIsFlipped(false);
    setRoundActive(true);
  };

  const playRound = () => {
    const dragonCard = Math.floor(Math.random() * 13) + 1;
    const tigerCard = Math.floor(Math.random() * 13) + 1;

    let outcome = "";
    if (dragonCard > tigerCard) outcome = "Dragon";
    else if (tigerCard > dragonCard) outcome = "Tiger";
    else outcome = "Tie";

    let newBalance = balance;
    if (outcome === "Dragon") newBalance += selectedChip;
    else if (outcome === "Tiger") newBalance += selectedChip;
    else newBalance += selectedChip * 2;

    setBalance(newBalance);
    localStorage.setItem("userBalance", newBalance.toString());
    setWinnerCard(outcome === "Tie" ? "" : outcome);
    setGameResult(`Dragon: ${dragonCard} | Tiger: ${tigerCard} → Result: ${outcome}`);
    setIsFlipped(true);
    setRoundActive(false);

    // Play sound
    if (outcome === "Dragon" || outcome === "Tiger") winSound.current.play();
    else loseSound.current.play();
  };

  return (
    <div className="dvt-overlay">
      <div className="dvt-container">
        <button className="dvt-close" onClick={onClose}>X</button>
        <h2>Dragon vs Tiger</h2>
        <p className="dvt-balance">Balance: 💸 {balance}</p>

        {/* Chip selection */}
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

        {/* Timer */}
        {roundActive && <p className="dvt-timer">⏱ {timer}s</p>}

        {/* Cards */}
        <div className="dvt-cards">
          <div className={`dvt-card ${winnerCard === "Dragon" ? "winner" : ""} ${isFlipped ? "flip" : ""}`}>
            <img src="/dragon.png" alt="Dragon" className="dvt-card-img" />
          </div>
          <div className={`dvt-card ${winnerCard === "Tiger" ? "winner" : ""} ${isFlipped ? "flip" : ""}`}>
            <img src="/tiger.png" alt="Tiger" className="dvt-card-img" />
          </div>
        </div>

        {/* Start button */}
        {!roundActive && <button className="dvt-btn-start" onClick={startRound}>Place Bet & Start</button>}

        {/* Result */}
        {isFlipped && <p className="dvt-result">{gameResult}</p>}
      </div>
    </div>
  );
}

export default DragonVsTiger;

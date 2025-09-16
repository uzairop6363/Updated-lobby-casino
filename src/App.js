import React, { useState, useEffect } from 'react';

const App = () => {
  const [playerId, setPlayerId] = useState('');
  const [playerName, setPlayerName] = useState('');
  const [showProfile, setShowProfile] = useState(false);

  useEffect(() => {
    let id = localStorage.getItem('playerId');
    if (!id) {
      id = Math.floor(10000000 + Math.random() * 90000000).toString();
      localStorage.setItem('playerId', id);
    }
    setPlayerId(id);

    const savedName = localStorage.getItem('playerName') || 'Guest';
    setPlayerName(savedName);
  }, []);

  const saveName = () => {
    localStorage.setItem('playerName', playerName);
    setShowProfile(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-purple-700 text-white flex flex-col">
      <div className="flex items-center justify-between bg-gradient-to-r from-red-600 to-yellow-500 p-3 shadow-lg">
        <div className="flex items-center">
          <img
            src="/avatar.png"
            alt="avatar"
            className="w-12 h-12 rounded-full cursor-pointer border-2 border-yellow-400"
            onClick={() => setShowProfile(true)}
          />
          <div className="ml-3">
            <div className="font-bold text-white">{playerName}</div>
            <div className="text-sm text-yellow-200">ID: {playerId}</div>
          </div>
        </div>
        <button className="bg-yellow-400 text-black font-bold px-4 py-2 rounded">
          BUY COIN
        </button>
      </div>

      <div className="flex-1 p-4 grid grid-cols-2 gap-4 overflow-y-auto">
        {['Dragon Tiger', 'Baccarat', 'Andar Bahar', 'Roulette', 'Slots', 'Teen Patti', 'Ludo', 'Mines'].map((game) => (
          <div key={game} className="bg-purple-800 p-4 rounded-lg shadow-lg flex flex-col items-center">
            <div className="w-16 h-16 bg-yellow-300 rounded-full mb-2"></div>
            <div className="text-center font-semibold">{game}</div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-purple-700 to-red-600 p-3 flex justify-around text-sm font-bold">
        {['Free Bonus', 'Withdraw', 'VIP', 'Bank', 'Ranking', 'E-Mail', 'Event', 'Promote', 'Deposit'].map((item) => (
          <div key={item} className="cursor-pointer">{item}</div>
        ))}
      </div>

      {showProfile && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-purple-800 p-6 rounded-lg w-80">
            <h2 className="text-xl font-bold mb-4 text-white">Set Your Name</h2>
            <input
              type="text"
              value={playerName}
              maxLength={8}
              onChange={(e) => setPlayerName(e.target.value)}
              className="w-full p-2 rounded bg-purple-600 text-white mb-4"
            />
            <button
              onClick={saveName}
              className="bg-yellow-400 px-4 py-2 rounded text-black font-bold w-full"
            >
              Save
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
        

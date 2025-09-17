import React from "react";
import "./DragonVsTiger.css";

function DragonVsTiger({ onClose }) {
  return (
    <div className="dvt-overlay">
      <div className="dvt-container">
        <button className="dvt-close" onClick={onClose}>X</button>
        {/* Game Image */}
        <img
          src="/dragon-tiger-placeholder.png"
          alt="Dragon vs Tiger"
          style={{ width: "100%", height: "auto", borderRadius: "12px" }}
        />
      </div>
    </div>
  );
}

export default DragonVsTiger;

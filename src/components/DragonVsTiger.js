import React from "react";
import "./DragonVsTiger.css";

function DragonVsTiger({ onClose }) {
  return (
    <div className="dvt-overlay">
      <div className="dvt-container">
        <button className="dvt-close" onClick={onClose}>X</button>
        {/* Fullscreen Portrait Image */}
        <img
          src="/dragon-tiger-placeholder.png"
          alt="Dragon vs Tiger"
          className="dvt-full-image"
        />
      </div>
    </div>
  );
}

export default DragonVsTiger;

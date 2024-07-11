import React from "react";
import "./Overlay.css";

const Overlay = ({ image, onClose }) => {
  return (
    <div className="overlay" onClick={onClose}>
      <img src={image} alt="Overlay" className="overlay-image" />
    </div>
  );
};

export default Overlay;

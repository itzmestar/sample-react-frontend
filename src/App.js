import React, { useState } from "react";
import CardList from "./components/CardList";
import Overlay from "./components/Overlay";
import "./App.css";

const App = () => {
  const [overlayImage, setOverlayImage] = useState(null);

  const handleCardClick = (image) => {
    setOverlayImage(image);
  };

  const handleCloseOverlay = () => {
    setOverlayImage(null);
  };

  return (
    <div className="App">
      <h1>Document Cards</h1>
      <CardList onClick={handleCardClick} />
      {overlayImage && (
        <Overlay image={overlayImage} onClose={handleCloseOverlay} />
      )}
    </div>
  );
};

export default App;

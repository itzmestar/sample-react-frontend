import React, { useState, useEffect } from "react";
import Card from "./Card";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "./CardList.css";

const CardList = ({ onClick }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  const moveCard = (fromIndex, toIndex) => {
    const updatedItems = [...items];
    const [movedItem] = updatedItems.splice(fromIndex, 1);
    updatedItems.splice(toIndex, 0, movedItem);
    setItems(updatedItems);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="card-list">
        {items.map((item, index) => (
          <Card
            key={item.type}
            item={item}
            index={index}
            moveCard={moveCard}
            onClick={onClick}
          />
        ))}
      </div>
    </DndProvider>
  );
};

export default CardList;

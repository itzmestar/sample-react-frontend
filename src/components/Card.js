import React, { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import "./Card.css";

const Card = ({ item, index, moveCard, onClick }) => {
  const ref = useRef(null);

  const [, drop] = useDrop({
    accept: "card",
    hover(draggedItem) {
      if (draggedItem.index !== index) {
        moveCard(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: "card",
    item: { type: "card", index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  const opacity = isDragging ? 0.4 : 1;
  const thumbnail = `thumbnail${index + 1}.jpg`; // Change as per your image naming

  return (
    <div
      ref={ref}
      className="card"
      style={{ opacity }}
      onClick={() => onClick(thumbnail)}
    >
      <img src={thumbnail} alt={item.title} className="thumbnail" />
      <div>{item.title}</div>
    </div>
  );
};

export default Card;
